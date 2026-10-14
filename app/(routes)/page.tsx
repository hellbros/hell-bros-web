import type { Metadata } from 'next'
import Header from '@/app/_components/header/page'
import Footer from '@/app/_components/footer/page'
import { LayoutSection } from './home/styles'
import HomeContent from './home/_components/HomeContent'
import { dictionaries } from '@/app/_i18n/dictionaries'
import { getLocale } from '@/app/_i18n/getLocale'

export const generateMetadata = (): Metadata => {
  const { meta } = dictionaries[getLocale()]
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      url: '/',
      siteName: 'Hell Bros',
      type: 'website',
      locale: meta.ogLocale,
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
  url: 'https://www.hellbrosstudio.com',
  logo: 'https://www.hellbrosstudio.com/assets/brand/logo_hb_color02.svg',
  sameAs: [
    'https://discord.gg/5yXsbXfKM',
    'https://www.instagram.com/hellbrosstudio',
    'https://www.tiktok.com/@hellbrosstudio',
    'https://www.linkedin.com/company/hellbrosstudio/',
    'https://youtube.com/@hellbrosstudio',
    'https://x.com/hellbrosstudio',
    'https://www.reddit.com/user/hellbrosstudio/',
  ],
}

const videoGameJsonLd = (description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Look Out: Indie Game',
  description,
  url: 'https://store.steampowered.com/app/4605750/',
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

const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd(dictionaries[getLocale()].meta.gameDescription)) }}
    />
    <LayoutSection>
      <Header />
      <HomeContent />
      <Footer />
    </LayoutSection>
  </>
)

export default Page
