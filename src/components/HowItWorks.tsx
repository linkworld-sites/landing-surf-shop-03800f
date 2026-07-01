"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Book Online",
    desc: "Choose your session, pick your date, and lock in your slot in under two minutes. Instant confirmation, no phone tag.",
  },
  {
    num: "02",
    title: "Quick Briefing on the Beach",
    desc: "Your certified instructor walks you through everything — board control, take-off, and how to not eat sand. Ten minutes, and you're ready.",
  },
  {
    num: "03",
    title: "You're Flying",
    desc: "The board hums, the foil lifts, and you're hovering above the water like you've done this forever. Spoiler: you'll book again.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HowItWorks() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-navy overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="font-body text-primary text-xs uppercase tracking-[0.22em] mb-4">
            Getting Started
          </p>
          <h2
            className="font-heading font-bold text-cream leading-tight max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Gear up. Paddle out.
            <span className="text-primary"> Lift off.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16"
        >
          {STEPS.map((step, i) => (
            <motion.div key={step.num} variants={stepVariants} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%+1.5rem)] right-[-1.5rem] h-px bg-gradient-to-r from-primary/40 to-transparent pointer-events-none" />
              )}

              <div className="font-heading font-bold text-primary text-5xl md:text-6xl leading-none mb-6 tabular-nums">
                {step.num}
              </div>
              <h3 className="font-heading font-bold text-cream text-xl md:text-2xl mb-3">
                {step.title}
              </h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom image strip */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative h-48 md:h-64 overflow-hidden"
        >
          <Image
            src="/images/process.png"
            alt="Surfers preparing for an eFoil session at sunrise"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-heading font-bold text-cream/80 text-center text-lg md:text-2xl tracking-wide">
              Every session starts the same way — on the water.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
