import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { HeroSection } from "@/components/HeroSection";
import {
  blogCategoryLabels,
  getPostsByCategory,
} from "@/lib/data/blog";
import type { BlogCategory } from "@/lib/types";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const valid: BlogCategory[] = [
  "network-security",
  "data-loss-prevention",
  "digital-transformation",
  "privacy",
];

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return valid.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!valid.includes(category as BlogCategory)) return {};
  const label = blogCategoryLabels[category as BlogCategory];
  return buildMetadata({
    title: `${label} articles`,
    description: `Blog articles about ${label} — practical guidance for Security Solutions Qatar and related technology programs.`,
    path: `/blog/category/${category}`,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  if (!valid.includes(category as BlogCategory)) notFound();
  const cat = category as BlogCategory;
  const posts = getPostsByCategory(cat);

  return (
    <>
      <HeroSection
        title={blogCategoryLabels[cat]}
        subtitle="Curated articles for teams planning upgrades, governance improvements, and operational readiness."
        image={IMG.network}
        imageAlt="Blog category header"
        ctaLabel="All categories"
        ctaHref="/blog"
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm font-semibold text-[#F37021] hover:underline"
        >
          ← Back to blog
        </Link>
        <h2 className="sr-only">{blogCategoryLabels[cat]} posts</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              image={post.image}
              imageAlt={post.title}
              category={post.category}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}
