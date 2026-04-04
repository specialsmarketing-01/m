import type { Project } from "../types";
import { IMG } from "../images";

export const projects: Project[] = [
  {
    slug: "lusail-plaza",
    title: "Lusail Plaza integrated security rollout",
    heroImage: IMG.citySkyline,
    summary:
      "End-to-end surveillance and access orchestration for a high-footfall mixed-use destination in Lusail.",
    description: [
      "CTST delivered a unified security platform combining HD video coverage, intelligent analytics, and centralized monitoring tailored to retail, hospitality, and public circulation zones.",
      "The program emphasized minimal disruption during phased handover, with commissioning aligned to tenant fit-out schedules and operational readiness milestones.",
    ],
    technologies: [
      "IP CCTV backbone",
      "Video management platform",
      "Access control integration",
      "SOC-style monitoring workflows",
    ],
    results: [
      "Consistent situational awareness across indoor and outdoor areas",
      "Faster incident triage through standardized alarm handling",
      "Scalable architecture ready for future tenant expansions",
    ],
  },
  {
    slug: "woqod-petrol-stations",
    title: "Nationwide forecourt monitoring enhancement",
    heroImage: IMG.cctv,
    summary:
      "Reliable video and perimeter awareness for distributed fuel retail locations with strict safety expectations.",
    description: [
      "We modernized camera coverage and recording retention while improving visibility of pump islands, convenience retail, and vehicle approaches.",
      "Operational playbooks were aligned with site supervisors to ensure clear escalation paths for safety-related events.",
    ],
    technologies: [
      "Hardened outdoor cameras",
      "Edge recording with central audit",
      "Mobile supervisor dashboards",
    ],
    results: [
      "Improved forensic review quality for operational incidents",
      "More consistent compliance with site safety monitoring practices",
      "Reduced blind spots across high-risk forecourt areas",
    ],
  },
  {
    slug: "phcc-cctv-amc",
    title: "PHCC CCTV annual maintenance program",
    heroImage: IMG.hero,
    summary:
      "Structured AMC services to keep healthcare surveillance dependable, compliant, and audit-ready.",
    description: [
      "CTST implemented a preventive maintenance cadence covering cameras, storage health, firmware governance, and incident response readiness.",
      "Documentation and reporting were tuned for stakeholder reviews and continuity planning.",
    ],
    technologies: [
      "Health monitoring for VMS and storage",
      "Spares strategy and SLA reporting",
      "Secure remote diagnostics",
    ],
    results: [
      "Higher uptime across critical clinical and public areas",
      "Predictable lifecycle budgeting through transparent asset tracking",
      "Clear maintenance evidence for governance reviews",
    ],
  },
  {
    slug: "qatar-2022",
    title: "Major event security technology support",
    heroImage: IMG.videoAnalytics,
    summary:
      "High-availability surveillance and coordination support aligned to large-scale event operations.",
    description: [
      "The engagement focused on rapid deployment methodologies, resilient networking, and monitoring workflows suited to peak crowd conditions.",
      "Integration points were validated end-to-end to reduce friction between field teams and control room operators.",
    ],
    technologies: [
      "High-density camera design",
      "Low-latency video paths",
      "Inter-team coordination tooling",
    ],
    results: [
      "Strong operational continuity during peak attendance windows",
      "Improved cross-team visibility for incident coordination",
      "Post-event documentation supporting lessons learned",
    ],
  },
  {
    slug: "enhancing-security-at-moi-location",
    title: "Hardened security systems for a sensitive facility",
    heroImage: IMG.perimeter,
    summary:
      "Layered physical and electronic security aligned to strict access policies and monitoring requirements.",
    description: [
      "The solution combined controlled entry points, verified credentials, and monitored perimeters with disciplined change management.",
      "Design decisions prioritized reliability, traceability, and operator clarity under pressure.",
    ],
    technologies: [
      "Multi-factor access workflows",
      "Perimeter sensing integration",
      "Centralized alarm correlation",
    ],
    results: [
      "Clearer accountability across entry and exit events",
      "Reduced nuisance alarms through tuned detection policies",
      "Improved readiness for security audits and reviews",
    ],
  },
  {
    slug: "perimeter-security",
    title: "Perimeter protection for critical infrastructure",
    heroImage: IMG.perimeter,
    summary:
      "Detection, deterrence, and verification workflows for long boundary lines and mixed terrain.",
    description: [
      "CTST engineered a layered approach using sensors, video verification, and response procedures tuned to local conditions.",
      "The outcome is earlier awareness without overwhelming operators with low-value alerts.",
    ],
    technologies: [
      "Intrusion detection sensors",
      "PTZ verification cameras",
      "Rules-based alarm management",
    ],
    results: [
      "Faster confirmation of genuine perimeter events",
      "Better alignment between field patrols and control room intelligence",
      "Documented playbooks for escalation and evidence capture",
    ],
  },
  {
    slug: "osp-solution-at-qaf-military-base",
    title: "OSP and communications resilience for a secure site",
    heroImage: IMG.telecom,
    summary:
      "Outside plant planning and hardened connectivity to support mission-critical security and telecom workloads.",
    description: [
      "We coordinated civil, cabling, and equipment placement to meet durability and performance targets in demanding environments.",
      "Testing and acceptance criteria were defined to validate end-to-end readiness before operational handover.",
    ],
    technologies: [
      "Structured OSP design",
      "Protected pathways and termination discipline",
      "Performance validation testing",
    ],
    results: [
      "Predictable network behavior for security applications",
      "Reduced maintenance surprises through quality-first installation",
      "Clear as-built documentation for long-term operations",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
