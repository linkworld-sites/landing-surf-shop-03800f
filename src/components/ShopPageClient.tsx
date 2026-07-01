"use client";

import { useEffect } from "react";
import { CartProvider } from "@/components/CartContext";
import ShopClient from "@/components/ShopClient";
import { track } from "@/lib/funnel";
import type { Product } from "@/lib/checkout";

export default function ShopPageClient({ products }: { products: Product[] }) {
  useEffect(() => {
    track("product_view");
  }, []);

  return (
    <CartProvider>
      <ShopClient products={products} />
    </CartProvider>
  );
}
