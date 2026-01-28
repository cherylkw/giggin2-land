"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { CalendarCheck, Users, Sparkles, Music } from "lucide-react";

const benefits = [
  {
    icon: CalendarCheck,
    title: "Better calendar consistency",
    description:
      "Fill more nights with shows that actually draw, reducing dark dates and increasing revenue per night.",
    image: "/images/friends-concert.jpg",
  },
  {
    icon: Users,
    title: "Fewer low-attendance nights",
    description:
      "Match with artists who already show real demand in your market, reducing weak shows and missed targets.",
    image: "/images/concert-crowd.jpg",
  },
  {
    icon: Sparkles,
    title: "Smarter artist matching",
    description:
      "Find artists whose audience size, style, and demand actually fit your room and capacity.",
    image: "/images/venue-interior.jpg",
  },
];

export default function VenuesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-16">
        {/* Hero Section - Teal */}
        <section className="relative overflow-hidden bg-[#14b8a6] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-black italic leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl"
                >
                  Book the <span className="text-black">right</span> dates.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 max-w-lg text-lg text-white/90"
                >
                  Giggin&apos; helps venues book the right artists at the right
                  time based on real local demand.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8"
                >
                  <WaitlistForm variant="hero-teal" userType="venue" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/venue-interior.jpg"
                    alt="Venue interior"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14b8a6]">
                      <Music className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-foreground">87%</p>
                      <p className="text-sm text-muted-foreground">Fill rate increase</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pointer-events-none absolute -right-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-white/10"
          />
        </section>

        {/* Benefits Section */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-black italic tracking-tight text-foreground md:text-5xl">
                Venue <span className="text-[#14b8a6]">benefits</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Make every booking count with demand-driven insights.
              </p>
            </FadeIn>

            <StaggerChildren className="mt-16 grid gap-6 lg:grid-cols-3" staggerDelay={0.1}>
              {benefits.map((benefit, index) => (
                <StaggerItem key={benefit.title}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    className={`group relative h-full overflow-hidden rounded-3xl p-8 ${
                      index === 0 ? "bg-[#14b8a6]" : index === 1 ? "bg-foreground" : "bg-[#f97316]"
                    }`}
                  >
                    {/* Background image */}
                    <Image
                      src={benefit.image || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative z-10">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                        index === 1 ? "bg-white/10" : "bg-black/10"
                      }`}>
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-4 text-white/80">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Image Section */}
        <section className="bg-foreground py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <SlideIn direction="left" className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="group relative aspect-square overflow-hidden rounded-3xl"
                  >
                    <Image
                      src="/images/concert-crowd.jpg"
                      alt="Concert crowd"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="mt-8 group relative aspect-square overflow-hidden rounded-3xl"
                  >
                    <Image
                      src="/images/dj-performance.jpg"
                      alt="DJ performing"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
              </SlideIn>

              <SlideIn direction="right">
                <h2 className="text-4xl font-black italic tracking-tight text-background md:text-5xl">
                  From demand to paid attendance
                </h2>
                <p className="mt-6 text-lg text-background/70">
                  Giggin&apos; turns verified local demand into live events,
                  ticket sales, and payouts in one continuous flow.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "See demand before booking",
                    "Book the show with confidence",
                    "Sell tickets when the event goes live",
                  ].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-background/90">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="relative overflow-hidden bg-[#14b8a6] py-24 lg:py-32">
          {/* Floating images */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-20 top-10 h-40 w-40 overflow-hidden rounded-3xl opacity-30"
          >
            <Image src="/images/venue-interior.jpg" alt="" fill className="object-cover" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [-12, -15, -12] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 overflow-hidden rounded-3xl opacity-30"
          >
            <Image src="/images/dj-performance.jpg" alt="" fill className="object-cover" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute right-1/4 top-20 h-32 w-32 overflow-hidden rounded-full opacity-20"
          >
            <Image src="/images/concert-crowd.jpg" alt="" fill className="object-cover" />
          </motion.div>
          <FadeIn className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-4xl font-black italic tracking-tight text-white md:text-5xl">
              Ready to fill your calendar?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Get early access to book better-matched shows and improve nightly revenue.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm variant="hero-teal" userType="venue" />
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
