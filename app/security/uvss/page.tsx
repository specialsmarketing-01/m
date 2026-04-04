import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Under vehicle surveillance (UVSS)",
  description:
    "UVSS solutions for vehicle screening — high-contrast imaging, throughput-friendly workflows, and integration options for secure facilities.",
  path: "/security/uvss",
});

export default function UvssPage() {
  return (
    <SolutionPageLayout
      title="Under vehicle surveillance (UVSS)"
      subtitle="Fast, repeatable undercarriage inspection that supports high-security entry points without creating unacceptable queues."
      heroImage={IMG.uvss}
      heroAlt="Vehicle checkpoint and urban security"
      intro={[
        "UVSS adds a critical verification layer for vehicle-borne threats. CTST implements imaging systems with attention to lighting, lane guidance, and operator ergonomics — so inspections are consistent during day and night operations.",
        "Integration options can include archiving, analytics assistance, and handoff to broader Surveillance Systems Qatar monitoring when required.",
      ]}
      features={[
        {
          title: "Lane design & signage",
          description:
            "Clear driver behavior patterns that reduce retakes and confusion.",
        },
        {
          title: "Image quality optimization",
          description:
            "Contrast and capture settings tuned for local pavement and weather conditions.",
        },
        {
          title: "Secure review workflows",
          description:
            "Role-based access to imagery with export controls aligned to policy.",
        },
      ]}
      benefits={[
        {
          title: "Higher throughput at checkpoints",
          description:
            "Smoother flow reduces frustration while maintaining screening rigor.",
        },
        {
          title: "Better evidence capture",
          description:
            "Consistent imagery supports investigations and after-action reviews.",
        },
        {
          title: "Scalable deployment patterns",
          description:
            "Repeatable standards across multiple entry lanes and facilities.",
        },
      ]}
    />
  );
}
