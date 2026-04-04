import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  imageAlt: string;
};

export function ProjectCard({
  title,
  excerpt,
  slug,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/projects/${slug}`} className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-[#0a1628]">
          <Link
            href={`/projects/${slug}`}
            className="hover:text-[#F37021] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{excerpt}</p>
        <Link
          href={`/projects/${slug}`}
          className="mt-4 text-sm font-semibold text-[#F37021]"
        >
          View project
        </Link>
      </div>
    </article>
  );
}
