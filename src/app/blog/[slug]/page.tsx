import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — WAVECREST Journal`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-navy pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link href="/blog" className="font-body text-primary text-xs uppercase tracking-[0.15em] hover:text-primary/80 transition-colors inline-flex items-center gap-2 mb-6">
            ← Journal
          </Link>
          {post.date && (
            <p className="font-body text-cream/40 text-xs uppercase tracking-[0.15em] mb-4">
              {post.date}
            </p>
          )}
          <h1
            className="font-heading font-bold text-cream leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            {post.title}
          </h1>
          {post.description && (
            <p className="font-body text-cream/55 mt-3 text-sm leading-relaxed max-w-xl">
              {post.description}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-14 md:py-16">
        <article
          className="post-body text-navy"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-14 pt-8 border-t border-navy/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link href="/blog" className="font-body text-navy/50 hover:text-primary text-sm transition-colors inline-flex items-center gap-2">
            ← All posts
          </Link>
          <Link href="/#rental" className="font-heading font-bold text-primary text-xs uppercase tracking-widest hover:text-primary/80 transition-colors inline-flex items-center gap-2">
            Book a session →
          </Link>
        </div>
      </section>
    </main>
  );
}
