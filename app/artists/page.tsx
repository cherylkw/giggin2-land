"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { BarChart3, MapPin, Route, Users, TrendingUp, Heart, Eye } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "City-level demand signals",
    description:
      "See where fans are actively searching for shows like yours before you commit to dates, routing, or spend.",
    image: "/images/friends-concert.jpg",
  },
  {
    icon: MapPin,
    title: "Venue fit guidance",
    description:
      "Get matched with venues that fit your draw and style based on live demand, not past assumptions.",
    image: "/images/concert-crowd.jpg",
  },
  {
    icon: Route,
    title: "Smarter routing decisions",
    description:
      "Turn proven demand into bookable shows, optional ticketing, and paid attendance without relying on ads or guesswork.",
    image: "/images/venue-interior.jpg",
  },
];

const growthBenefits = [
  {
    icon: Users,
    title: "Better attendance",
    description: "Play to fuller rooms by going where fans actually want to see you.",
  },
  {
    icon: TrendingUp,
    title: "Stronger local momentum",
    description: "Build lasting fan relationships in each city you visit.",
  },
  {
    icon: Heart,
    title: "Fewer empty rooms",
    description: "Avoid the demoralizing experience of playing to sparse crowds.",
  },
  {
    icon: Eye,
    title: "Real fan exposure",
    description: "Get discovered by fans who are actively looking for live shows, not just scrolling or streaming.",
  },
];

export default function ArtistsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-16">
        {/* Hero Section - Purple */}
        <section className="relative overflow-hidden bg-[#7c3aed] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-black italic leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl"
                >
                  Play the right cities. Build <span className="text-[#ec4899]">real</span> fans.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 max-w-lg text-lg text-white/80"
                >
                  Giggin&apos; helps artists understand where demand is forming
                  and turn it into real shows, real fans, and real revenue before tours and budgets are locked.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8"
                >
                  <WaitlistForm variant="dark" userType="artist" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
                  >
                    <Image
                      src="/images/artist-stage.jpg"
                      alt="Artist on stage"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 group relative aspect-[3/4] overflow-hidden rounded-3xl"
                  >
                    <Image
                      src="/images/indie-band.jpg"
                      alt="Indie band performing"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
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

        {/* What Artists Get Section */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-black italic tracking-tight text-foreground md:text-5xl">
                What artists <span className="text-[#7c3aed]">get</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Decision tools that turn real demand into booked shows, ticketed fans, and lasting growth.
              </p>
            </FadeIn>

            <StaggerChildren className="mt-16 grid gap-6 lg:grid-cols-3" staggerDelay={0.1}>
              {benefits.map((benefit, index) => (
                <StaggerItem key={benefit.title}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    className={`group relative h-full overflow-hidden rounded-3xl p-8 ${
                      index === 0 ? "bg-[#7c3aed]" : index === 1 ? "bg-foreground" : "bg-[#ec4899]"
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

            {/* Subtle ticketing note */}
            <FadeIn className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                When it makes sense, artists can activate Giggin&apos; ticketing to convert demand into paid attendance and instant payouts.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Fan Growth Section */}
        <section className="bg-foreground py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <SlideIn direction="left">
                <h2 className="text-4xl font-black italic tracking-tight text-background md:text-5xl">
                  How it helps fan growth
                </h2>
                <p className="mt-6 text-lg text-background/70">
                  Turn shows into lasting connections with your audience and convert one-night attendance into a growing, city-by-city fanbase.
                </p>

                <StaggerChildren className="mt-12 space-y-8" staggerDelay={0.1}>
                  {growthBenefits.map((benefit) => (
                    <StaggerItem key={benefit.title}>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="flex gap-4"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]">
                          <benefit.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-background">
                            {benefit.title}
                          </h3>
                          <p className="mt-1 text-background/70">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </SlideIn>

              <SlideIn direction="right" className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl"
                >
                  <Image
                    src="/images/concert-crowd.jpg"
                    alt="Concert crowd"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="relative overflow-hidden bg-[#7c3aed] py-24 lg:py-32">
          {/* Floating images */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-20 top-10 h-40 w-40 overflow-hidden rounded-3xl opacity-30"
          >
            <Image src="/images/artist-stage.jpg" alt="" fill className="object-cover" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [-12, -15, -12] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 overflow-hidden rounded-3xl opacity-30"
          >
            <Image src="/images/indie-band.jpg" alt="" fill className="object-cover" />
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
              Ready to tour smarter?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Get early access to reduce wasted tour spend and play cities where fans actually show up.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm variant="dark" userType="artist" />
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
