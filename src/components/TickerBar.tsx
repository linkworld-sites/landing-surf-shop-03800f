"use client";

import { useReducedMotion } from "framer-motion";

const ITEMS = [
  "eFoil Rentals Available Daily",
  "Beginner Lessons",
  "Premium Surf Hardware",
  "Book Now",
  "Hourly · Half Day · Full Day",
  "Expert Instructors",
  "All Skill Levels Welcome",
  "Ride Above It",
];

export default function TickerBar() {
  const prefersReduced = useReducedMotion();

  const content = [...ITEMS, ...ITEMS].map((item, i) => (
    <span key={i} className="inline-flex items-center gap-6 px-6">
      <span className="font-heading font-bold text-navy text-sm uppercase tracking-[0.15em]">
        {item}
      </span>
      <span className="text-navy/40 text-lg font-heading" aria-hidden="true">·</span>
    </span>
  ));

  return (
    <div className="bg-secondary overflow-hidden py-4 relative" aria-label="Announcement bar">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

      {prefersReduced ? (
        <div className="flex whitespace-nowrap overflow-hidden">
          {ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4 font-heading font-bold text-navy text-sm uppercase tracking-[0.15em]">
              {item}
              <span className="text-navy/40" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      ) : (
        <div className="ticker-track flex whitespace-nowrap animate-ticker will-change-transform">
          {content}
        </div>
      )}
    </div>
  );
}
