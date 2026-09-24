import type { MetadataRoute } from "next";
import { noticias } from "@/lib/noticias";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://inovanexel.com";

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/quem-somos`, priority: 0.8 },
    { url: `${base}/sistemas`, priority: 0.8 },
    { url: `${base}/sigel`, priority: 0.8 },
    ...noticias.map((n) => ({
      url: `${base}/noticias/${n.slug}`,
      lastModified: n.dataISO,
      priority: 0.6,
    })),
  ];
}
