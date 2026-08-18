import type { Metadata } from 'next'
import Header from '@/app/_components/header/page'
import Footer from '@/app/_components/footer/page'
import { LayoutSection } from './home/styles'
import HomeContent from './home/_components/HomeContent'

export const metadata: Metadata = {
  title: 'Hell Bros | Indie Game Studio',
  description:
    'Hell Bros is an independent Peruvian game studio making Look Out: Indie Game, an asymmetrical online co-op 3D platformer for 3 players. Wishlist it on Steam and join our Discord.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hell Bros | Indie Game Studio',
    description:
      'Hell Bros is an independent Peruvian game studio making Look Out: Indie Game, an asymmetrical online co-op 3D platformer for 3 players.',
    url: '/',
    siteName: 'Hell Bros',
    type: 'website',
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
    title: 'Hell Bros | Indie Game Studio',
    description:
      'Hell Bros is an independent Peruvian game studio making Look Out: Indie Game, an asymmetrical online co-op 3D platformer for 3 players.',
    images: ['/assets/brand/hellbros-og.png?v=2'],
  },
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

const videoGameJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Look Out: Indie Game',
  description:
    'An asymmetrical online co-op 3D platformer where 3 demons are trying to escape the Demon World. Unable to see their own path, each player depends on another to move forward, forcing them to coordinate constantly.',
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
}

const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }}
    />
    <LayoutSection>
      <Header />
      <HomeContent />
      <Footer />
    </LayoutSection>
  </>
)

export default Page
