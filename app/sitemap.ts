import type { MetadataRoute } from 'next'
import { LOCALES, PRESSKIT_PAGE, localeUrl } from '@/app/_i18n/locales'
import { SHOWCASE_IMAGES } from '@/app/_utils/constants'

const sitemap = (): MetadataRoute.Sitemap => [
  ...LOCALES.map((locale) => ({
    url: localeUrl(locale),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: {
        en: localeUrl('en'),
        es: localeUrl('es'),
      },
    },
    images: SHOWCASE_IMAGES,
  })),
  ...LOCALES.map((locale) => ({
    url: localeUrl(locale, PRESSKIT_PAGE),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
    alternates: {
      languages: {
        en: localeUrl('en', PRESSKIT_PAGE),
        es: localeUrl('es', PRESSKIT_PAGE),
      },
    },
  })),
]

export default sitemap
