import type { Metadata } from "next";
import BookPageClient from "@/components/BookPageClient";

export const metadata: Metadata = {
  title: "Book Your eFoil Session — WAVECREST",
  description:
    "Reserve your eFoil rental, beginner lesson, or full-day foil adventure. We confirm within 2 hours — slots fill fast on weekends.",
  alternates: {
    canonical: "https://b648ebe4.run.linkworld.ai/book",
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
