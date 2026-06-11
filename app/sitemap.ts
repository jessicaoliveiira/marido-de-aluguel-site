import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maridodealuguelsp.com.br';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/avaliacoes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contato`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ];
}
