/**
 * Local AI-generated assets in /public/images — avoids broken remote hotlinks.
 */
export const IMG = {
  hero: "/images/site-hero-security.png",
  cctv: "/images/site-cctv.png",
  accessControl: "/images/site-access-control.png",
  network: "/images/site-network.png",
  telecom: "/images/site-telecom.png",
  perimeter: "/images/site-perimeter.png",
  uvss: "/images/site-uvss.png",
  metalDetector: "/images/site-metal-detector.png",
  keyManagement: "/images/site-key-management.png",
  contact: "/images/site-contact.png",
  blogAbstract: "/images/site-blog-abstract.png",
  citySkyline: "/images/site-city-skyline.png",
  videoAnalytics: "/images/site-video-analytics.png",
} as const;

/** Rotate for blog thumbnails — SEO variety without 20 unique files */
export const BLOG_THUMB_ROTATION: readonly string[] = [
  IMG.blogAbstract,
  IMG.network,
  IMG.telecom,
  IMG.cctv,
  IMG.accessControl,
  IMG.videoAnalytics,
  IMG.hero,
  IMG.citySkyline,
];
