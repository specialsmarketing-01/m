import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#F37021]/40 hover:shadow-md">
      <h3 className="text-lg font-semibold text-[#0a1628] group-hover:text-[#F37021]">
        <Link href={href} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]">
          {title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-semibold text-[#F37021] transition group-hover:gap-1"
      >
        Learn more
        <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden>
          →
        </span>
      </Link>
    </article>
  );
}
