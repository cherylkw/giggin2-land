import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About - Giggin'",
  description: "Learn about Giggin' and our mission to help people discover live music they actually want to attend.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-black italic tracking-tight text-foreground sm:text-5xl">
            About Giggin&apos;
          </h1>
          
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg text-foreground">
              Giggin&apos; helps people discover live music they actually want to attend.
            </p>
            
            <p>
              Most event platforms focus on listings, promotion, or past popularity. Giggin&apos; is built around something simpler and more human: real intent. Where you are. When you want to go out. What kind of experience fits your time, mood, and budget.
            </p>
            
            <p>
              Instead of endless scrolling and filters, Giggin&apos; lets you ask naturally and get recommendations that make sense for your week. From small local shows to larger events and festivals, Giggin&apos; prioritizes relevance over volume.
            </p>
            
            <p>
              Giggin&apos; is designed for fans who value in-person experiences in a digital-first world. It learns from real behavior, not vanity metrics, to surface events that feel worth leaving the house for.
            </p>
            
            <p>
              Giggin&apos; is part of the{" "}
              <a
                href="https://www.epicsound.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline transition-colors hover:text-[#ec4899]"
              >
                Epic Sound
              </a>{" "}
              ecosystem.
            </p>
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
