import { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { getLegalSlugs } from "@/lib/legal";

const BASE = "https://b648ebe4.run.linkworld.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const legalSlugs = getLegalSlugs();

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/book`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date || Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...legalSlugs.map((slug) => ({
      url: `${BASE}/legal/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
