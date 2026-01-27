import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy - Giggin'",
  description: "Giggin' respects your privacy and is committed to protecting your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-black italic tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          
          <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg text-foreground">
              Giggin&apos; respects your privacy and is committed to protecting your personal information.
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">What we collect</h2>
              <p className="mt-3">We may collect:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Your email address if you join the waitlist</li>
                <li>Basic usage information to improve recommendations</li>
                <li>Location data only when required to show nearby events</li>
              </ul>
              <p className="mt-3 font-medium text-foreground">We do not sell your personal data.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">How we use information</h2>
              <p className="mt-3">Your information is used to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Provide relevant event recommendations</li>
                <li>Improve product features and user experience</li>
                <li>Notify you about access, updates, or launches if you opt in</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Data sharing</h2>
              <p className="mt-3">
                Giggin&apos; does not share personal data with third parties for advertising purposes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Cookies</h2>
              <p className="mt-3">
                We may use cookies or similar technologies to understand site usage and improve performance.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Your choices</h2>
              <p className="mt-3">
                You can request data removal or opt out of communications at any time by contacting us.
              </p>
            </section>
          </div>
          
          <div className="mt-12 border-t border-border pt-8">
            <h2 className="text-lg font-bold text-foreground">Contact</h2>
            <p className="mt-2 text-muted-foreground">
              <a
                href="mailto:info@epicsound.io"
                className="text-foreground underline transition-colors hover:text-[#ec4899]"
              >
                info@epicsound.io
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
