"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

interface Props {
  onBookClick: () => void;
}

export default function BookingCTA({ onBookClick }: Props) {
  const prefersReduced = useReducedMotion();

  const handleClick = () => {
    track("intent");
    onBookClick();
  };

  return (
    <section id="booking" className="relative overflow-hidden min-h-[480px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Ocean at golden hour"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Animated wave line decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 40C240 20 480 60 720 40C960 20 1200 60 1440 40V80H0V40Z"
            fill="#00B4D8"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-body text-primary text-xs uppercase tracking-[0.25em] mb-5"
        >
          eFoil Rentals · Open Daily
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold text-cream leading-tight mb-6"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
        >
          Your first flight is
          <br />
          <span className="text-primary">60 minutes away.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-cream/65 text-base mb-10 max-w-lg mx-auto leading-relaxed"
        >
          No experience required. Just show up, listen to the briefing, and trust the foil. The hardest part is picking which session to book next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#00C8EF" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={handleClick}
            className="bg-primary text-navy font-heading font-bold text-sm uppercase tracking-[0.18em] px-10 py-5 flex items-center gap-3"
          >
            Check Availability
            <span className="text-lg leading-none">→</span>
          </motion.button>

          <a
            href="/shop"
            className="font-heading font-semibold text-cream/70 hover:text-cream text-sm uppercase tracking-widest transition-colors underline underline-offset-4"
          >
            Or browse gear first
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-cream/45 font-body text-xs uppercase tracking-wider"
        >
          <span>✓ All gear provided</span>
          <span>✓ Certified instructors</span>
          <span>✓ Free cancellation 24h</span>
          <span>✓ All skill levels</span>
        </motion.div>
      </div>
    </section>
  );
}
