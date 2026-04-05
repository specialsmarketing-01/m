import Link from "next/link";
import { siteConfig } from "@/lib/data/site";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Security solutions", href: "/security-solutions" },
      { label: "Telecom solutions", href: "/telecom-solutions" },
      { label: "Secure access", href: "/secure-access" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms & conditions", href: "/terms-conditions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-[#050a14] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-tight text-white">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-300">
              {siteConfig.legalName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <dl className="mt-5 space-y-2 text-sm text-slate-400">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="transition hover:text-[#F37021]"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition hover:text-[#F37021]"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-400 transition hover:text-[#F37021]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
