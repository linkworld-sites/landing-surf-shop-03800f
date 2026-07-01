"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 700], ["0px", prefersReduced ? "0px" : "100px"]);

  const handleRentClick = () => {
    track("intent");
    onBookClick();
  };

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: yImage }}>
        <Image
          src="/images/hero.png"
          alt="eFoil rider lifting above the water at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlay — bottom-heavy for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/20" />

      {/* Content — bottom-left aligned per brief */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-12 lg:px-20 xl:px-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-body text-primary text-xs uppercase tracking-[0.25em] mb-5"
        >
          eFoil Rentals · Lessons · Premium Surf Gear
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: prefersReduced ? 0 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-cream leading-none tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Ride
            <br />
            Above It.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="font-body text-cream/75 text-base md:text-lg mt-6 max-w-md leading-relaxed"
        >
          The ocean just got an upgrade. Electric foil sessions, expert lessons, and the gear to match your obsession.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#00C8EF" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={handleRentClick}
            className="bg-primary text-navy font-heading font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 flex items-center gap-2 group"
          >
            Rent an eFoil
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.button>

          <motion.a
            href="/shop"
            whileHover={{ scale: 1.04, backgroundColor: "rgba(245,240,232,0.12)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="border border-cream/70 text-cream font-heading font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 flex items-center gap-2 group"
          >
            Shop Gear
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <span className="font-body text-cream/40 text-[10px] uppercase tracking-[0.2em] rotate-90 origin-center translate-x-3">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
