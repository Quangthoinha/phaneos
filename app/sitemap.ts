import type { MetadataRoute } from "next";

const SITE_URL = "https://phaneosai.com";

const policies = [
  "privacy-policy",
  "terms-of-service",
  "acceptable-use-policy",
  "ai-usage-policy",
  "partner-program-policy",
  "security-policy",
  "data-processing-addendum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...policies.map((slug) => ({
      url: `${SITE_URL}/legal/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5 as const,
    })),
  ];
}
