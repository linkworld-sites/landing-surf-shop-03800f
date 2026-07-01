"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

interface ServiceDef {
  eyebrow: string;
  headline: string;
  body: string;
  price: string | null;
  cta: string;
  href: string;
  bg: string;
  eyebrowColor: string;
  headlineColor: string;
  bodyColor: string;
  priceColor: string;
  btnBg: string;
  btnText: string;
  btnBorder: string;
  icon: string;
  isBooking: boolean;
}

const SERVICES: ServiceDef[] = [
  {
    eyebrow: "eFoil Rentals",
    headline: "Get airborne in your first hour.",
    body: "No experience, no excuses. We handle the briefing, the premium gear, and the stoke — you keep the altitude and the story.",
    price: "From $89",
    cta: "Book a Ride",
    href: "/book",
    bg: "bg-navy",
    eyebrowColor: "text-primary",
    headlineColor: "text-cream",
    bodyColor: "text-cream/65",
    priceColor: "text-secondary",
    btnBg: "bg-primary hover:bg-cyan-400",
    btnText: "text-navy",
    btnBorder: "border-transparent",
    icon: "🏄",
    isBooking: true,
  },
  {
    eyebrow: "Lessons & Instruction",
    headline: "Go from curious to flying.",
    body: "Certified coaches, calm water, real coaching. Most students are hovering before the session's halfway done — no intimidation, just progression.",
    price: "From $199",
    cta: "Get Started",
    href: "/book",
    bg: "bg-primary",
    eyebrowColor: "text-navy/60",
    headlineColor: "text-navy",
    bodyColor: "text-navy/70",
    priceColor: "text-navy",
    btnBg: "bg-navy hover:bg-navy/85",
    btnText: "text-cream",
    btnBorder: "border-transparent",
    icon: "🎓",
    isBooking: true,
  },
  {
    eyebrow: "Shop / Premium Gear",
    headline: "Ride what the pros actually use.",
    body: "From Fliteboard to FCS — hand-picked hardware for serious surfers and first-timers alike. All the real deal, none of the fluff.",
    price: null,
    cta: "Shop Now",
    href: "/shop",
    bg: "bg-secondary",
    eyebrowColor: "text-navy/60",
    headlineColor: "text-navy",
    bodyColor: "text-navy/70",
    priceColor: "text-navy",
    btnBg: "bg-navy hover:bg-navy/85",
    btnText: "text-cream",
    btnBorder: "border-transparent",
    icon: "🛒",
    isBooking: false,
  },
];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServiceCards() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="services">
      {/* Section header */}
      <div className="bg-cream py-14 md:py-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-body text-primary text-xs uppercase tracking-[0.22em] mb-3"
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold text-navy leading-tight"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)" }}
        >
          Your next wave is electric.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-4 font-body text-navy/55 max-w-xl mx-auto text-sm leading-relaxed"
        >
          Rent a board, book a lesson, or gear up — everything you need to ride the future of surf is right here.
        </motion.p>
      </div>

      {/* Color-blocked card grid */}
      <motion.div
        variants={prefersReduced ? undefined : sectionVariants}
        initial={prefersReduced ? undefined : "hidden"}
        whileInView={prefersReduced ? undefined : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3"
      >
        {SERVICES.map((svc) => (
          <motion.div
            key={svc.eyebrow}
            variants={prefersReduced ? undefined : cardVariants}
            whileHover={prefersReduced ? undefined : { y: -6, transition: { type: "spring", stiffness: 340, damping: 24 } }}
            className={`${svc.bg} px-8 py-12 md:px-10 lg:px-14 flex flex-col min-h-[400px] md:min-h-[460px]`}
          >
            {/* Decorative icon */}
            <div className="text-4xl mb-6 select-none" aria-hidden="true">
              {svc.icon}
            </div>

            {/* Eyebrow */}
            <p className={`font-body text-[11px] uppercase tracking-[0.22em] mb-2 ${svc.eyebrowColor}`}>
              {svc.eyebrow}
            </p>

            {/* Headline */}
            <h3
              className={`font-heading font-bold leading-tight mb-4 ${svc.headlineColor}`}
              style={{ fontSize: "clamp(1.45rem, 2.8vw, 2rem)" }}
            >
              {svc.headline}
            </h3>

            {/* Body */}
            <p className={`font-body text-sm leading-relaxed flex-1 ${svc.bodyColor}`}>
              {svc.body}
            </p>

            {/* Price anchor */}
            {svc.price && (
              <p className={`font-heading font-bold text-2xl md:text-3xl mt-6 mb-1 ${svc.priceColor}`}>
                {svc.price}
              </p>
            )}

            {/* CTA */}
            <div className={svc.price ? "mt-5" : "mt-8"}>
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 360, damping: 22 }}
                className="inline-block"
              >
                <Link
                  href={svc.href}
                  onClick={() => svc.isBooking && track("intent")}
                  className={`inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-[0.18em] px-7 py-4 ${svc.btnBg} ${svc.btnText} transition-colors duration-150`}
                >
                  {svc.cta}
                  <span className="text-sm" aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
