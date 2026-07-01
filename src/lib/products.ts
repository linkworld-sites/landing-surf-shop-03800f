import type { Product } from "@/lib/checkout";
import { fetchProducts } from "@/lib/checkout";

/**
 * Catalog. Live products come from the LinkWorld API (fetchProducts); this demo
 * list is the fallback so the site always renders. REPLACE these with the
 * company's real products (name/description/price/image_url). The `Product`
 * type is MANAGED (src/lib/checkout.ts): the key field is `id` (string) — NOT
 * `product_id`. Use real generated images for image_url.
 */
export const CATALOG: Product[] = [
  {
    id: "demo-1",
    name: "eFoil Rental — 60 min",
    description: "Solo electric foil session. All gear included.",
    price_cents: 8900,
    currency: "EUR",
    image_url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
    stock: null,
  },
  {
    id: "demo-2",
    name: "eFoil Lesson — 90 min",
    description: "Expert instructor, small group, guaranteed takeoff.",
    price_cents: 14900,
    currency: "EUR",
    image_url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
    stock: null,
  },
  {
    id: "demo-3",
    name: "Full Wetsuit 3/2mm",
    description: "Premium neoprene. Fits like a second skin.",
    price_cents: 24900,
    currency: "EUR",
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    stock: null,
  },
  {
    id: "demo-4",
    name: "Shortboard 6'2\"",
    description: "Shaped for speed. Glassed locally.",
    price_cents: 54900,
    currency: "EUR",
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    stock: null,
  },
  {
    id: "demo-5",
    name: "Surf Starter Pack",
    description: "Wax, leash, fins, and a bag. Everything to get going.",
    price_cents: 3900,
    currency: "EUR",
    image_url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80",
    stock: null,
  },
];

/** Live products when configured, else the demo catalog. */
export async function getProducts(): Promise<Product[]> {
  const live = await fetchProducts();
  return live.length ? live : CATALOG;
}
