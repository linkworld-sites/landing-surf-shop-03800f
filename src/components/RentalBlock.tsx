"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

const TIERS = [
  {
    label: "1 Hour",
    price: "$89",
    desc: "Your first taste of electric flight. Safety briefing + equipment included.",
    badge: "Most Popular",
  },
  {
    label: "Half Day",
    price: "$249",
    desc: "4 hours of pure glide. Perfect for experienced riders chasing a full session.",
    badge: null,
  },
  {
    label: "Full Day",
    price: "$399",
    desc: "Sunrise to sunset on the water. Our most immersive eFoil experience.",
    badge: "Best Value",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface Props {
  onBookClick: () => void;
}

export default function RentalBlock({ onBookClick }: Props) {
  const prefersReduced = useReducedMotion();

  const handleBook = () => {
    track("intent");
    onBookClick();
  };

  return (
    <section id="rental" className="bg-cream">
      <div className="grid lg:grid-cols-2 min-h-[640px]">
        {/* Left: saturated action photo */}
        <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
          <motion.div
            className="absolute inset-0"
            whileInView={prefersReduced ? {} : { scale: 1.04 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/material.png"
              alt="eFoil rider mid-air with water spray in golden light"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>
          {/* Urgency badge */}
          <div className="absolute top-6 left-6 bg-secondary text-navy font-heading font-bold text-xs uppercase tracking-[0.15em] px-4 py-2 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0" aria-hidden="true">
              <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
            </svg>
            Limited Slots Available
          </div>
        </div>

        {/* Right: pricing tiers */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 xl:px-20 bg-white">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="font-body text-primary text-xs uppercase tracking-[0.2em] mb-4"
          >
            eFoil Rentals
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-navy leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            The ocean just got
            <br />an upgrade.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-navy/60 text-sm leading-relaxed mb-8 max-w-sm"
          >
            No experience needed. We handle the briefing, the gear, and the stoke. You keep the altitude.
          </motion.p>

          {/* Tiers */}
          <div className="space-y-3 mb-8">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.label}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative border border-navy/10 p-5 hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                onClick={handleBook}
              >
                {tier.badge && (
                  <span className="absolute -top-2.5 right-4 bg-primary text-navy text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-0.5">
                    {tier.badge}
                  </span>
                )}
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-heading font-bold text-navy text-lg">{tier.label}</span>
                  <span className="font-heading font-bold text-primary text-2xl">{tier.price}</span>
                </div>
                <p className="font-body text-navy/55 text-sm leading-snug">{tier.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#00C8EF" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={handleBook}
            className="w-full bg-primary text-navy font-heading font-bold text-sm uppercase tracking-[0.18em] py-4 flex items-center justify-center gap-3"
          >
            Book Now
            <span>→</span>
          </motion.button>

          <p className="text-center font-body text-navy/40 text-xs mt-3">
            Free cancellation up to 24 hours before your session
          </p>
        </div>
      </div>
    </section>
  );
}
