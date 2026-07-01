import { fetchProducts } from "@/lib/checkout";
import ShopPageClient from "@/components/ShopPageClient";

export const metadata = {
  title: "Shop Surf Gear — WAVECREST",
  description: "Premium surfboards, wetsuits, fins, leashes, and eFoil rental bookings. Everything you need to get on the water.",
  alternates: {
    canonical: "https://b648ebe4.run.linkworld.ai/shop",
  },
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen">
      {/* Shop hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-body text-primary text-xs uppercase tracking-[0.22em] mb-4">
            The Quiver
          </p>
          <h1
            className="font-heading font-bold text-cream leading-tight max-w-xl"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h1>
          <p className="font-body text-cream/55 mt-4 max-w-md text-sm leading-relaxed">
            Premium surf hardware, eFoil rental sessions, and gear that earns its place in your quiver. Free shipping on orders over $150.
          </p>
        </div>
      </section>

      {/* Shop content */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ShopPageClient products={products} />
        </div>
      </section>
    </main>
  );
}
