import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { blogPosts } from "@/lib/data/blog";
import {
  homeServices,
  keySolutions,
  partners,
} from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "CTST | Security Solutions Qatar",
  description:
    "Cyberox Technology Service W.L.L (CTST), Qatar — Surveillance Systems Qatar, Access Control Systems Qatar, CCTV Systems Qatar, telecom, and secure access. +974 4436 1775 · info@ctst.qa",
  path: "/",
});

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <HeroSection
        title="Advanced security and connectivity for Qatar’s critical sites"
        subtitle="From Surveillance Systems Qatar rollouts to Access Control Systems Qatar integrations, we engineer dependable protection, resilient networks, and lifecycle support you can audit with confidence."
        image={IMG.hero}
        imageAlt="Security operations and monitoring environment"
        ctaLabel="Request a consultation"
        ctaHref="/contact-us"
        secondaryCtaLabel="Explore solutions"
        secondaryCtaHref="/security-solutions"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl">
              Built for regulated environments and high-traffic venues
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              CTST combines field-proven delivery with clear documentation — so
              security, facilities, and IT teams stay aligned from design through
              operations.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-2">
                <span className="text-[#F37021]" aria-hidden>
                  ✓
                </span>
                Unified programs across CCTV Systems Qatar, access, and perimeter
                awareness
              </li>
              <li className="flex gap-2">
                <span className="text-[#F37021]" aria-hidden>
                  ✓
                </span>
                Structured commissioning, training, and handover packages
              </li>
              <li className="flex gap-2">
                <span className="text-[#F37021]" aria-hidden>
                  ✓
                </span>
                AMC options designed around uptime and predictable refresh cycles
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <Image
              src={IMG.cctv}
              alt="CCTV and building security technology"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#0a1628]">
            Services overview
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            End-to-end delivery for organizations that need clarity, quality, and
            measurable outcomes — not generic bundles.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeServices.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0a1628]">Key solutions</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Highlights that define how CTST supports Security Solutions Qatar
          programs across campuses, infrastructure, and public-facing sites.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {keySolutions.map((k) => (
            <div
              key={k.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0a1628]">{k.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{k.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#0a1628] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold">Projects</h2>
              <p className="mt-2 max-w-2xl text-white/85">
                Representative engagements demonstrating integration depth, field
                discipline, and long-term operability.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center font-semibold text-[#F37021] hover:underline"
            >
              View all projects →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <ProjectCard
                key={p.slug}
                title={p.title}
                excerpt={p.summary}
                slug={p.slug}
                image={p.heroImage}
                imageAlt={p.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#0a1628]">
          Technology partners
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          We integrate leading platforms and infrastructure components to match your
          standards, support model, and roadmap.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {partners.map((name) => (
            <li
              key={name}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1628]">Insights</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Practical guidance on network security, data protection, digital
                transformation, and privacy-conscious surveillance.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center font-semibold text-[#F37021] hover:underline"
            >
              Visit the blog →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
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
        </div>
      </section>

      <CTASection
        title="Ready to modernize security with a partner that delivers?"
        description="Tell us about your site, stakeholders, and timelines — we will propose a clear scope and delivery plan."
        primaryLabel="Contact CTST"
        primaryHref="/contact-us"
      />
    </>
  );
}
