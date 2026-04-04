import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { IMG } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Secure your network",
  description:
    "Harden enterprise and OT-adjacent networks with segmentation, monitoring guidance, and pragmatic controls for Security Solutions Qatar environments.",
  path: "/secure-your-network",
});

export default function SecureYourNetworkPage() {
  return (
    <SolutionPageLayout
      title="Secure your network"
      subtitle="Move from ad-hoc connectivity to defensible architecture — with segmentation, visibility, and controls that match real operational constraints."
      heroImage={IMG.network}
      heroAlt="Network security and server infrastructure"
      intro={[
        "Networks underpin CCTV Systems Qatar deployments, access controllers, and modern collaboration tools. CTST helps teams reduce exposure by clarifying trust boundaries, tightening management access, and improving monitoring signals.",
        "We emphasize practical sequencing: quick risk reductions first, then deeper improvements as stakeholders align on policies and maintenance windows.",
      ]}
      features={[
        {
          title: "Segmentation strategy",
          description:
            "Separate guest, corporate, and security device zones with explicit rules.",
        },
        {
          title: "Hardening guidance",
          description:
            "Baseline configurations and review checkpoints for switches, firewalls, and management.",
        },
        {
          title: "Operational visibility",
          description:
            "Logging priorities and use-cases that help teams detect misuse early.",
        },
      ]}
      benefits={[
        {
          title: "Smaller blast radius",
          description:
            "Containment limits the impact of compromised endpoints or misconfigurations.",
        },
        {
          title: "More confident change windows",
          description:
            "Clear baselines reduce surprises during upgrades and expansions.",
        },
        {
          title: "Better alignment with compliance narratives",
          description:
            "Controls mapped to evidence requests and stakeholder reporting needs.",
        },
      ]}
    />
  );
}
