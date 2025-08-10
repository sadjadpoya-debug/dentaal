import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://dentaal.example/', changeFrequency: 'weekly', priority: 1 },
    { url: 'https://dentaal.example/behandelingen', changeFrequency: 'monthly' },
  ];
}
