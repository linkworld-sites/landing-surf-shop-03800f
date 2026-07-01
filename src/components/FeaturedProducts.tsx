"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { formatPrice } from "@/lib/checkout";
import { useCart } from "@/components/CartContext";
import type { Product } from "@/lib/checkout";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const sellable = (id: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

interface Props {
  products: Product[];
}

export default function FeaturedProducts({ products }: Props) {
  const { add } = useCart();
  const prefersReduced = useReducedMotion();

  const display = products.slice(0, 5);
  const [hero, ...rest] = display;

  if (!display.length) {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-body text-navy/50">Catalog loading — check back shortly.</p>
          <Link href="/shop" className="mt-4 inline-block font-heading font-bold text-primary underline text-sm">
            View Full Shop →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-body text-primary text-xs uppercase tracking-[0.22em] mb-3">
              The Quiver
            </p>
            <h2
              className="font-heading font-bold text-navy leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 font-heading font-semibold text-sm text-navy hover:text-primary transition-colors uppercase tracking-widest"
          >
            View All <span>→</span>
          </Link>
        </motion.div>

        {/* Asymmetric grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Hero product — takes 2 cols on md+ */}
          {hero && (
            <motion.div
              variants={cardVariants}
              className="col-span-2 md:col-span-2 group"
            >
              <ProductCard product={hero} onAdd={() => add(hero)} large />
            </motion.div>
          )}

          {/* Smaller products */}
          {rest.map((p) => (
            <motion.div key={p.id} variants={cardVariants} className="col-span-1 group">
              <ProductCard product={p} onAdd={() => add(p)} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-navy text-cream font-heading font-bold text-xs uppercase tracking-widest px-8 py-4"
          >
            View Full Shop →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  onAdd,
  large = false,
}: {
  product: Product;
  onAdd: () => void;
  large?: boolean;
}) {
  return (
    <motion.div
      whileHover={large ? { y: -6 } : { y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="flex flex-col h-full"
    >
      {/* Image area */}
      <div
        className={`relative overflow-hidden bg-cream ${
          large ? "aspect-[4/3]" : "aspect-square"
        }`}
      >
        {product.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-cream to-sage/20">
            <WaveIcon />
          </div>
        )}

        {/* Quick-add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={onAdd}
            disabled={!sellable(product.id)}
            className="w-full bg-navy text-cream font-heading font-semibold text-xs uppercase tracking-widest py-3 hover:bg-primary hover:text-navy transition-colors disabled:opacity-50"
          >
            {sellable(product.id) ? "Add to Cart" : "Loading…"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className={`font-heading font-semibold text-navy leading-snug ${large ? "text-base md:text-lg" : "text-sm"}`}>
            {product.name}
          </h3>
          {product.description && (
            <p className="font-body text-navy/50 text-xs mt-0.5 line-clamp-1">
              {product.description}
            </p>
          )}
        </div>
        <span className="font-heading font-bold text-navy whitespace-nowrap text-sm">
          {formatPrice(product.price_cents, product.currency)}
        </span>
      </div>
    </motion.div>
  );
}

function WaveIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-sage/40">
      <path
        d="M4 28c4-8 8-8 12 0s8 8 12 0 8-8 12 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M4 36c4-8 8-8 12 0s8 8 12 0 8-8 12 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
