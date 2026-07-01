import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { CookieConsent } from "@/components/CookieConsent";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WAVECREST — eFoil Rentals & Premium Surf Gear",
  description:
    "Ride the future of the ocean. Electric foil rentals, beginner lessons, and the finest surf hardware on the coast. Book your first flight today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-cream text-navy antialiased pb-14">
        <FunnelTracker />
        <CartProvider>
          <Navbar />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </CartProvider>
        <StickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
