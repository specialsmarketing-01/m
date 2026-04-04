import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Video analytics",
  description:
    "Video analytics for Surveillance Systems Qatar: detection, verification support, and tuned policies that reduce noise.",
  path: "/security/video-analytics",
});

export default function VideoAnalyticsPage() {
  return (
    <SolutionPageLayout
      title="Video analytics"
      subtitle="Turn raw video into actionable signals — with careful tuning so operators receive alerts worth responding to."
      heroImage={IMG.videoAnalytics}
      heroAlt="Analytics dashboard and data visualization"
      intro={[
        "Analytics can accelerate response — or flood teams with false positives. CTST implements analytics as part of a broader Surveillance Systems Qatar strategy: define use-cases, validate performance on-site, and iterate with operator feedback.",
        "Common applications include line crossing, loitering awareness, crowd dynamics, and forensic search — each with different privacy and retention considerations.",
      ]}
      features={[
        {
          title: "Use-case workshops",
          description:
            "Align detections to real operational playbooks, not vendor demo defaults.",
        },
        {
          title: "Performance tuning",
          description:
            "Reduce false alarms through scene-specific thresholds and masking.",
        },
        {
          title: "Integration to monitoring",
          description:
            "Route events to the right teams with supporting video context.",
        },
      ]}
      benefits={[
        {
          title: "Faster verification",
          description:
            "Operators spend less time scrubbing video manually during incidents.",
        },
        {
          title: "Better prioritization",
          description:
            "Higher-signal alerts improve attention during peak conditions.",
        },
        {
          title: "Measured continuous improvement",
          description:
            "KPIs and review cycles keep analytics aligned to changing site conditions.",
        },
      ]}
    />
  );
}
