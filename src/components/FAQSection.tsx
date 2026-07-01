"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

const FAQS = [
  {
    q: "Do I need surf experience to eFoil?",
    a: "Nope — zero surf experience required. Our beginner lessons are built exactly for curious newcomers: we start on land, walk you through the controls, then coach you in calm water until you're hovering. Most people are airborne within their first session. The water is genuinely for everyone.",
  },
  {
    q: "What's included in a rental?",
    a: "Everything you need and nothing you don't. Board, motor, life vest, helmet, and a quick safety briefing before you hit the water. Just show up — we handle all the gear. Hour-long sessions include an instructor check-in at the start so you're comfortable with the throttle before you head out solo.",
  },
  {
    q: "How do I book?",
    a: "Hit the 'Book a Ride' button, fill in your preferred session type and date, and we'll confirm your slot within a few hours. Walk-ins welcome when slots are open. Free cancellation up to 24 hours before your session — no awkward phone calls needed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="font-body text-primary text-xs uppercase tracking-[0.22em] mb-3">
            Got Questions?
          </p>
          <h2
            className="font-heading font-bold text-cream"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
          >
            We&apos;ve got answers.
          </h2>
        </motion.div>

        {/* FAQ accordion */}
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="border border-cream/10 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-cream/5 transition-colors duration-150"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-heading font-bold text-cream text-base md:text-lg leading-snug">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-navy font-heading font-bold text-xl leading-none"
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-cream/70 text-sm leading-relaxed px-6 pb-6 pt-1">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="font-body text-cream/45 text-sm mb-5">
            Still curious? We love a good chat.
          </p>
          <motion.div
            whileHover={prefersReduced ? undefined : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 22 }}
            className="inline-block"
          >
            <Link
              href="/book"
              onClick={() => track("intent")}
              className="inline-flex items-center gap-2 bg-primary text-navy font-heading font-bold text-xs uppercase tracking-[0.18em] px-9 py-4 hover:bg-cyan-400 transition-colors duration-150"
            >
              Book a Ride
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
