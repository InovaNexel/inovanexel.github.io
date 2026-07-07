import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://inovanexel.com";

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/quem-somos`, priority: 0.8 },
    { url: `${base}/sigel`, priority: 0.8 },
  ];
}
