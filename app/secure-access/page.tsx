import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Secure access",
  description:
    "Access Control Systems Qatar: credentials, visitor workflows, and policy-aligned entry management with audit-ready reporting.",
  path: "/secure-access",
});

export default function SecureAccessPage() {
  return (
    <SolutionPageLayout
      title="Secure access programs"
      subtitle="Modern entry management that balances security with throughput — including visitor journeys, contractor controls, and integration to monitoring ecosystems."
      heroImage={IMG.accessControl}
      heroAlt="Secure building entrance and access control"
      intro={[
        "Access is where policy becomes physical reality. CTST implements Access Control Systems Qatar solutions that reflect least privilege, clear ownership, and traceability — while keeping daily operations smooth for staff and approved visitors.",
        "We integrate controllers, readers, and supporting workflows with your identity and operational practices, reducing duplicate data entry and orphaned credentials.",
      ]}
      features={[
        {
          title: "Credential lifecycle",
          description:
            "Provisioning, changes, and deactivation aligned to HR and contractor timelines.",
        },
        {
          title: "Visitor management",
          description:
            "Pre-registration, host approvals, and badging patterns that scale during peak hours.",
        },
        {
          title: "Monitoring integration",
          description:
            "Events correlated with video context for faster verification when alarms occur.",
        },
      ]}
      benefits={[
        {
          title: "Clearer accountability",
          description:
            "Know who accessed what, with evidence that supports investigations.",
        },
        {
          title: "Reduced tailgating risk",
          description:
            "Design and training patterns that reinforce physical entry discipline.",
        },
        {
          title: "Lower administration overhead",
          description:
            "Automation and standards reduce repetitive manual corrections.",
        },
      ]}
    />
  );
}
