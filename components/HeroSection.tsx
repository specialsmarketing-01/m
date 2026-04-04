import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  overlay?: "dark" | "medium";
};

export function HeroSection({
  title,
  subtitle,
  image,
  imageAlt,
  ctaLabel = "Talk to our team",
  ctaHref = "/contact-us",
  secondaryCtaLabel,
  secondaryCtaHref,
  overlay = "dark",
}: HeroSectionProps) {
  const overlayClass =
    overlay === "dark"
      ? "bg-gradient-to-r from-[#050a14]/95 via-[#0a1628]/80 to-[#0a1628]/40"
      : "bg-gradient-to-r from-[#0a1628]/85 to-[#0a1628]/35";

  return (
    <section className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:min-h-[440px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-md bg-[#F37021] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e0651c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
          >
            {ctaLabel}
          </Link>
          {secondaryCtaLabel && secondaryCtaHref ? (
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              {secondaryCtaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
