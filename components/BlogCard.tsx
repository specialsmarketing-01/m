import Image from "next/image";
import Link from "next/link";
import type { BlogCategory } from "@/lib/types";
import { blogCategoryLabels } from "@/lib/data/blog";

type BlogCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  imageAlt: string;
  category: BlogCategory;
  publishedAt: string;
};

export function BlogCard({
  title,
  excerpt,
  slug,
  image,
  imageAlt,
  category,
  publishedAt,
}: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/blog/${slug}`} className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <time dateTime={publishedAt}>{publishedAt}</time>
          <span aria-hidden>·</span>
          <Link
            href={`/blog/category/${category}`}
            className="font-medium text-[#F37021] hover:underline"
          >
            {blogCategoryLabels[category]}
          </Link>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-[#0a1628]">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-[#F37021] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="mt-4 text-sm font-semibold text-[#F37021]"
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
