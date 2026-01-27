import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service - Giggin'",
  description: "Terms of Service for using Giggin' live music discovery platform.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-black italic tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          
          <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg text-foreground">
              By using Giggin&apos;, you agree to the following terms.
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Use of the service</h2>
              <p className="mt-3">
                Giggin&apos; provides event discovery and related information for personal, non-commercial use. Event details, availability, and pricing are provided for convenience and may change.
              </p>
              <p className="mt-3">
                Giggin&apos; does not guarantee attendance, availability, or outcomes of any event.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Accounts and access</h2>
              <p className="mt-3">
                Some features may require signing up or joining a waitlist. You are responsible for the accuracy of the information you provide.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Third-party services</h2>
              <p className="mt-3">
                Giggin&apos; may link to external ticketing platforms or event providers. Giggin&apos; is not responsible for transactions, policies, or services provided by third parties.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Intellectual property</h2>
              <p className="mt-3">
                All content, branding, and design on Giggin&apos; are owned by Epic Sound or its licensors and may not be used without permission.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Limitation of liability</h2>
              <p className="mt-3">
                Giggin&apos; is provided as-is. We are not liable for losses, damages, or issues arising from event attendance or third-party services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-foreground">Changes</h2>
              <p className="mt-3">
                We may update these terms from time to time. Continued use of the service indicates acceptance of any changes.
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
