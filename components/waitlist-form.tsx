"use client";

import React from "react";
import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  variant?: "hero" | "hero-pink" | "hero-purple" | "hero-teal" | "section" | "dark";
  userType?: "fan" | "artist" | "promoter" | "venue";
  className?: string;
}

export function WaitlistForm({
  variant = "section",
  userType = "fan",
  className,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, userType }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("idle");
      }
    } catch (error) {
      console.error("Waitlist signup error:", error);
      setStatus("idle");
    }
  };

  const getSuccessStyles = () => {
    switch (variant) {
      case "hero":
        return "bg-black text-[#1ed760]";
      case "hero-pink":
        return "bg-white text-[#ec4899]";
      case "hero-purple":
        return "bg-white text-[#7c3aed]";
      case "hero-teal":
        return "bg-white text-[#14b8a6]";
      case "dark":
        return "bg-white text-foreground";
      default:
        return "bg-foreground text-background";
    }
  };

  const getInputStyles = () => {
    switch (variant) {
      case "hero":
        return "bg-black/10 text-black placeholder:text-black/50 focus:ring-black";
      case "hero-pink":
        return "bg-white/20 text-white placeholder:text-white/60 focus:ring-white";
      case "hero-purple":
        return "bg-white/20 text-white placeholder:text-white/60 focus:ring-white";
      case "hero-teal":
        return "bg-white/20 text-white placeholder:text-white/60 focus:ring-white";
      case "dark":
        return "bg-white/20 text-white placeholder:text-white/70 focus:ring-white";
      default:
        return "bg-muted text-foreground placeholder:text-muted-foreground focus:ring-foreground";
    }
  };

  const getButtonStyles = () => {
    switch (variant) {
      case "hero":
        return "bg-black text-[#1ed760]";
      case "hero-pink":
        return "bg-white text-[#ec4899]";
      case "hero-purple":
        return "bg-white text-[#7c3aed]";
      case "hero-teal":
        return "bg-white text-[#14b8a6]";
      case "dark":
        return "bg-white text-foreground";
      default:
        return "bg-foreground text-background";
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold",
          getSuccessStyles(),
          className
        )}
      >
        <Check className="h-5 w-5" />
        You&apos;re on the list!
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3 sm:flex-row sm:gap-2", className)}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={cn(
          "h-12 w-full rounded-full px-5 text-sm font-medium outline-none transition-all focus:ring-2 sm:max-w-xs",
          getInputStyles()
        )}
      />
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-sm font-bold transition-colors disabled:opacity-70",
          getButtonStyles()
        )}
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Get Early Access
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </motion.button>
    </form>
  );
}
