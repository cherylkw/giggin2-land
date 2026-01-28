"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, MapPin, Calendar, Heart, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion";

interface Event {
  id: number;
  artist: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  price: number;
  genre: string;
  image: string;
  matchLabel: string;
}

interface ChatMessage {
  id: number;
  type: "user" | "agent";
  content?: string;
  agentTitle?: string;
  agentExplanation?: string;
  events?: Event[];
}

const chatFlow = [
  {
    question: "I want something fun tonight, but not too intense.",
    agentTitle: "Why these shows",
    agentExplanation:
      "You said you want something fun but not too intense tonight. These picks favor smaller venues, upbeat energy, and earlier set times.",
    events: [
      {
        id: 1,
        artist: "Soft Landing",
        venue: "The Satellite Lounge",
        location: "Silver Lake, LA",
        date: "Tonight",
        time: "7:30 PM",
        price: 18,
        genre: "Acoustic",
        image: "/images/venue-interior.jpg",
        matchLabel: "Good fit for a relaxed night",
      },
      {
        id: 2,
        artist: "Moonlit Sessions",
        venue: "The Mint",
        location: "Mid-City, LA",
        date: "Tonight",
        time: "8 PM",
        price: 22,
        genre: "Jazz",
        image: "/images/indie-band.jpg",
        matchLabel: "Easy weekday energy",
      },
      {
        id: 3,
        artist: "Evening Glow",
        venue: "Hotel Cafe",
        location: "Hollywood",
        date: "Tonight",
        time: "7 PM",
        price: 15,
        genre: "Singer-Songwriter",
        image: "/images/artist-stage.jpg",
        matchLabel: "Short sets, earlier start",
      },
    ],
  },
  {
    question:
      "I usually save shows but only go to a few. What would I actually go to?",
    agentTitle: "Why these shows",
    agentExplanation:
      "You tend to save more than you attend. These are high follow-through picks based on what people like you actually show up to.",
    events: [
      {
        id: 4,
        artist: "The Local Haunts",
        venue: "Zebulon",
        location: "Frogtown, LA",
        date: "Fri, Feb 7",
        time: "9 PM",
        price: 20,
        genre: "Indie Rock",
        image: "/images/indie-band.jpg",
        matchLabel: "High follow through",
      },
      {
        id: 5,
        artist: "Driftwood",
        venue: "The Echo",
        location: "Echo Park, LA",
        date: "Sat, Feb 8",
        time: "8:30 PM",
        price: 25,
        genre: "Folk",
        image: "/images/venue-interior.jpg",
        matchLabel: "Low commitment show",
      },
    ],
  },
  {
    question: "Something I could go to with friends this weekend.",
    agentTitle: "Why these shows",
    agentExplanation:
      "Weekend shows with good group energy. These venues are easy to coordinate and tend to attract social crowds.",
    events: [
      {
        id: 6,
        artist: "Sunset Collective",
        venue: "The Regent Theater",
        location: "Downtown LA",
        date: "Sat, Feb 8",
        time: "8 PM",
        price: 35,
        genre: "Indie Pop",
        image: "/images/concert-crowd.jpg",
        matchLabel: "3 friends going",
      },
      {
        id: 7,
        artist: "Night Market DJs",
        venue: "Grand Star Jazz Club",
        location: "Chinatown, LA",
        date: "Fri, Feb 7",
        time: "9 PM",
        price: 20,
        genre: "Dance",
        image: "/images/dj-performance.jpg",
        matchLabel: "2 friends interested",
      },
      {
        id: 8,
        artist: "The Weekend Ritual",
        venue: "Lodge Room",
        location: "Highland Park",
        date: "Sun, Feb 9",
        time: "7 PM",
        price: 28,
        genre: "R&B",
        image: "/images/friends-concert.jpg",
        matchLabel: "5 friends saved this",
      },
    ],
  },
];

export function DemoSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentTypingText, setCurrentTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [showBestMatches, setShowBestMatches] = useState(true);
  const [likedEvents, setLikedEvents] = useState<number[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const maxCycles = 3;

  const toggleLike = (id: number) => {
    setLikedEvents((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, currentTypingText]);

  // Start the chat flow when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Type out the question character by character
  useEffect(() => {
    if (!hasStarted || currentFlowIndex >= chatFlow.length) return;

    const currentQuestion = chatFlow[currentFlowIndex].question;
    let charIndex = 0;
    setIsTyping(true);
    setCurrentTypingText("");

    const typingInterval = setInterval(() => {
      if (charIndex < currentQuestion.length) {
        setCurrentTypingText(currentQuestion.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // After typing is complete, add the message and show response
        setTimeout(() => {
          setIsTyping(false);
          setCurrentTypingText("");

          // Add user message
          const userMessage: ChatMessage = {
            id: Date.now(),
            type: "user",
            content: currentQuestion,
          };
          setMessages((prev) => [...prev, userMessage]);

          // After a brief pause, add agent response
          setTimeout(() => {
            const flow = chatFlow[currentFlowIndex];
            const agentMessage: ChatMessage = {
              id: Date.now() + 1,
              type: "agent",
              agentTitle: flow.agentTitle,
              agentExplanation: flow.agentExplanation,
              events: flow.events,
            };
            setMessages((prev) => [...prev, agentMessage]);

            // Move to next question or restart cycle
            setTimeout(() => {
              if (currentFlowIndex < chatFlow.length - 1) {
                // Continue to next prompt in this cycle
                setCurrentFlowIndex((prev) => prev + 1);
              } else if (cycleCount < maxCycles - 1) {
                // Finished all 3 prompts, clear and restart for next cycle
                setMessages([]);
                setCurrentFlowIndex(0);
                setCycleCount((prev) => prev + 1);
              }
              // After 3 cycles, stop completely
            }, 6000);
          }, 300);
        }, 500);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [hasStarted, currentFlowIndex, cycleCount]);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="whitespace-nowrap text-2xl font-black italic tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Ask naturally, <span className="text-[#ec4899]">find instantly</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Just describe what you&apos;re looking for. No filters, no endless
            scrolling.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mx-auto mt-12 max-w-3xl">
          {/* Chat Container */}
          <div className="overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-2xl">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ec4899]">
                  <Search className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Giggin&apos;</p>
                  <p className="text-[10px] text-muted-foreground">
                    Finding your next show
                  </p>
                </div>
              </div>

              {/* Toggle */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Showing:</span>
                <button
                  type="button"
                  onClick={() => setShowBestMatches(!showBestMatches)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                    showBestMatches
                      ? "bg-[#ec4899] text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  Best matches for you
                </button>
                <button
                  type="button"
                  onClick={() => setShowBestMatches(!showBestMatches)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                    !showBestMatches
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  All events
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="h-[380px] overflow-y-auto p-4"
            >
              <div className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {message.type === "user" ? (
                        <div className="flex justify-end">
                          <div className="max-w-[80%] rounded-2xl rounded-br-md bg-[#ec4899] px-4 py-2 text-white">
                            <p className="text-xs">{message.content}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {/* Agent explanation */}
                          <div className="flex justify-start">
                            <div className="max-w-[95%] space-y-2">
                              <div className="rounded-2xl rounded-bl-md bg-background px-4 py-3 shadow-sm">
                                <p className="text-[10px] font-bold uppercase tracking-wide text-[#ec4899]">
                                  {message.agentTitle}
                                </p>
                                <p className="mt-1 text-xs text-foreground">
                                  {message.agentExplanation}
                                </p>
                              </div>

                              {/* Event cards grid */}
                              {message.events && (
                                <div
                                  className={cn(
                                    "grid gap-2",
                                    message.events.length === 2
                                      ? "grid-cols-2"
                                      : "grid-cols-3"
                                  )}
                                >
                                  {message.events.map((event, index) => (
                                    <motion.div
                                      key={event.id}
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{
                                        delay: index * 0.1,
                                        duration: 0.3,
                                      }}
                                      className="group cursor-pointer overflow-hidden rounded-lg bg-background shadow-sm transition-shadow hover:shadow-md"
                                    >
                                      {/* Image */}
                                      <div className="relative aspect-[3/2] overflow-hidden">
                                        <Image
                                          src={event.image || "/placeholder.svg"}
                                          alt={event.artist}
                                          fill
                                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        {/* Like button */}
                                        <motion.button
                                          type="button"
                                          whileHover={{ scale: 1.1 }}
                                          whileTap={{ scale: 0.9 }}
                                          onClick={() => toggleLike(event.id)}
                                          className="absolute right-1.5 top-1.5 rounded-full bg-black/40 p-1 backdrop-blur-sm"
                                        >
                                          <Heart
                                            className={cn(
                                              "h-3 w-3 transition-colors",
                                              likedEvents.includes(event.id)
                                                ? "fill-[#ec4899] text-[#ec4899]"
                                                : "text-white"
                                            )}
                                          />
                                        </motion.button>

                                        {/* Match label */}
                                        <span className="absolute bottom-1.5 left-1.5 rounded-full bg-white/90 px-1.5 py-0.5 text-[8px] font-medium text-foreground">
                                          {event.matchLabel}
                                        </span>
                                      </div>

                                      {/* Content */}
                                      <div className="p-2">
                                        <h3 className="truncate text-xs font-bold text-foreground">
                                          {event.artist}
                                        </h3>

                                        <div className="mt-0.5 space-y-0 text-[10px] text-muted-foreground">
                                          <p className="flex items-center gap-0.5 truncate">
                                            <MapPin className="h-2.5 w-2.5 shrink-0" />
                                            {event.venue}
                                          </p>
                                          <p className="flex items-center gap-0.5">
                                            <Calendar className="h-2.5 w-2.5 shrink-0" />
                                            {event.date}
                                          </p>
                                        </div>

                                        <div className="mt-1.5 flex items-center justify-between">
                                          <span className="text-xs font-bold text-foreground">
                                            ${event.price}
                                          </span>
                                          <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center gap-0.5 rounded-full bg-foreground px-2 py-0.5 text-[8px] font-bold text-background"
                                          >
                                            <Ticket className="h-2.5 w-2.5" />
                                            Tickets
                                          </motion.button>
                                        </div>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[80%] rounded-2xl rounded-br-md bg-[#ec4899]/20 px-4 py-2">
                      <p className="text-xs text-foreground">
                        {currentTypingText}
                        <span className="ml-0.5 inline-block h-3 w-0.5 animate-pulse bg-[#ec4899]" />
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Input area (visual only) */}
            <div className="border-t border-border bg-background px-4 py-3">
              <div className="flex items-center gap-3 rounded-full border border-border bg-muted/50 px-4 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="flex-1 text-xs text-muted-foreground">
                  What are you in the mood for?
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
