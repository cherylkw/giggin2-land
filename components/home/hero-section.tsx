"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#ec4899] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl font-black italic leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Find shows you&apos;ll{" "}
              <span className="not-italic text-black">actually</span> go to.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 max-w-lg text-lg text-white/90"
            >
              Giggin&apos; helps turn your taste and timing into live music
              you&apos;ll actually show up for.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8"
            >
              <WaitlistForm variant="hero-pink" userType="fan" />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-12 grid gap-4 border-t border-white/30 pt-8 sm:gap-6 sm:grid-cols-3"
            >
              <div>
                <p className="text-sm font-semibold text-white">Live shows, updated daily</p>
                <p className="text-xs text-white/70">Across venues and festivals</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Local-first discovery</p>
                <p className="text-xs text-white/70">Where you are</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Built for real attendance</p>
                <p className="text-xs text-white/70">Not just clicks</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
                >
                  <Image
                    src="/images/concert-crowd.jpg"
                    alt="Concert crowd"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl"
                >
                  <Image
                    src="/images/dj-performance.jpg"
                    alt="DJ performing"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </div>
              <div className="mt-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl"
                >
                  <Image
                    src="/images/friends-concert.jpg"
                    alt="Friends at concert"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
                >
                  <Image
                    src="/images/artist-stage.jpg"
                    alt="Artist on stage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pointer-events-none absolute -right-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-white/10"
      />
    </section>
  );
}
