import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { HeroSection } from "@/components/HeroSection";
import {
  blogCategoryLabels,
  blogPosts,
} from "@/lib/data/blog";
import { IMG } from "@/lib/images";
import type { BlogCategory } from "@/lib/types";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights on Security Solutions Qatar, network security, data protection, digital transformation, and privacy-conscious surveillance.",
  path: "/blog",
});

const categories: BlogCategory[] = [
  "network-security",
  "data-loss-prevention",
  "digital-transformation",
  "privacy",
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        title="Insights & resources"
        subtitle="Practical perspectives for teams modernizing protection, connectivity, and governance — with SEO-friendly guidance you can act on."
        image={IMG.blogAbstract}
        imageAlt="Technology and digital network abstract"
        ctaLabel="Contact CTST"
        ctaHref="/contact-us"
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-[#0a1628]">Categories</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <li key={c}>
              <Link
                href={`/blog/category/${c}`}
                className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-[#F37021]/50 hover:text-[#F37021]"
              >
                {blogCategoryLabels[c]}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="sr-only">All articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
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
