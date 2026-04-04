import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Key management system",
  description:
    "Controlled key custody workflows for high-security sites — traceability, policy enforcement, and auditable handovers.",
  path: "/key-management-system",
});

export default function KeyManagementPage() {
  return (
    <SolutionPageLayout
      title="Key management systems"
      subtitle="Bring mechanical key programs under disciplined control with traceable custody, approvals, and reporting suited to regulated facilities."
      heroImage={IMG.keyManagement}
      heroAlt="Secure key storage and access control"
      intro={[
        "Keys remain a practical reality across many campuses. CTST implements key management approaches that reduce loss, unauthorized duplication risk, and ambiguous accountability — without making day-to-day work unnecessarily slow.",
        "Programs can integrate with broader Access Control Systems Qatar initiatives so credentials, visitor flows, and physical key custody reinforce the same policy intent.",
      ]}
      features={[
        {
          title: "Custody & chain of responsibility",
          description:
            "Clear check-in/check-out patterns with alerts for overdue returns.",
        },
        {
          title: "Role-based approvals",
          description:
            "Match authorization levels to operational roles and contractor engagements.",
        },
        {
          title: "Audit-friendly reporting",
          description:
            "Exports and summaries that support governance reviews and investigations.",
        },
      ]}
      benefits={[
        {
          title: "Reduced key-related incidents",
          description:
            "Earlier detection of process gaps before they become security events.",
        },
        {
          title: "Operational clarity",
          description:
            "Staff understand who can authorize access and how exceptions are recorded.",
        },
        {
          title: "Aligned physical & electronic controls",
          description:
            "A coherent story for auditors across doors, credentials, and keys.",
        },
      ]}
    />
  );
}
