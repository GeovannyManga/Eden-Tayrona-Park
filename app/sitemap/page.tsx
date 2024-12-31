import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://edentayronapark.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://edentayronapark.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://edentayronapark.com/sitemap",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
  ];
}
