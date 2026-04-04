import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Access control systems",
  description:
    "Access Control Systems Qatar: readers, controllers, credentials, and integrations for secure facilities and managed entry.",
  path: "/security/access-control-systems",
});

export default function AccessControlPage() {
  return (
    <SolutionPageLayout
      title="Access control systems"
      subtitle="Credential-driven entry management with integrations that support audits, visitor flows, and operational efficiency."
      heroImage={IMG.accessControl}
      heroAlt="Electronic access reader at secure door"
      intro={[
        "Access control should feel invisible to authorized users — and obvious when policy is violated. CTST implements Access Control Systems Qatar architectures that pair reliable hardware with workflows your teams can maintain.",
        "We align reader placement, door hardware interfaces, and controller topology to reduce nuisance failures and simplify troubleshooting.",
      ]}
      features={[
        {
          title: "Multi-technology readers",
          description:
            "Support for cards, mobile credentials, and phased migration strategies.",
        },
        {
          title: "Door & lock coordination",
          description:
            "Integration considerations for electrified strikes, maglocks, and safety hardware.",
        },
        {
          title: "Event monitoring",
          description:
            "Meaningful alarms with context for operators and maintenance teams.",
        },
      ]}
      benefits={[
        {
          title: "Stronger entry integrity",
          description:
            "Fewer exceptions and workarounds that undermine policy over time.",
        },
        {
          title: "Better contractor governance",
          description:
            "Time-bound access patterns that expire automatically when work completes.",
        },
        {
          title: "Improved audit readiness",
          description:
            "Reports and exports that match how investigations actually unfold.",
        },
      ]}
    />
  );
}
