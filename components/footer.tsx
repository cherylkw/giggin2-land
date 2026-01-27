"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import { FadeIn } from "@/components/motion";

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const footerLinks = {
  navigation: [
    { href: "/", label: "Fans" },
    { href: "/artists", label: "Artists" },
    { href: "/promoters", label: "Promoters" },
    { href: "/venues", label: "Venues" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "mailto:info@epicsound.io", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
  social: [
    { href: "https://x.com/epic_soundio", label: "X", icon: XIcon },
    { href: "https://www.instagram.com/epicsound.beat", label: "Instagram", icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            {/* Logo & Description */}
            <div className="max-w-sm">
              <Link href="/" className="inline-flex items-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    src="/images/giggin-logo.png"
                    alt="Giggin'"
                    width={300}
                    height={96}
                    className="h-[6.5rem] w-auto brightness-0 invert"
                  />
                </motion.div>
              </Link>
              <p className="mt-4 text-sm text-background/60">
                Find shows you&apos;ll actually go to. Personalized live music discovery.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-12 sm:gap-16">
              <div>
                <h3 className="text-sm font-bold text-background">Navigate</h3>
                <nav className="mt-4 flex flex-col gap-3">
                  {footerLinks.navigation.map((link) => (
                    <motion.div key={link.href} whileHover={{ x: 4 }}>
                      <Link
                        href={link.href}
                        className="text-sm text-background/60 transition-colors hover:text-background"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              <div>
                <h3 className="text-sm font-bold text-background">Company</h3>
                <nav className="mt-4 flex flex-col gap-3">
                  {footerLinks.company.map((link) => (
                    <motion.div key={link.href} whileHover={{ x: 4 }}>
                      <Link
                        href={link.href}
                        className="text-sm text-background/60 transition-colors hover:text-background"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              <div>
                <h3 className="text-sm font-bold text-background">Legal</h3>
                <nav className="mt-4 flex flex-col gap-3">
                  {footerLinks.legal.map((link) => (
                    <motion.div key={link.href} whileHover={{ x: 4 }}>
                      <Link
                        href={link.href}
                        className="text-sm text-background/60 transition-colors hover:text-background"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-[#ec4899] hover:text-white"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 border-t border-background/10 pt-8"
        >
          <p className="text-center text-sm text-background/40">
            &copy; 2026 Giggin&apos; by{" "}
            <a
              href="https://www.epicsound.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 underline transition-colors hover:text-background"
            >
              Epic Sound
            </a>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
