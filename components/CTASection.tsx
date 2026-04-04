import Link from "next/link";

type CTASectionProps = {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel = "Request a consultation",
  primaryHref = "/contact-us",
}: CTASectionProps) {
  return (
    <section className="border-y border-slate-200 bg-[#0a1628] py-14 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-2 max-w-2xl text-white/85">{description}</p>
            ) : null}
          </div>
          <Link
            href={primaryHref}
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#F37021] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e0651c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
