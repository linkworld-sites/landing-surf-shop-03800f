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
      "@type": ["LocalBusiness", "SportingGoodsStore"],
      "@id": "https://b648ebe4.run.linkworld.ai/#business",
      name: "eFoil Surf Shop",
      alternateName: "WAVECREST",
      description:
        "Ride the future of the ocean — where cutting-edge eFoil and electric surf technology meets the raw thrill of wave culture. From first-timers to seasoned chargers, we put the right gear under every surfer's feet so nothing stands between them and the water.",
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
        name: "eFoil Rentals & Lessons",
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
    {
      "@type": "FAQPage",
      "@id": "https://b648ebe4.run.linkworld.ai/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need surf experience to eFoil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nope — zero surf experience required. Our beginner lessons are built exactly for curious newcomers: we start on land, walk you through the controls, then coach you in calm water until you're hovering. Most people are airborne within their first session. The water is genuinely for everyone.",
          },
        },
        {
          "@type": "Question",
          name: "What's included in a rental?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Everything you need and nothing you don't. Board, motor, life vest, helmet, and a quick safety briefing before you hit the water. Just show up — we handle all the gear. Hour-long sessions include an instructor check-in at the start so you're comfortable with the throttle before you head out solo.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hit the Book a Ride button, fill in your preferred session type and date, and we'll confirm your slot within a few hours. Walk-ins welcome when slots are open. Free cancellation up to 24 hours before your session — no awkward phone calls needed.",
          },
        },
        {
          "@type": "Question",
          name: "Is eFoiling safe for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Totally. We run every session with certified instructors and all the right safety gear. The boards are beginner-friendly, the motor speed is controllable, and we start you in calm, shallow water. The water is for everyone — we just make sure it stays fun.",
          },
        },
      ],
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
