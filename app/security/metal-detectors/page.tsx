import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Metal detectors",
  description:
    "Walk-through and handheld screening aligned to venue throughput — training support, calibration discipline, and integration with access workflows.",
  path: "/security/metal-detectors",
});

export default function MetalDetectorsPage() {
  return (
    <SolutionPageLayout
      title="Metal detectors & screening lanes"
      subtitle="People screening that balances safety with visitor experience — especially for events, campuses, and high-traffic entries."
      heroImage={IMG.metalDetector}
      heroAlt="Security screening checkpoint"
      intro={[
        "Screening is a system: device tuning, lane layout, staff procedures, and exception handling. CTST supports metal detection programs with practical commissioning, sensitivity baselines, and training aids that help teams stay consistent.",
        "We coordinate with Access Control Systems Qatar flows so screening complements — rather than fights — entry design.",
      ]}
      features={[
        {
          title: "Lane layout planning",
          description:
            "Throughput modeling for peak arrivals and emergency egress considerations.",
        },
        {
          title: "Calibration routines",
          description:
            "Documented test objects and schedules to keep performance stable.",
        },
        {
          title: "Operator enablement",
          description:
            "Quick-reference guidance for common scenarios and escalation paths.",
        },
      ]}
      benefits={[
        {
          title: "More predictable screening outcomes",
          description:
            "Fewer arbitrary results that erode trust and slow lines.",
        },
        {
          title: "Improved staff confidence",
          description:
            "Training and procedures reduce hesitation during peak pressure.",
        },
        {
          title: "Better integration with overall security posture",
          description:
            "Screening becomes part of a coherent entry strategy, not an add-on.",
        },
      ]}
    />
  );
}
