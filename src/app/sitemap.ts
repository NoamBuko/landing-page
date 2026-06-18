import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Served at /sitemap.xml. Lists both locale homepages with hreflang
// alternates so crawlers understand they are the same page in en/he.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = {
    en: `${SITE_URL}/en`,
    he: `${SITE_URL}/he`,
    'x-default': `${SITE_URL}/en`,
  };

  return (['en', 'he'] as const).map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages },
  }));
}
