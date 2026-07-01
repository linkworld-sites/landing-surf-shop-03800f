"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

export default function StickyCTA() {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem("wavecrest_cta_dismissed");
    if (saved === "1") setDismissed(true);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("wavecrest_cta_dismissed", "1");
  };

  if (!mounted || dismissed || pathname === "/book") return null;

  return (
    <motion.div
      initial={{ y: prefersReduced ? 0 : 80, opacity: prefersReduced ? 1 : 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 28, delay: 2.2 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-secondary shadow-lg"
      role="complementary"
      aria-label="Booking call to action"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <Link
          href="/book"
          onClick={() => track("intent")}
          className="font-heading font-bold text-navy text-sm md:text-base tracking-wide hover:underline inline-flex items-center gap-2 flex-1"
        >
          <span className="hidden sm:inline" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
            </svg>
          </span>
          Book your eFoil session — slots filling fast
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            →
          </motion.span>
        </Link>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/book"
            onClick={() => track("intent")}
            className="hidden sm:inline-flex bg-navy text-cream font-heading font-bold text-xs uppercase tracking-widest px-5 py-2 hover:bg-navy/85 transition-colors whitespace-nowrap"
          >
            Book Now
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss booking bar"
            className="text-navy/50 hover:text-navy transition-colors p-1.5 -mr-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
