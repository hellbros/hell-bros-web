import type { Metadata } from 'next'
import Header from '@/app/_components/header/page'
import Footer from '@/app/_components/footer/page'
import HomeContent from '../home/_components/HomeContent'
import { dictionaries } from '@/app/_i18n/dictionaries'
import { DEFAULT_LOCALE, localePath, localeUrl, otherLocale, toLocale, type Locale } from '@/app/_i18n/locales'
import { SITE_URL, STEAM_PAGE_LIVE, STEAM_URL } from '@/app/_utils/constants'

type Props = {
  params: Promise<{ lang: string }>
}

// Only the generated languages exist; anything else is a 404.
export const dynamicParams = false

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const locale = toLocale((await params).lang)
  const { meta } = dictionaries[locale]
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(locale),
      languages: {
        en: localePath('en'),
        es: localePath('es'),
        'x-default': localePath(DEFAULT_LOCALE),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      url: localePath(locale),
      siteName: 'Hell Bros',
      type: 'website',
      locale: meta.ogLocale,
      alternateLocale: dictionaries[otherLocale(locale)].meta.ogLocale,
      images: [
        {
          url: '/assets/brand/hellbros-og.png?v=2',
          width: 1200,
          height: 630,
          alt: 'Hell Bros',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.ogDescription,
      images: ['/assets/brand/hellbros-og.png?v=2'],
    },
  }
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hell Bros',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/brand/logo_hb_color02.svg`,
  sameAs: [
    'https://discord.gg/mtfxz4WXS',
    'https://www.instagram.com/hellbrosstudio',
    'https://www.tiktok.com/@hellbrosstudio',
    'https://www.linkedin.com/company/hellbrosstudio/',
    'https://youtube.com/@hellbrosstudio',
    'https://x.com/hellbrosstudio',
    'https://www.reddit.com/user/hellbrosstudio/',
  ],
}

const videoGameJsonLd = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Look Out: Indie Game',
  description: dictionaries[locale].meta.gameDescription,
  url: STEAM_PAGE_LIVE ? STEAM_URL : localeUrl(locale),
  publisher: {
    '@type': 'Organization',
    name: 'Hell Bros',
  },
  numberOfPlayers: {
    '@type': 'QuantitativeValue',
    minValue: 3,
    maxValue: 3,
  },
  genre: 'Platformer',
  playMode: 'CoOp',
})

const Page = async ({ params }: Props) => {
  const locale = toLocale((await params).lang)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd(locale)) }}
      />
      <Header />
      <HomeContent />
      <Footer />
    </>
  )
}

export default Page
