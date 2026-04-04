import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
    ogImage: project.heroImage,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#050a14]/95 via-[#0a1628]/55 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white">{project.title}</span>
          </nav>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">{project.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0a1628]">Project description</h2>
        <div className="prose prose-slate mt-4 max-w-none">
          {project.description.map((p, i) => (
            <p key={i} className="text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0a1628]">Technologies used</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.technologies.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0a1628]">Results</h2>
        <ol className="mt-6 space-y-4">
          {project.results.map((r, i) => (
            <li
              key={r}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F37021] text-sm font-bold text-white"
                aria-hidden
              >
                {i + 1}
              </span>
              <p className="text-slate-700">{r}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0a1628]">Next steps</h2>
            <p className="mt-3 text-slate-600">
              Tell us about your site requirements for Surveillance Systems Qatar
              programs — we will propose an approach aligned to your operational
              model.
            </p>
          </div>
          <ContactForm id="project-detail-contact" />
        </div>
      </section>
    </>
  );
}
