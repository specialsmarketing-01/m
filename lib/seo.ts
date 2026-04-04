import type { Metadata } from "next";
import { siteConfig } from "./data/site";
import { IMG } from "./images";

const keywordsDefault = [
  "Security Solutions Qatar",
  "CCTV Systems Qatar",
  "Access Control Systems Qatar",
  "Surveillance Systems Qatar",
];

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = keywordsDefault,
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const url = `${siteConfig.domain}${path}`;
  const imageUrl =
    ogImage && ogImage.startsWith("http")
      ? ogImage
      : `${siteConfig.domain}${ogImage || IMG.hero}`;
  return {
    metadataBase: new URL(siteConfig.domain),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.fullName,
      locale: "en_QA",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}
