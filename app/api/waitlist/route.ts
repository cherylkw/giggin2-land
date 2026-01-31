import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type UserType = "fan" | "artist" | "promoter" | "venue";

const userTypeLabels: Record<UserType, string> = {
  fan: "Fan",
  artist: "Artist",
  promoter: "Promoter",
  venue: "Venue",
};

const userTypeMessages: Record<UserType, { heading: string; description: string }> = {
  fan: {
    heading: "Get ready to discover live music that fits your life.",
    description:
      "We're building Giggin' to help you find shows based on your taste, timing, and location. No more endless scrolling, just music you'll actually show up for.",
  },
  artist: {
    heading: "Get ready to play where fans actually show up.",
    description:
      "We're building Giggin' to help artists understand where demand is forming and turn it into real shows, real fans, and real revenue.",
  },
  promoter: {
    heading: "Get ready to book with confidence.",
    description:
      "We're building Giggin' to help promoters reduce downside risk, forecast attendance, and commit capital with confidence.",
  },
  venue: {
    heading: "Get ready to fill more nights.",
    description:
      "We're building Giggin' to help venues book the right artists at the right time based on real local demand.",
  },
};

// Use your verified sender when ready, otherwise keep resend.dev for testing
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Giggin' <info@epicsound.io>";

const INTERNAL_NOTIFY_TO =
  process.env.INTERNAL_NOTIFY_TO || "info@epicsound.io";

export async function POST(request: Request) {
  try {
    const { email, userType = "fan" } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const validUserType = (["fan", "artist", "promoter", "venue"].includes(userType)
      ? userType
      : "fan") as UserType;

    const typeLabel = userTypeLabels[validUserType];
    const typeMessage = userTypeMessages[validUserType];

    // 1) Add contact to Resend audience
    await resend.contacts.create({
      email,
      firstName: typeLabel, // ok for now, but better to store userType properly later
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID || "",
    });

    // 2) Notify your internal inbox (this is what you expected Google to receive)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [INTERNAL_NOTIFY_TO],
      subject: `New Giggin waitlist signup: ${typeLabel}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif;">
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>User type:</strong> ${typeLabel}</p>
          <p><strong>Source:</strong> Giggin waitlist form</p>
        </div>
      `,
    });

    // 3) Send confirmation email to the user (optional, but recommended)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      replyTo: INTERNAL_NOTIFY_TO,
      subject: `Welcome to Giggin'. You're on the ${typeLabel} waitlist.`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 28px; font-weight: bold; font-style: italic; margin-bottom: 24px;">
            You're on the list!
          </h1>
          <p style="font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 12px;">
            ${typeMessage.heading}
          </p>
          <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin-bottom: 24px;">
            ${typeMessage.description}
          </p>
          <div style="background-color: #f3f4f6; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="font-size: 14px; color: #6b7280; margin: 0;">
              <strong>Signed up as:</strong> ${typeLabel}<br/>
              <strong>Email:</strong> ${email}
            </p>
          </div>
          <p style="font-size: 14px; color: #9ca3af;">
            The Giggin' Team at Epic Sound
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Successfully joined waitlist", userType: validUserType },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 });
  }
}
