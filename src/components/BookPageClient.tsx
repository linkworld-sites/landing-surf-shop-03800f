"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";
import ConversionForm from "@/components/ConversionForm";

const BoltSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
  </svg>
);
const WaveSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
    <path d="M2 12c1.6-4 3.4-4 5 0s3.4 4 5 0 3.4-4 5 0" />
    <path d="M2 17c1.6-4 3.4-4 5 0s3.4 4 5 0 3.4-4 5 0" opacity="0.45" />
  </svg>
);
const PersonSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M5 20c0-4 3-7 7-7s7 3 7 7" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const SunSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const BOOKING_FIELDS = [
  { name: "name", label: "Your Name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone (optional)" },
  { name: "session", label: "Session Type (1 Hour / Half Day / Full Day / Lesson)" },
  { name: "date", label: "Preferred Date", type: "date" as const },
  { name: "message", label: "Anything else we should know?", type: "textarea" as const },
];

const SERVICES = [
  { icon: <BoltSvg />, title: "1-Hour eFoil Rental", price: "from $149", desc: "Perfect intro to electric hydrofoiling" },
  { icon: <WaveSvg />, title: "Half-Day Session", price: "from $349", desc: "3 hours to really find your foil feet" },
  { icon: <PersonSvg />, title: "Beginner Lesson", price: "from $199", desc: "Certified instructor, 2 hours on the water" },
  { icon: <SunSvg />, title: "Full-Day Adventure", price: "from $549", desc: "Sunrise to sunset — bring a crew" },
];

export default function BookPageClient() {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    track("intent");
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, #00B4D8 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-primary text-xs uppercase tracking-[0.25em] mb-5"
          >
            Reserve Your Session
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-cream leading-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Your Session
            <br />
            Awaits.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-cream/60 text-base md:text-lg max-w-lg leading-relaxed"
          >
            Drop us your details and we&apos;ll confirm within 2 hours. Slots go fast on weekends — book early.
          </motion.p>
        </div>
      </section>

      {/* Services strip */}
      <section className="bg-secondary py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className="text-center"
              >
                <div className="w-8 h-8 mb-1 mx-auto flex items-center justify-center text-navy">{s.icon}</div>
                <div className="font-heading font-bold text-navy text-xs uppercase tracking-wide mb-0.5">
                  {s.title}
                </div>
                <div className="font-heading font-semibold text-navy/70 text-xs">{s.price}</div>
                <div className="font-body text-navy/55 text-xs mt-0.5">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: prefersReduced ? 0 : -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2"
            >
              <h2
                className="font-heading font-bold text-navy leading-tight mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                How it works
              </h2>
              <ol className="space-y-6">
                {[
                  { n: "01", t: "Fill the form", d: "Tell us when you want to ride and what session type fits you best." },
                  { n: "02", t: "We confirm", d: "We'll reply within 2 hours with availability and a slot confirmation." },
                  { n: "03", t: "Show up & shred", d: "Arrive 15 minutes early. We handle the gear, the safety briefing, everything." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="font-heading font-bold text-secondary text-lg leading-none mt-0.5 w-8 shrink-0">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-heading font-semibold text-navy text-sm mb-1">{step.t}</p>
                      <p className="font-body text-navy/55 text-sm leading-relaxed">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 border-t border-navy/8 pt-8">
                <p className="font-body text-navy/40 text-xs leading-relaxed">
                  Free cancellation up to 24 hours before your session.
                  All equipment provided — just bring yourself and a towel.
                </p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: prefersReduced ? 0 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-3 bg-white border border-navy/8 p-8"
            >
              <h2 className="font-heading font-bold text-navy text-xl mb-6">Request a Booking</h2>
              <ConversionForm
                startStep="booking_start"
                submitStep="convert"
                cta="Book Now — Let's Fly"
                fields={BOOKING_FIELDS}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
