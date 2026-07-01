"use client";

import { motion, useReducedMotion } from "framer-motion";

const BoltSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
  </svg>
);
const WaveSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
    <path d="M2 12c1.6-4 3.4-4 5 0s3.4 4 5 0 3.4-4 5 0" />
    <path d="M2 17c1.6-4 3.4-4 5 0s3.4 4 5 0 3.4-4 5 0" opacity="0.45" />
  </svg>
);
const CompassSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);
const ShieldCheckSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const SIGNALS = [
  { icon: <BoltSvg />, label: "Electric surf pioneers", sub: "First movers on the coast" },
  { icon: <WaveSvg />, label: "Beginner-friendly lessons", sub: "Zero experience needed" },
  { icon: <CompassSvg />, label: "Premium eFoil brands", sub: "Fliteboard, Lift & more" },
  { icon: <ShieldCheckSvg />, label: "Secure checkout", sub: "Protected by SSL" },
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
              <div className="w-8 h-8 mb-2 flex items-center justify-center text-primary" aria-hidden="true">
                {signal.icon}
              </div>
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
