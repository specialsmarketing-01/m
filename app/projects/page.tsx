import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Selected Security Solutions Qatar projects across surveillance, access, telecom, and perimeter protection — delivered with measurable outcomes.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        title="Projects & references"
        subtitle="A sample of engagements demonstrating integration depth, disciplined delivery, and operational readiness across Qatar."
        image={IMG.citySkyline}
        imageAlt="Urban development and infrastructure"
        ctaLabel="Discuss a project"
        ctaHref="/contact-us"
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="sr-only">Project list</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
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
      </section>
      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Planning a similar initiative?
            </h2>
            <p className="mt-3 text-slate-600">
              Share your scope, stakeholders, and timeline — we will help you build
              a pragmatic delivery plan for CCTV Systems Qatar and related systems.
            </p>
          </div>
          <ContactForm id="projects-contact" />
        </div>
      </section>
    </>
  );
}
