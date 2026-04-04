import type { BlogCategory, BlogPost } from "../types";
import { BLOG_THUMB_ROTATION } from "../images";

const cat = (c: BlogCategory) => c;

const blogPostsRaw: Omit<BlogPost, "image">[] = [
  {
    slug: "zero-trust-roadmap-for-qatar-enterprises",
    title: "A practical zero-trust roadmap for Qatar enterprises",
    excerpt:
      "How to sequence identity, segmentation, and monitoring without stalling day-to-day operations.",
    category: cat("network-security"),
    publishedAt: "2026-01-12",
    content: [
      "Zero trust is less a product purchase and more a disciplined operating model. Organizations in Qatar can start by clarifying who and what should access critical systems, then tighten verification at each step.",
      "Network segmentation reduces blast radius, while continuous monitoring helps teams detect misuse early. The goal is steady progress: quick wins first, then deeper controls as maturity grows.",
      "For Security Solutions Qatar teams, aligning policies with business workflows keeps adoption high and support tickets low.",
    ],
  },
  {
    slug: "securing-wi-fi-for-hybrid-workplaces",
    title: "Securing Wi‑Fi for hybrid workplaces in regulated sectors",
    excerpt:
      "Design patterns that balance user experience with strong authentication and visibility.",
    category: cat("network-security"),
    publishedAt: "2026-01-18",
    content: [
      "Wireless networks remain a common entry point for opportunistic attacks. Strong encryption, certificate-based authentication, and guest isolation are baseline expectations—not optional extras.",
      "Surveillance Systems Qatar deployments often sit on the same corporate fabric, so consistent policy enforcement matters for both safety and compliance narratives.",
      "Operational success comes from monitoring anomalies, not only blocking obvious threats.",
    ],
  },
  {
    slug: "email-gateway-hardening-checklist",
    title: "Email gateway hardening: a checklist security leaders can use",
    excerpt:
      "Reduce phishing success rates with layered controls and measurable outcomes.",
    category: cat("network-security"),
    publishedAt: "2026-02-02",
    content: [
      "Most breaches still begin with a message someone believed. DMARC, SPF, and DKIM are table stakes, but user coaching and simulated exercises close the loop.",
      "Pair technical controls with clear reporting channels so employees can escalate quickly without fear of blame.",
      "CCTV Systems Qatar projects also benefit when incident communication paths are well rehearsed across facilities teams.",
    ],
  },
  {
    slug: "ot-it-convergence-without-compromise",
    title: "OT/IT convergence without compromising plant safety",
    excerpt:
      "Segmentation strategies that keep industrial environments predictable and auditable.",
    category: cat("network-security"),
    publishedAt: "2026-02-14",
    content: [
      "When operational technology connects to enterprise networks, the attack surface changes. The answer is not to freeze progress—it is to engineer boundaries with explicit trust rules.",
      "Monitoring should focus on deviations from known-good behavior, especially for devices that cannot host traditional endpoint agents.",
      "Access Control Systems Qatar integrations should respect least privilege for service accounts and maintenance roles.",
    ],
  },
  {
    slug: "incident-response-drills-that-actually-help",
    title: "Incident response drills that teams will actually run twice a year",
    excerpt:
      "Short scenarios, clear roles, and measurable improvements after every exercise.",
    category: cat("network-security"),
    publishedAt: "2026-03-01",
    content: [
      "Long tabletop sessions often fatigue participants. Instead, run focused drills with a single objective—containment, evidence preservation, or stakeholder comms.",
      "Capture time-to-triage metrics and fix the top friction points first.",
      "Security Solutions Qatar providers can support realistic exercises that reflect local partners and vendor ecosystems.",
    ],
  },
  {
    slug: "classifying-data-by-business-risk",
    title: "Classifying data by business risk, not by folder names",
    excerpt:
      "A simple labeling model that scales and keeps DLP policies maintainable.",
    category: cat("data-loss-prevention"),
    publishedAt: "2026-01-08",
    content: [
      "Data loss prevention starts with clarity: what is sensitive, who may move it, and where it may travel. Labels should reflect outcomes, not departmental politics.",
      "Start with a small set of tiers—public, internal, confidential, regulated—and map controls to each tier.",
      "When Surveillance Systems Qatar metadata is involved, treat footage and logs as regulated assets with explicit retention rules.",
    ],
  },
  {
    slug: "dlp-that-doesnt-break-collaboration",
    title: "DLP policies that do not break everyday collaboration",
    excerpt:
      "Balancing enforcement with productivity through context-aware rules and exceptions.",
    category: cat("data-loss-prevention"),
    publishedAt: "2026-01-22",
    content: [
      "Overly aggressive blocking creates shadow workflows. The best programs combine user prompts, just-in-time approvals, and targeted monitoring for high-risk data.",
      "Measure false positives weekly and tune dictionaries accordingly.",
      "Access Control Systems Qatar environments often include contractors—time-bound access and watermarking reduce accidental leakage.",
    ],
  },
  {
    slug: "insider-risk-without-a-culture-of-suspicion",
    title: "Insider risk programs without building a culture of suspicion",
    excerpt:
      "Transparent policies, proportionate monitoring, and supportive leadership messaging.",
    category: cat("data-loss-prevention"),
    publishedAt: "2026-02-05",
    content: [
      "Insider risk is real, but programs fail when employees feel surveilled rather than protected. Start with acceptable use policies people can understand.",
      "Pair technical signals with HR and manager workflows so concerns are handled consistently.",
      "Security Solutions Qatar initiatives should document purpose limitation and access reviews for trust.",
    ],
  },
  {
    slug: "cloud-exfiltration-patterns-to-watch",
    title: "Cloud exfiltration patterns your SOC should recognize early",
    excerpt:
      "From unusual OAuth grants to bulk downloads—signals worth prioritizing.",
    category: cat("data-loss-prevention"),
    publishedAt: "2026-02-19",
    content: [
      "Modern exfiltration rarely looks like a single giant transfer. It is often many small events across SaaS apps and personal endpoints.",
      "Baseline normal behavior for privileged roles and watch for credential sprawl.",
      "CCTV Systems Qatar operators should also protect export workflows from video management systems with role-based export permissions.",
    ],
  },
  {
    slug: "retention-schedules-that-satisfy-auditors",
    title: "Retention schedules that satisfy auditors and spare storage costs",
    excerpt:
      "Align legal holds, operational needs, and technical deletion with a single policy map.",
    category: cat("data-loss-prevention"),
    publishedAt: "2026-03-06",
    content: [
      "Retention is both a compliance topic and a cost topic. Define minimum and maximum retention per data class, and automate deletion where safe.",
      "Legal holds should be exception-based and time-bounded when possible.",
      "Surveillance Systems Qatar deployments must reconcile privacy expectations with evidentiary needs—document the balance explicitly.",
    ],
  },
  {
    slug: "digital-transformation-with-security-as-a-track",
    title: "Digital transformation with security as a parallel delivery track",
    excerpt:
      "Why bolt-on security slows programs—and how to embed controls from sprint zero.",
    category: cat("digital-transformation"),
    publishedAt: "2026-01-15",
    content: [
      "Transformation programs succeed when security requirements are user stories, not gate checks at the end. Threat modeling early prevents expensive rework.",
      "Shared metrics—deployment frequency, incident rate, and access review completion—keep teams aligned.",
      "Security Solutions Qatar customers benefit when vendors publish integration roadmaps and test environments upfront.",
    ],
  },
  {
    slug: "modernizing-identity-for-multi-vendor-ecosystems",
    title: "Modernizing identity for multi-vendor ecosystems",
    excerpt:
      "Federation, lifecycle automation, and break-glass accounts done responsibly.",
    category: cat("digital-transformation"),
    publishedAt: "2026-01-29",
    content: [
      "Identity is the control plane for cloud adoption. Standardize on a primary directory, then integrate SaaS with SCIM where possible.",
      "Break-glass accounts must exist, but should be rare, monitored, and periodically tested.",
      "Access Control Systems Qatar integrations should map cardholder lifecycle to IT identity to avoid orphaned credentials.",
    ],
  },
  {
    slug: "from-spreadsheets-to-service-catalogs",
    title: "From spreadsheets to service catalogs: operational maturity steps",
    excerpt:
      "How mid-sized teams can professionalize requests without heavy ITIL overhead.",
    category: cat("digital-transformation"),
    publishedAt: "2026-02-11",
    content: [
      "Catalogs reduce ambiguity: people know what to ask for, and delivery teams know what “done” means.",
      "Start with five high-volume services and iterate quarterly.",
      "Surveillance Systems Qatar upgrades become smoother when camera additions follow a standard request template with network and power prerequisites.",
    ],
  },
  {
    slug: "measuring-roi-for-security-automation",
    title: "Measuring ROI for security automation without fantasy metrics",
    excerpt:
      "Hours saved, error reduction, and faster onboarding—numbers leadership respects.",
    category: cat("digital-transformation"),
    publishedAt: "2026-02-24",
    content: [
      "Automation ROI should be grounded in repetitive work removed, not vague “risk reduced” claims.",
      "Track ticket volume, mean time to provision, and audit preparation hours before and after.",
      "CCTV Systems Qatar maintenance workflows can automate health checks and reduce truck rolls.",
    ],
  },
  {
    slug: "change-management-for-new-security-tools",
    title: "Change management that helps new security tools stick",
    excerpt:
      "Champions, training windows, and feedback loops that prevent silent non-use.",
    category: cat("digital-transformation"),
    publishedAt: "2026-03-09",
    content: [
      "Tools fail when workflows feel heavier than old habits. Pilot with a friendly department, refine UX, then expand.",
      "Publish short videos and quick-reference cards; nobody reads fifty-page manuals under deadline pressure.",
      "Security Solutions Qatar rollouts should include operator feedback sessions in the first thirty days.",
    ],
  },
  {
    slug: "privacy-by-design-for-smart-cities",
    title: "Privacy by design for smart city and campus programs",
    excerpt:
      "Data minimization, purpose limitation, and transparent signage as baseline expectations.",
    category: cat("privacy"),
    publishedAt: "2026-01-10",
    content: [
      "Surveillance can support safety and operations, but trust requires restraint. Collect only what you need, store only as long as justified, and disclose purposes clearly.",
      "Technical controls like masking, tiered access, and audit trails turn policy into practice.",
      "Surveillance Systems Qatar deployments should document viewing permissions and routine access reviews.",
    ],
  },
  {
    slug: "dpi-as-a-dialogue-not-a-buzzword",
    title: "Data protection impact assessments as a dialogue, not a buzzword",
    excerpt:
      "How to run DPIAs that surface real risks and produce actionable mitigations.",
    category: cat("privacy"),
    publishedAt: "2026-01-25",
    content: [
      "A strong DPIA names stakeholders, data flows, and residual risks honestly. It should result in concrete controls and owners.",
      "Revisit assessments when processing changes materially.",
      "Access Control Systems Qatar projects should record lawful basis for credentials and visitor data where applicable.",
    ],
  },
  {
    slug: "vendor-due-diligence-for-sensitive-data",
    title: "Vendor due diligence when sensitive data leaves your perimeter",
    excerpt:
      "Security questionnaires matter, but evidence and contract terms matter more.",
    category: cat("privacy"),
    publishedAt: "2026-02-08",
    content: [
      "Ask vendors for independent assessments, subprocessors lists, and breach notification commitments in writing.",
      "Test integrations in isolated environments before production data flows.",
      "CCTV Systems Qatar cloud backups require clarity on residency, encryption, and deletion timelines.",
    ],
  },
  {
    slug: "building-a-privacy-conscious-surveillance-policy",
    title: "Building a privacy-conscious surveillance policy employees can support",
    excerpt:
      "Fair processing notices, training, and escalation paths that reduce gray areas.",
    category: cat("privacy"),
    publishedAt: "2026-02-21",
    content: [
      "Policies should explain where cameras run, why footage may be reviewed, and how long it is kept. Ambiguity breeds rumor.",
      "Train managers on proportionate use—security is not a substitute for HR disputes without clear rules.",
      "Security Solutions Qatar partners can help align signage, technology, and documentation.",
    ],
  },
  {
    slug: "handling-subject-requests-at-scale",
    title: "Handling subject access requests at scale without drowning teams",
    excerpt:
      "Workflows, identity verification, and redaction standards that keep timelines achievable.",
    category: cat("privacy"),
    publishedAt: "2026-03-04",
    content: [
      "Requests spike after incidents. Prepare playbooks, delegate to data owners, and use tooling for search and redaction where feasible.",
      "Log decisions to demonstrate good-faith effort if timelines slip.",
      "Surveillance Systems Qatar archives need indexed retrieval to avoid manual scrubbing across silos.",
    ],
  },
];

export const blogPosts: BlogPost[] = blogPostsRaw.map((p, i) => ({
  ...p,
  image: BLOG_THUMB_ROTATION[i % BLOG_THUMB_ROTATION.length],
}));

export const blogCategoryLabels: Record<BlogCategory, string> = {
  "network-security": "Network security",
  "data-loss-prevention": "Data loss prevention",
  "digital-transformation": "Digital transformation",
  privacy: "Privacy",
};

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
