import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import { siteConfig } from "@/lib/data/site";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact us",
  description:
    "Contact Cyberox Technology Service W.L.L (CTST): +974 4436 1775, info@ctst.qa — Security Solutions Qatar, CCTV, access control, and telecom.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact us"
        subtitle="Cyberox Technology Service W.L.L (CTST) — tell us about your site, timelines, and stakeholders; we will respond with a practical next step."
        image={IMG.contact}
        imageAlt="Communication and contact concept"
        ctaLabel="Call us"
        ctaHref={`tel:${siteConfig.phoneTel}`}
        secondaryCtaLabel="Email"
        secondaryCtaHref={`mailto:${siteConfig.email}`}
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0a1628]">Company information</h2>
            <dl className="mt-6 space-y-4 text-slate-700">
              <div>
                <dt className="text-sm font-semibold text-slate-500">Company name</dt>
                <dd className="mt-1">{siteConfig.legalName}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Trading as</dt>
                <dd className="mt-1">{siteConfig.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Phone</dt>
                <dd className="mt-1">
                  <a
                    className="text-[#F37021] hover:underline"
                    href={`tel:${siteConfig.phoneTel}`}
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Email</dt>
                <dd className="mt-1">
                  <a
                    className="text-[#F37021] hover:underline"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Location</dt>
                <dd className="mt-1">
                  {siteConfig.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-sm text-slate-600">
              For urgent site support, please reference your project ID and site
              contact in your message so we can route your request quickly.
            </p>
          </div>
          <ContactForm id="contact-page" />
        </div>
      </section>
    </>
  );
}
