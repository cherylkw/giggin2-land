"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const steps = [
  {
    number: "01",
    title: "Ask naturally",
    description:
      "Describe what you want in plain language. No filters to click through.",
    color: "bg-[#7c3aed]",
    image: "/images/friends-concert.jpg",
  },
  {
    number: "02",
    title: "Discover shows",
    description:
      "Get recommendations based on your taste, budget, and schedule.",
    color: "bg-[#ec4899]",
    image: "/images/concert-crowd.jpg",
  },
  {
    number: "03",
    title: "Plan your night",
    description: "Bookmark events and build your calendar for the week ahead.",
    color: "bg-[#14b8a6]",
    image: "/images/venue-interior.jpg",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black italic tracking-tight text-background md:text-5xl lg:text-6xl">
            How it works
          </h2>
          <p className="mt-6 text-lg text-background/70">
            From curiosity to concert in three simple steps.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-20 grid gap-6 lg:grid-cols-3" staggerDelay={0.15}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3 }}
                className={`group relative h-full overflow-hidden rounded-3xl ${step.color} p-8`}
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10">
                  <span className="text-6xl font-black text-white/30">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-white/80">{step.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
