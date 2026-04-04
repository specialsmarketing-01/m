import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "How CTST collects, uses, and protects information when you use ctst.qa and our services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#0a1628]">Privacy policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: April 4, 2026</p>
      <div className="prose prose-slate mt-8 max-w-none">
        <h2 className="text-xl font-semibold text-[#0a1628]">Introduction</h2>
        <p className="mt-3 text-slate-700">
          {siteConfig.name} (“we”, “us”) respects your privacy. This policy explains
          how we handle information when you visit {siteConfig.domain}, submit
          inquiries, or engage our services related to Security Solutions Qatar
          programs.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">
          Information we may collect
        </h2>
        <p className="mt-3 text-slate-700">
          We may collect contact details you voluntarily provide (such as name,
          email, phone number, and message content), along with basic technical data
          commonly logged by websites (such as IP address, browser type, and
          approximate region) for security and reliability purposes.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">
          How we use information
        </h2>
        <p className="mt-3 text-slate-700">
          We use information to respond to requests, deliver proposals, operate and
          improve our website, protect against abuse, and comply with applicable
          legal obligations. We do not sell your personal information.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">
          Retention
        </h2>
        <p className="mt-3 text-slate-700">
          We retain information only as long as needed for the purposes described
          above, unless a longer period is required by law or legitimate business
          needs (such as contract administration).
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">Your choices</h2>
        <p className="mt-3 text-slate-700">
          You may request access, correction, or deletion of your personal
          information where applicable. Contact us using the details on our contact
          page and we will respond within reasonable timelines.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-[#0a1628]">Contact</h2>
        <p className="mt-3 text-slate-700">
          Questions about this policy may be directed to {siteConfig.email}.
        </p>
      </div>
    </div>
  );
}
