"use client";

import Link from "next/link";

const SHOP_LINKS = [
  { href: "/shop", label: "All Gear" },
  { href: "/shop", label: "Surfboards" },
  { href: "/shop", label: "Wetsuits" },
  { href: "/shop", label: "Fins & Leashes" },
  { href: "/shop", label: "Accessories" },
];

const RENTAL_LINKS = [
  { href: "/#rental", label: "eFoil Rentals" },
  { href: "/book", label: "Beginner Lessons" },
  { href: "/book", label: "Book a Session" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "TikTok" },
  { href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/75">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {/* Col 1 — Brand + shop nav */}
          <div>
            <Link href="/" className="font-heading font-bold text-cream text-lg tracking-[0.12em] uppercase block mb-6">
              WAVECREST
            </Link>
            <p className="font-body text-cream/50 text-sm leading-relaxed mb-6 max-w-xs">
              Ride the future of the ocean. eFoil rentals, expert lessons, and the finest surf hardware on the coast.
            </p>
            <nav aria-label="Shop navigation">
              <p className="font-body text-cream/35 text-[10px] uppercase tracking-[0.2em] mb-3">Shop</p>
              <ul className="space-y-2">
                {SHOP_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-cream/60 hover:text-cream text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 2 — Rental info + contact */}
          <div>
            <nav aria-label="Rental navigation">
              <p className="font-body text-cream/35 text-[10px] uppercase tracking-[0.2em] mb-3">Rentals &amp; Lessons</p>
              <ul className="space-y-2 mb-8">
                {RENTAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-cream/60 hover:text-cream text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-body text-cream/35 text-[10px] uppercase tracking-[0.2em] mb-3">Location</p>
              <address className="not-italic font-body text-cream/60 text-sm leading-relaxed">
                <span className="block">Open daily — sunrise to sunset</span>
                <span className="block mt-1 text-cream/40">📍 Find us at the beach</span>
              </address>
            </div>
          </div>

          {/* Col 3 — Social + newsletter */}
          <div>
            <div className="mb-8">
              <p className="font-body text-cream/35 text-[10px] uppercase tracking-[0.2em] mb-3">Follow the Session</p>
              <ul className="space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-cream/60 hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-cream/35 text-[10px] uppercase tracking-[0.2em] mb-3">Stay Salty</p>
              <p className="font-body text-cream/45 text-xs mb-4 leading-relaxed">
                No spam. Just swell forecasts.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/8 border border-cream/15 text-cream placeholder-cream/25 font-body text-sm px-4 py-3 outline-none focus:border-primary transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="bg-primary text-navy font-heading font-bold text-xs uppercase tracking-wider px-4 py-3 hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-cream/30 text-xs">
            © {new Date().getFullYear()} WAVECREST. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-5">
            <Link href="/legal/privacy" className="font-body text-cream/30 hover:text-cream/60 text-xs transition-colors">
              Privacy
            </Link>
            <Link href="/legal/cookies" className="font-body text-cream/30 hover:text-cream/60 text-xs transition-colors">
              Cookies
            </Link>
            <Link href="/blog" className="font-body text-cream/30 hover:text-cream/60 text-xs transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
