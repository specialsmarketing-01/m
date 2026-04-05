import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";

export const metadata = buildMetadata({
  title: "Terms & conditions",
  description:
    "Terms governing use of the Cyberox Technology Service W.L.L (CTST) website. Professional services are subject to separate agreements.",
  path: "/terms-conditions",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#0a1628]">Terms & conditions</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: April 4, 2026</p>
      <div className="prose prose-slate mt-8 max-w-none">
        <h2 className="text-xl font-semibold text-[#0a1628]">Website use</h2>
        <p className="mt-3 text-slate-700">
          By accessing {siteConfig.domain}, you agree to these terms. Content is
          provided for general information about our Security Solutions Qatar
          capabilities and may change without notice.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">
          No warranty
        </h2>
        <p className="mt-3 text-slate-700">
          Materials on this website are provided “as is”. We make reasonable efforts
          to ensure accuracy, but we do not warrant that content is complete or
          error-free. Technical architectures must be validated for your specific
          site conditions.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">
          Professional services
        </h2>
        <p className="mt-3 text-slate-700">
          Deliverables for CCTV Systems Qatar, Access Control Systems Qatar,
          Surveillance Systems Qatar, and related projects are governed by written
          statements of work, proposals, or master agreements — not by this page
          alone.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">
          Limitation of liability
        </h2>
        <p className="mt-3 text-slate-700">
          To the maximum extent permitted by law, {siteConfig.legalName} shall not be
          liable for indirect or consequential damages arising from website use.
          Some jurisdictions do not allow certain limitations; in those cases, our
          liability is limited to the fullest extent permitted.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">Contact</h2>
        <p className="mt-3 text-slate-700">
          For contractual questions: {siteConfig.email} or{" "}
          <a href={`tel:${siteConfig.phoneTel}`} className="text-[#F37021] hover:underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
