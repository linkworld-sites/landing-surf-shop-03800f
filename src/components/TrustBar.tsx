"use client";

import { motion, useReducedMotion } from "framer-motion";

const SIGNALS = [
  { icon: "⚡", label: "Electric surf pioneers", sub: "First movers on the coast" },
  { icon: "🌊", label: "Beginner-friendly lessons", sub: "Zero experience needed" },
  { icon: "🏄", label: "Premium eFoil brands", sub: "Fliteboard, Lift & more" },
  { icon: "✅", label: "Secure checkout", sub: "Protected by SSL" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TrustBar() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      aria-label="Why ride with us"
      className="bg-navy border-t border-primary/20 py-7 md:py-9"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={prefersReduced ? undefined : containerVariants}
          initial={prefersReduced ? undefined : "hidden"}
          whileInView={prefersReduced ? undefined : "visible"}
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-0 md:divide-x md:divide-primary/20"
        >
          {SIGNALS.map((signal, i) => (
            <motion.div
              key={i}
              variants={prefersReduced ? undefined : itemVariants}
              className="flex flex-col items-center text-center md:px-8 gap-1"
            >
              <span className="text-3xl leading-none mb-2" aria-hidden="true">
                {signal.icon}
              </span>
              <p className="font-heading font-bold text-cream text-xs md:text-sm uppercase tracking-[0.12em] leading-tight">
                {signal.label}
              </p>
              <p className="font-body text-cream/45 text-xs">{signal.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
