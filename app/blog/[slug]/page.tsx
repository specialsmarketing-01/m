import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { ContactInline } from "@/components/ContactInline";
import {
  blogCategoryLabels,
  blogPosts,
  getPostBySlug,
} from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    ogImage: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-[#0a1628]">
          <div className="relative aspect-[21/9] min-h-[220px] w-full sm:min-h-[280px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover opacity-60"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#0a1628]/70 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-4 pb-12 pt-0 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/75">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <Link
                href={`/blog/category/${post.category}`}
                className="hover:text-white"
              >
                {blogCategoryLabels[post.category]}
              </Link>
            </nav>
            <p className="text-sm text-white/80">
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/85">{post.excerpt}</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            {post.content.map((para, i) => (
              <p key={i} className="mb-4 text-slate-700">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Apply this to your environment
            </h2>
            <p className="mt-3 text-slate-600">
              If you are evaluating Security Solutions Qatar partners, tell us your
              constraints — we will help translate priorities into an actionable
              roadmap.
            </p>
            <ContactInline className="mt-4" />
          </div>
          <ContactForm id="blog-contact" />
        </div>
      </section>
    </>
  );
}
