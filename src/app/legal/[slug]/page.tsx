import { notFound } from "next/navigation";
import Link from "next/link";
import { getLegalPage, getLegalSlugs } from "@/lib/legal";

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return {};
  return {
    title: `${page.title || slug} — WAVECREST`,
    alternates: {
      canonical: `https://b648ebe4.run.linkworld.ai/legal/${slug}`,
    },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-cream">
      <section className="bg-navy pt-32 pb-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="font-body text-primary text-xs uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="font-heading font-bold text-cream text-2xl md:text-3xl">
            {page.title || slug}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-14">
        <article
          className="post-body text-navy"
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
        <div className="mt-12 pt-8 border-t border-navy/8">
          <Link href="/" className="font-body text-navy/50 hover:text-primary text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
