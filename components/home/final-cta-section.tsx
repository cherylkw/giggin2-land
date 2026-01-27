"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";
import { FadeIn } from "@/components/motion";

export function FinalCtaSection() {
  return (
    <section id="waitlist" className="relative overflow-hidden bg-[#7c3aed] py-24 lg:py-32">
      {/* Floating images */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-10 h-40 w-40 overflow-hidden rounded-3xl opacity-30"
      >
        <Image src="/images/concert-crowd.jpg" alt="" fill className="object-cover" />
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
        <Image src="/images/friends-concert.jpg" alt="" fill className="object-cover" />
      </motion.div>

      <FadeIn className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-black italic tracking-tight text-white md:text-5xl lg:text-6xl">
          Ready to find your next show?
        </h2>
        <p className="mt-6 text-lg text-white/80">
          Get early access to shows that fit you and your circle.
        </p>
        <div className="mt-10 flex justify-center">
          <WaitlistForm variant="hero-purple" userType="fan" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-white/60"
        >
          No spam. Just show recommendations.
        </motion.p>
      </FadeIn>
    </section>
  );
}
