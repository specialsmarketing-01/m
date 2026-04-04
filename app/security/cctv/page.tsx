import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "CCTV systems",
  description:
    "CCTV Systems Qatar: HD/IP video design, storage resilience, and operator workflows for campuses, retail, and critical sites.",
  path: "/security/cctv",
});

export default function CctvPage() {
  return (
    <SolutionPageLayout
      title="CCTV systems"
      subtitle="High-quality video coverage with dependable recording, export, and monitoring aligned to Surveillance Systems Qatar best practices."
      heroImage={IMG.cctv}
      heroAlt="CCTV cameras on building exterior"
      intro={[
        "Modern CCTV is more than cameras on walls — it is an integrated system of optics, networking, storage, and user workflows. CTST designs CCTV Systems Qatar deployments that prioritize usable video, resilient retention, and clear operator paths during incidents.",
        "We help teams select the right mix of fixed, panoramic, and PTZ coverage for each zone — balancing detail, storage costs, and maintenance access.",
      ]}
      features={[
        {
          title: "Coverage & lighting analysis",
          description:
            "Design validation for glare, night scenes, and high-traffic choke points.",
        },
        {
          title: "Storage & retention planning",
          description:
            "Right-size recording policies for operational needs and review workflows.",
        },
        {
          title: "VMS integration",
          description:
            "Maps, layouts, and permissions that keep day-to-day monitoring efficient.",
        },
      ]}
      benefits={[
        {
          title: "Improved incident clarity",
          description:
            "Footage that is actually useful for verification and follow-up actions.",
        },
        {
          title: "Predictable operating costs",
          description:
            "Fewer emergency upgrades through disciplined capacity planning.",
        },
        {
          title: "Easier cross-team coordination",
          description:
            "Shared understanding of what is recorded, where, and for how long.",
        },
      ]}
    />
  );
}
