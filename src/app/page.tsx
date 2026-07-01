import type { Metadata } from "next";
import { fetchProducts } from "@/lib/checkout";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "WAVECREST — eFoil Rentals & Premium Surf Gear",
  description:
    "Ride the future of the ocean. Electric foil rentals, beginner lessons, and the finest surf hardware on the coast. Book your first flight today.",
  alternates: {
    canonical: "https://b648ebe4.run.linkworld.ai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://b648ebe4.run.linkworld.ai/#business",
      name: "WAVECREST",
      description:
        "eFoil rentals, beginner lessons, and premium surf gear for the next generation of wave riders.",
      url: "https://b648ebe4.run.linkworld.ai",
      priceRange: "$-$$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "eFoil Sessions & Surf Gear",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "eFoil Rental — 1 Hour",
              description:
                "Single-hour electric hydrofoil session on calm water. All equipment included.",
            },
            price: "149",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Beginner eFoil Lesson",
              description:
                "2-hour guided eFoil intro with certified instructor. Safety briefing, gear fitting, and in-water coaching.",
            },
            price: "199",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Half-Day eFoil Session",
              description:
                "3-hour guided eFoil experience — plenty of time to get airborne and start carving.",
            },
            price: "349",
            priceCurrency: "USD",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://b648ebe4.run.linkworld.ai/#website",
      url: "https://b648ebe4.run.linkworld.ai",
      name: "WAVECREST",
      description: "eFoil Rentals & Premium Surf Gear",
    },
  ],
};

export default async function Home() {
  const products = await fetchProducts();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient products={products} />
    </>
  );
}
