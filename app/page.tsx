import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { DemoSection } from "@/components/home/demo-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { WhyDifferentSection } from "@/components/home/why-different-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <WhyDifferentSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
