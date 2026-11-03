import type { MetadataRoute } from 'next'
import { LOCALES, localeUrl } from '@/app/_i18n/locales'
import { SHOWCASE_IMAGES } from '@/app/_utils/constants'

const sitemap = (): MetadataRoute.Sitemap =>
  LOCALES.map((locale) => ({
    url: localeUrl(locale),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: {
      languages: {
        en: localeUrl('en'),
        es: localeUrl('es'),
      },
    },
    images: SHOWCASE_IMAGES,
  }))

export default sitemap
