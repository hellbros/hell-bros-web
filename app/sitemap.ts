import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://hellbrosstudio.com/home',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
]

export default sitemap
