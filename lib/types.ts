export type BlogCategory =
  | "network-security"
  | "data-loss-prevention"
  | "digital-transformation"
  | "privacy";

export type Project = {
  slug: string;
  title: string;
  heroImage: string;
  summary: string;
  description: string[];
  technologies: string[];
  results: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  image: string;
  content: string[];
};
