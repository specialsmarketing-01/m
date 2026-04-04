import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";

export type SolutionBlock = {
  title: string;
  description: string;
};

type SolutionPageLayoutProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  features: SolutionBlock[];
  benefits: SolutionBlock[];
};

export function SolutionPageLayout({
  title,
  subtitle,
  heroImage,
  heroAlt,
  intro,
  features,
  benefits,
}: SolutionPageLayoutProps) {
  return (
    <>
      <HeroSection
        title={title}
        subtitle={subtitle}
        image={heroImage}
        imageAlt={heroAlt}
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#0a1628]">Overview</h2>
          {intro.map((p, i) => (
            <p key={i} className="mt-3 text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0a1628]">Capabilities</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li
                key={f.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#0a1628]">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0a1628]">Benefits</h2>
        <ol className="mt-6 space-y-4">
          {benefits.map((b, i) => (
            <li
              key={b.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F37021] text-sm font-bold text-white"
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#0a1628]">{b.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{b.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="contact"
        className="border-t border-slate-200 bg-slate-50 py-14"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Discuss your requirements
            </h2>
            <p className="mt-3 text-slate-600">
              Share your site context, timelines, and compliance needs. Our team
              will respond with a practical next step for Security Solutions Qatar
              deployments.
            </p>
          </div>
          <ContactForm id="solution-contact" />
        </div>
      </section>
    </>
  );
}
