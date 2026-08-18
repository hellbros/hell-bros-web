import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://www.hellbrosstudio.com',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
]

export default sitemap
