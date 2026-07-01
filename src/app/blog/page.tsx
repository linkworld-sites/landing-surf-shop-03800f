import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Journal — WAVECREST",
  description: "Stories from the water. eFoil tips, surf culture, gear guides, and dispatches from the lineup.",
  alternates: {
    canonical: "https://b648ebe4.run.linkworld.ai/blog",
  },
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="font-body text-primary text-xs uppercase tracking-[0.22em] mb-4">
            Stories from the Water
          </p>
          <h1
            className="font-heading font-bold text-cream leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            The WAVECREST Journal
          </h1>
          <p className="font-body text-cream/50 mt-3 text-sm">
            eFoil tips, surf culture, gear guides, and dispatches from the lineup.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-16 md:py-20">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-body text-navy/50 text-base mb-2">New stories are on the way.</p>
            <p className="font-body text-navy/35 text-sm">Check back after the next swell.</p>
          </div>
        ) : (
          <ul className="space-y-12">
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-navy/8 pb-12 last:border-b-0">
                <Link href={`/blog/${p.slug}`} className="group block">
                  {p.date && (
                    <p className="font-body text-navy/40 text-xs uppercase tracking-[0.15em] mb-3">
                      {p.date}
                    </p>
                  )}
                  <h2 className="font-heading font-bold text-navy text-2xl md:text-3xl group-hover:text-primary transition-colors leading-tight mb-2">
                    {p.title}
                  </h2>
                  {p.description && (
                    <p className="font-body text-navy/60 text-sm leading-relaxed mb-4">
                      {p.description}
                    </p>
                  )}
                  <span className="font-body text-primary text-xs uppercase tracking-widest group-hover:gap-3 transition-all inline-flex items-center gap-2">
                    Read more <span>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12 pt-8 border-t border-navy/8">
          <Link href="/" className="font-body text-navy/50 hover:text-primary text-sm transition-colors inline-flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
