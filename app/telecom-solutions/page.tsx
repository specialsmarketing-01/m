import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Telecom solutions",
  description:
    "Structured cabling, outside plant, and resilient connectivity for Security Solutions Qatar workloads and enterprise networks.",
  path: "/telecom-solutions",
});

export default function TelecomSolutionsPage() {
  return (
    <SolutionPageLayout
      title="Telecom & connectivity solutions"
      subtitle="Hardened transport and disciplined installation practices so security applications receive predictable bandwidth, latency, and availability."
      heroImage={IMG.telecom}
      heroAlt="Network cables and telecom infrastructure"
      intro={[
        "Security systems depend on the network beneath them. CTST delivers telecom scope with the same rigor as the cameras and controllers above it — labeling, testing, and as-built documentation included.",
        "We support indoor structured cabling and challenging outdoor paths, coordinating civil interfaces and protection requirements for long-term reliability.",
      ]}
      features={[
        {
          title: "Structured cabling systems",
          description:
            "Copper and fiber designs aligned to performance targets and future headroom.",
        },
        {
          title: "OSP & pathway engineering",
          description:
            "Protected routes, termination discipline, and testing evidence for acceptance.",
        },
        {
          title: "Integration readiness",
          description:
            "Handover packages that help IT and security teams validate end-to-end behavior.",
        },
      ]}
      benefits={[
        {
          title: "Fewer “mystery” outages",
          description:
            "Physical layer quality reduces intermittent faults that waste troubleshooting time.",
        },
        {
          title: "Faster expansions",
          description:
            "Documented plant makes adds/moves/changes safer and more predictable.",
        },
        {
          title: "Better alignment across teams",
          description:
            "Shared facts for facilities, IT, and security during commissioning.",
        },
      ]}
    />
  );
}
