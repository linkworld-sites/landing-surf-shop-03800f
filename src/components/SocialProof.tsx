"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    handle: "@marcussurfs",
    rating: 5,
    quote: "I had never touched a foil board before. Two hours later I was hovering above the water screaming. Best decision of my life.",
    color: "bg-primary/10",
    accent: "text-primary",
    size: "large",
  },
  {
    name: "Keahi L.",
    handle: "@keahi_foils",
    rating: 5,
    quote: "The gear selection is legit. Firewire, FCS, the real deal — not the generic stuff.",
    color: "bg-secondary/15",
    accent: "text-secondary",
    size: "small",
  },
  {
    name: "Priya S.",
    handle: "@priya_waves",
    rating: 5,
    quote: "Took a lesson with my partner as our anniversary gift. Instructor was patient, safety was thorough, and we both flew on day one.",
    color: "bg-sage/15",
    accent: "text-sage",
    size: "medium",
  },
  {
    name: "James O.",
    handle: "@jameso_rides",
    rating: 5,
    quote: "The half-day rental is exactly the right amount. Enough time to get comfortable, not so much that your arms fall off.",
    color: "bg-navy/5",
    accent: "text-navy",
    size: "small",
  },
  {
    name: "Sofia M.",
    handle: "@sofiamsurf",
    rating: 5,
    quote: "Already booked my third session. I don't know if I'm more addicted to the eFoil or the post-session fish tacos.",
    color: "bg-primary/8",
    accent: "text-primary",
    size: "medium",
  },
  {
    name: "Ben K.",
    handle: "@benkfoil",
    rating: 5,
    quote: "As a competitive surfer I was skeptical. Now I use eFoil sessions for cross-training between swells. The tech is next-level.",
    color: "bg-secondary/10",
    accent: "text-secondary",
    size: "large",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SocialProof() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="font-body text-primary text-xs uppercase tracking-[0.22em] mb-3">
            From the Water
          </p>
          <h2
            className="font-heading font-bold text-navy"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Real rides. Real stoke.
          </h2>
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-64 md:h-80 overflow-hidden mb-10"
        >
          <Image
            src="/images/detail.png"
            alt="Surfer with eFoil equipment on a sunlit beach"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
              <span className="font-body text-navy/60 text-xs ml-2">4.9 · 200+ reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`${t.color} p-6 mb-4 break-inside-avoid`}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <StarIcon key={j} filled className={t.accent} />
                ))}
              </div>
              <p className={`font-body text-navy/80 leading-relaxed mb-4 ${
                t.size === "large" ? "text-base" : "text-sm"
              }`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full ${t.color} border border-navy/10 flex items-center justify-center`}>
                  <span className="font-heading font-bold text-navy/70 text-xs">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-navy text-xs">{t.name}</p>
                  <p className="font-body text-navy/40 text-[11px]">{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StarIcon({ filled = false, className = "" }: { filled?: boolean; className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      className={`text-secondary ${className}`}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
