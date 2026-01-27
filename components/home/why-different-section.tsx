"use client";

import Image from "next/image";
import { Zap, MapPin, Target, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/motion";

const features = [
  {
    icon: Zap,
    title: "Less scrolling, more going out",
    description:
      "Stop wasting time on endless event lists. Get straight to shows worth your night.",
  },
  {
    icon: MapPin,
    title: "Local-first discovery",
    description:
      "We prioritize what's happening in your neighborhood, not just the big arena tours.",
  },
  {
    icon: Target,
    title: "Based on intent",
    description:
      "Not just who you follow, but what you actually want to do this week.",
  },
  {
    icon: Volume2,
    title: "Made for music lovers",
    description:
      "Built by fans who know the difference between a good show and a great one.",
  },
];

export function WhyDifferentSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Image collage */}
          <SlideIn direction="left" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
              >
                <Image
                  src="/images/artist-stage.jpg"
                  alt="Artist performing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
              <div className="mt-8 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl"
                >
                  <Image
                    src="/images/indie-band.jpg"
                    alt="Indie band"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#ec4899] p-6"
                >
                  <p className="text-2xl font-black italic text-white">
                    &ldquo;Finally, an app that gets my music taste.&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-bold text-white/70">
                    - Early beta user
                  </p>
                </motion.div>
              </div>
            </div>
          </SlideIn>

          {/* Right - Content */}
          <SlideIn direction="right">
            <h2 className="text-4xl font-black italic tracking-tight text-foreground md:text-5xl">
              Why Giggin&apos; is{" "}
              <span className="text-[#ec4899]">different</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Built for fans who want to discover, not just scroll.
            </p>

            <StaggerChildren className="mt-12 grid gap-8 sm:grid-cols-2" staggerDelay={0.1}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background transition-colors group-hover:bg-[#ec4899] group-hover:text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
