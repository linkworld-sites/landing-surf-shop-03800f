"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/CartContext";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/#rental", label: "Rent eFoils" },
  { href: "/#booking", label: "Book" },
  { href: "/blog", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-navy" : "text-cream";
  const hoverColor = "hover:text-primary";

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(10,46,74,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className={`font-heading font-bold text-lg tracking-[0.12em] uppercase ${textColor} transition-colors`}>
              WAVECREST
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                  <Link
                    href={link.href}
                    className={`font-body text-xs uppercase tracking-[0.18em] transition-colors ${textColor} ${hoverColor}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}>
                <Link
                  href="/shop"
                  className={`relative flex items-center gap-2 transition-colors ${textColor} ${hoverColor}`}
                  aria-label={`Cart (${count} items)`}
                >
                  <BagIcon />
                  {count > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-secondary text-navy text-[10px] font-bold font-heading rounded-full w-4 h-4 flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </Link>
              </motion.div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-5">
              <Link href="/shop" className={`relative ${textColor}`} aria-label="Cart">
                <BagIcon />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-secondary text-navy text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-1 ${textColor}`}
                aria-label="Toggle navigation"
              >
                <HamburgerIcon open={menuOpen} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 35 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-cream shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16">
                <span className="font-heading font-bold text-navy tracking-widest text-sm uppercase">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="text-navy p-1">
                  <CloseIcon />
                </button>
              </div>
              <nav className="flex-1 px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 font-heading font-semibold text-navy hover:text-primary transition-colors text-lg border-b border-navy/8"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="px-6 py-8">
                <Link
                  href="/#booking"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full bg-primary text-navy text-center font-heading font-bold text-sm uppercase tracking-widest py-4"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
