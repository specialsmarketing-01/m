export const siteConfig = {
  name: "CTST",
  fullName: "CTST — Security & Technology Solutions",
  domain: "https://ctst.qa",
  description:
    "CTST delivers Security Solutions Qatar organizations trust: CCTV Systems Qatar, Access Control Systems Qatar, Surveillance Systems Qatar, and integrated telecom and secure access programs.",
  phoneDisplay: "+974 0000 0000",
  phoneTel: "+97400000000",
  email: "info@ctst.qa",
  addressLines: ["Doha", "Qatar"],
  whatsapp: "97400000000",
};

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  {
    label: "Solutions",
    children: [
      { label: "Security solutions", href: "/security-solutions" },
      { label: "Key management system", href: "/key-management-system" },
      { label: "Telecom solutions", href: "/telecom-solutions" },
      { label: "Secure access", href: "/secure-access" },
      { label: "Secure your network", href: "/secure-your-network" },
      { label: "CCTV", href: "/security/cctv" },
      { label: "Access control systems", href: "/security/access-control-systems" },
      { label: "Video analytics", href: "/security/video-analytics" },
      {
        label: "Perimeter intrusion detection",
        href: "/security/perimeter-intrusion-detection",
      },
      { label: "UVSS", href: "/security/uvss" },
      { label: "Metal detectors", href: "/security/metal-detectors" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export const partners = [
  "Axis Communications",
  "Honeywell",
  "Genetec",
  "Milestone",
  "HID",
  "Commscope",
  "Panduit",
  "Siemens",
];

export const homeServices = [
  {
    title: "Integrated security systems",
    description:
      "Design, deployment, and lifecycle support for CCTV Systems Qatar programs, unified monitoring, and evidence-ready recording.",
    href: "/security-solutions",
  },
  {
    title: "Access & identity workflows",
    description:
      "Access Control Systems Qatar deployments aligned to policies, visitor management, and audit-friendly reporting.",
    href: "/secure-access",
  },
  {
    title: "Telecom & connectivity",
    description:
      "Resilient transport, structured cabling, and field services that keep critical sites connected end to end.",
    href: "/telecom-solutions",
  },
];

export const keySolutions = [
  {
    title: "Command & visibility",
    description:
      "Centralized visibility with disciplined alarm handling for faster decisions during incidents.",
  },
  {
    title: "Hardened field delivery",
    description:
      "Quality-first installation practices for harsh outdoor environments and high-security facilities.",
  },
  {
    title: "Lifecycle partnership",
    description:
      "AMC, health monitoring, and roadmap planning so systems stay current after go-live.",
  },
];
