import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://uki-uki-marche.vercel.app/', lastModified: '2026-09-21', priority: 1 }];
}
