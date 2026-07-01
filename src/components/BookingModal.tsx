"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConversionForm from "@/components/ConversionForm";

const BOOKING_FIELDS = [
  { name: "name", label: "Your Name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone (optional)" },
  { name: "session", label: "Session Type (1 Hour / Half Day / Full Day)" },
  { name: "date", label: "Preferred Date", type: "date" as const },
  { name: "message", label: "Any questions?", type: "textarea" as const },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: Props) {
  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-navy/65 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            role="dialog"
            aria-modal="true"
            aria-label="Book your eFoil session"
            className="relative z-10 w-full max-w-lg bg-cream shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-cream border-b border-navy/10 px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="font-heading font-bold text-navy text-xl">Book Your Session</h2>
                <p className="font-body text-navy/50 text-xs mt-0.5">
                  We&apos;ll confirm within 2 hours
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-navy/40 hover:text-navy transition-colors p-1.5 -mr-1.5"
                aria-label="Close booking form"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <div className="px-8 py-6">
              <ConversionForm
                startStep="booking_start"
                submitStep="convert"
                cta="Book Now — Let's Fly"
                fields={BOOKING_FIELDS}
              />
            </div>

            {/* Footer note */}
            <div className="px-8 pb-6 pt-0">
              <p className="font-body text-navy/35 text-xs text-center">
                Free cancellation up to 24 hours before your session
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
