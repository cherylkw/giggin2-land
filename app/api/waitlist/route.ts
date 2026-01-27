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
    description: "We're building Giggin' to help you find shows based on your taste, timing, and location. No more endless scrolling - just music you'll actually show up for.",
  },
  artist: {
    heading: "Get ready to play where fans actually show up.",
    description: "We're building Giggin' to help artists understand where demand is forming and turn it into real shows, real fans, and real revenue.",
  },
  promoter: {
    heading: "Get ready to book with confidence.",
    description: "We're building Giggin' to help promoters reduce downside risk, forecast attendance, and commit capital with confidence.",
  },
  venue: {
    heading: "Get ready to fill more nights.",
    description: "We're building Giggin' to help venues book the right artists at the right time based on real local demand.",
  },
};

export async function POST(request: Request) {
  try {
    const { email, userType = "fan" } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const validUserType = (["fan", "artist", "promoter", "venue"].includes(userType) ? userType : "fan") as UserType;
    const typeLabel = userTypeLabels[validUserType];
    const typeMessage = userTypeMessages[validUserType];

    // Add contact to Resend audience with userType as a custom field
    await resend.contacts.create({
      email,
      firstName: typeLabel,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID || "",
    });

    // Try to send personalized confirmation email
    // Note: This will only work for verified domains or your own email in test mode
    try {
      await resend.emails.send({
        from: "Giggin' <onboarding@resend.dev>",
        to: email,
        subject: `Welcome to Giggin' - You're on the ${typeLabel} Waitlist!`,
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
            <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin-bottom: 24px;">
              We'll be in touch soon with updates and early access information.
            </p>
            <p style="font-size: 14px; color: #9ca3af;">
              - The Giggin' Team by <a href="https://www.epicsound.io" style="color: #ec4899; text-decoration: none;">Epic Sound</a>
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // Email sending failed (likely domain not verified), but contact was still added
      console.log("Email sending skipped (domain not verified):", emailError);
    }

    return NextResponse.json(
      { message: "Successfully joined waitlist", userType: validUserType },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
