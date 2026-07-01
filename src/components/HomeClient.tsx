"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import TickerBar from "@/components/TickerBar";
import ServiceCards from "@/components/ServiceCards";
import RentalBlock from "@/components/RentalBlock";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandCarousel from "@/components/BrandCarousel";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";
import BookingModal from "@/components/BookingModal";
import type { Product } from "@/lib/checkout";

interface Props {
  products: Product[];
}

export default function HomeClient({ products }: Props) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <main>
        <Hero onBookClick={() => setBookingOpen(true)} />
        <TrustBar />
        <TickerBar />
        <ServiceCards />
        <RentalBlock onBookClick={() => setBookingOpen(true)} />
        <HowItWorks />
        <FeaturedProducts products={products} />
        <BrandCarousel />
        <SocialProof />
        <FAQSection />
        <BookingCTA onBookClick={() => setBookingOpen(true)} />
      </main>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
