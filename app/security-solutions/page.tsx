import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Security solutions",
  description:
    "Integrated Security Solutions Qatar programs: surveillance design, access integration, monitoring workflows, and lifecycle support.",
  path: "/security-solutions",
});

export default function SecuritySolutionsPage() {
  return (
    <SolutionPageLayout
      title="Integrated security solutions"
      subtitle="Design-through-operations support for Surveillance Systems Qatar, access policies, and centralized monitoring that stays usable under pressure."
      heroImage={IMG.hero}
      heroAlt="Security control room monitoring"
      intro={[
        "CTST helps organizations move from fragmented devices to coherent security architectures. We align camera strategy, storage resilience, and operator workflows so incidents can be triaged quickly and evidence can be retrieved reliably.",
        "Whether you are modernizing legacy analog islands or standardizing enterprise-wide, we focus on outcomes: fewer blind spots, clearer accountability, and maintainable configurations.",
      ]}
      features={[
        {
          title: "Systems design & validation",
          description:
            "Coverage planning, network readiness checks, and acceptance criteria defined before installation begins.",
        },
        {
          title: "Unified monitoring patterns",
          description:
            "Alarm handling, escalation paths, and role-based access aligned to your operating model.",
        },
        {
          title: "Lifecycle services",
          description:
            "Health checks, firmware governance, and AMC options tuned to uptime targets.",
        },
      ]}
      benefits={[
        {
          title: "Stronger situational awareness",
          description:
            "Operators gain consistent visibility across zones with fewer confusing overlaps.",
        },
        {
          title: "Better forensic readiness",
          description:
            "Recording integrity and export workflows that stand up to review when it matters.",
        },
        {
          title: "Lower long-term operating risk",
          description:
            "Documentation and training reduce dependency on single individuals and ad-hoc fixes.",
        },
      ]}
    />
  );
}
