import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Perimeter intrusion detection",
  description:
    "Perimeter intrusion detection for critical sites — sensor fusion, video verification, and response workflows for Security Solutions Qatar.",
  path: "/security/perimeter-intrusion-detection",
});

export default function PerimeterPage() {
  return (
    <SolutionPageLayout
      title="Perimeter intrusion detection"
      subtitle="Layered detection along boundaries and approaches — engineered to confirm genuine events while reducing environmental noise."
      heroImage={IMG.perimeter}
      heroAlt="Perimeter fence and security lighting"
      intro={[
        "Long perimeters demand more than cameras alone. CTST combines sensors, lighting strategy, and video verification to help teams detect early and respond with confidence.",
        "Design considers terrain, wildlife, weather, and maintenance access — because a perimeter system that is constantly false alarming will eventually be ignored.",
      ]}
      features={[
        {
          title: "Sensor selection & zoning",
          description:
            "Match technologies to terrain and risk zones with clear escalation tiers.",
        },
        {
          title: "Verification workflows",
          description:
            "PTZ steering, preset positions, and operator prompts for rapid confirmation.",
        },
        {
          title: "Maintenance planning",
          description:
            "Accessible components and test routines that keep sensitivity stable over time.",
        },
      ]}
      benefits={[
        {
          title: "Earlier awareness",
          description:
            "Detection beyond the fence line where response time still matters.",
        },
        {
          title: "Improved patrol efficiency",
          description:
            "Better targeting of field teams based on confirmed signals.",
        },
        {
          title: "Stronger deterrence posture",
          description:
            "Visible, consistent protection signals reduce opportunistic attempts.",
        },
      ]}
    />
  );
}
