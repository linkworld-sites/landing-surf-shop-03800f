"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "Firewire",
  "FCS",
  "Dakine",
  "Creatures of Leisure",
  "Channel Islands",
  "Rip Curl",
  "Fliteboard",
  "O'Neill",
  "Futures",
  "JS Industries",
];

export default function BrandCarousel() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-sage/10 border-y border-sage/20 py-12 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-body text-navy/40 text-xs uppercase tracking-[0.22em] mb-8"
      >
        Stocked & Trusted Brands
      </motion.p>

      {/* Scrolling logos */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-sage/10 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-sage/10 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker whitespace-nowrap will-change-transform">
          {doubled.map((brand, i) => (
            <motion.div
              key={i}
              className="inline-flex items-center"
              whileHover={{ filter: "grayscale(0)" }}
              style={{ filter: "grayscale(0.3)" }}
            >
              <span className="font-heading font-bold text-navy/60 hover:text-navy text-sm md:text-base uppercase tracking-[0.15em] transition-colors duration-200 px-8 select-none">
                {brand}
              </span>
              <span className="text-sage/50 font-heading text-lg mx-2" aria-hidden="true">·</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
