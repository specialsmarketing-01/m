import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About CTST",
  description:
    "Learn about CTST in Qatar — mission, vision, and why organizations choose our Security Solutions Qatar delivery model.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About CTST"
        subtitle="A Qatar-focused security and technology integrator committed to dependable delivery, clear governance, and long-term support."
        image={IMG.citySkyline}
        imageAlt="Modern city skyline representing Qatar infrastructure"
        ctaLabel="Contact us"
        ctaHref="/contact-us"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0a1628]">Company overview</h2>
        <p className="mt-4 text-slate-600">
          CTST supports organizations that operate in complex, high-visibility
          environments. We combine structured project governance with hands-on
          engineering across surveillance, access, perimeter awareness, and
          resilient connectivity — helping teams reduce risk without slowing the
          business.
        </p>
        <p className="mt-4 text-slate-600">
          Our work spans commercial campuses, critical facilities, retail networks,
          and large events — always with an emphasis on operability: systems must
          remain understandable for the people who run them every day.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#0a1628]">Mission</h2>
              <p className="mt-3 text-slate-600">
                Deliver integrated security and connectivity outcomes that are
                measurable, maintainable, and aligned to stakeholder expectations —
                from commissioning through lifecycle support.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a1628]">Vision</h2>
              <p className="mt-3 text-slate-600">
                Be a trusted partner for modern protection in Qatar — known for
                engineering discipline, transparent communication, and continuous
                improvement across every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0a1628]">Why choose us</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Integrated delivery across surveillance, access, and telecom disciplines",
            "Documentation packages designed for audits, handover, and training",
            "Structured AMC programs with clear SLAs and health reporting",
            "Pragmatic roadmaps that balance security uplift with operational realities",
          ].map((t) => (
            <li
              key={t}
              className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0a1628]">
            Experience & expertise
          </h2>
          <p className="mt-4 text-slate-600">
            Our teams bring together field engineering, solution architecture, and
            program management — so projects move predictably from design validation
            to operational readiness. We are comfortable working alongside
            facilities, IT, and security stakeholders, and we prioritize knowledge
            transfer as part of every major rollout.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0a1628]">Start a conversation</h2>
            <p className="mt-3 text-slate-600">
              Share your objectives and constraints — we will help translate them
              into a practical plan for Surveillance Systems Qatar deployments and
              related controls.
            </p>
          </div>
          <ContactForm id="about-contact" />
        </div>
      </section>
    </>
  );
}
