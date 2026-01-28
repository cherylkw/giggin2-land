"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { LineChart, Layers, Lightbulb, DollarSign } from "lucide-react";

const capabilities = [
  {
    icon: LineChart,
    title: "Attendance forecasting",
    description:
      "Get reliable turnout forecasts based on artist, venue, pricing, and timing before guarantees and marketing spend are locked.",
    color: "bg-[#f97316]",
    image: "/images/concert-crowd.jpg",
  },
  {
    icon: Layers,
    title: "Scenario modeling",
    description:
      "Test pricing and marketing scenarios before committing so you can see what actually improves margin, not just sales.",
    color: "bg-[#7c3aed]",
    image: "/images/friends-concert.jpg",
  },
  {
    icon: Lightbulb,
    title: "Recommended actions",
    description:
      "Receive clear guidance on how to optimize each event for stronger turnout and better unit economics.",
    color: "bg-[#14b8a6]",
    image: "/images/venue-interior.jpg",
  },
  {
    icon: DollarSign,
    title: "Financial visibility",
    description: "Understand payouts, splits, and promoter exposure before the show, not after the money is gone.",
    color: "bg-[#ec4899]",
    image: "/images/dj-performance.jpg",
  },
];

const workflowSteps = [
  { step: "01", title: "Select event", description: "Choose artist, venue, and date with real demand context." },
  { step: "02", title: "Forecast", description: "See predicted attendance, revenue, and downside risk." },
  { step: "03", title: "Adjust", description: "Test pricing and marketing scenarios to improve returns before launch." },
  { step: "04", title: "Launch", description: "Go live knowing the economics already make sense." },
];

export default function PromotersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-black italic leading-[0.95] tracking-tight text-background md:text-6xl lg:text-7xl"
                >
                  Forecast demand <span className="text-[#1ed760]">before</span> you spend.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 max-w-lg text-lg text-background/70"
                >
                  Giggin&apos; helps promoters reduce downside risk, avoid weak shows,
                  and commit capital with confidence.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8"
                >
                  <WaitlistForm variant="dark" userType="promoter" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="group relative aspect-video overflow-hidden rounded-3xl">
                  <Image
                    src="/images/venue-interior.jpg"
                    alt="Venue interior"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <p className="text-2xl font-black italic text-white">
                      &ldquo;Finally, data I can trust.&rdquo;
                    </p>
                    <p className="mt-2 text-sm text-white/70">- Local promoter, LA</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pointer-events-none absolute -right-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-white/5"
          />
        </section>

        {/* Core Capabilities Section */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-black italic tracking-tight text-foreground md:text-5xl">
                Core <span className="text-[#1ed760]">capabilities</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Everything you need to reduce risk and maximize returns.
              </p>
            </FadeIn>

            <StaggerChildren className="mt-16 grid gap-6 sm:grid-cols-2" staggerDelay={0.1}>
              {capabilities.map((capability) => (
                <StaggerItem key={capability.title}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    className={`group relative h-full overflow-hidden rounded-3xl ${capability.color} p-8`}
                  >
                    {/* Background image */}
                    <Image
                      src={capability.image || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative z-10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/10">
                        <capability.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-white">
                        {capability.title}
                      </h3>
                      <p className="mt-4 text-white/80">{capability.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="bg-[#7c3aed] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-black italic tracking-tight text-white md:text-5xl">
                A simple workflow
              </h2>
              <p className="mt-6 text-lg text-white/70">
                From concept to confidence in four steps.
              </p>
            </FadeIn>

            <StaggerChildren className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
              {workflowSteps.map((item) => (
                <StaggerItem key={item.step}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="h-full rounded-3xl bg-white/10 p-6 backdrop-blur-sm"
                  >
                    <span className="text-5xl font-black text-white/30">
                      {item.step}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{item.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="relative overflow-hidden bg-foreground py-24 lg:py-32">
          {/* Floating images */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-20 top-10 h-40 w-40 overflow-hidden rounded-3xl opacity-20"
          >
            <Image src="/images/venue-interior.jpg" alt="" fill className="object-cover" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [-12, -15, -12] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 overflow-hidden rounded-3xl opacity-20"
          >
            <Image src="/images/concert-crowd.jpg" alt="" fill className="object-cover" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute right-1/4 top-20 h-32 w-32 overflow-hidden rounded-full opacity-15"
          >
            <Image src="/images/dj-performance.jpg" alt="" fill className="object-cover" />
          </motion.div>
          <FadeIn className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-4xl font-black italic tracking-tight text-white md:text-5xl">
              Ready to book with confidence?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Get early access to see demand earlier and reduce risk before capital is committed.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm variant="dark" userType="promoter" />
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
