import type { Metadata } from 'next'
import HomeContent from './_components/HomeContent'

export const metadata: Metadata = {
  title: 'Hell Bros | Indie Game Studio',
  description:
    'Hell Bros is an independent Peruvian game studio making Look Out, an asymmetrical online co-op 3D platformer for 3 players. Wishlist it on Steam and join our Discord.',
  alternates: {
    canonical: '/home',
  },
  openGraph: {
    title: 'Hell Bros | Indie Game Studio',
    description:
      'Hell Bros is an independent Peruvian game studio making Look Out, an asymmetrical online co-op 3D platformer for 3 players.',
    url: '/home',
    siteName: 'Hell Bros',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Hell Bros | Indie Game Studio',
    description:
      'Hell Bros is an independent Peruvian game studio making Look Out, an asymmetrical online co-op 3D platformer for 3 players.',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hell Bros',
  url: 'https://hellbrosstudio.com',
  logo: 'https://hellbrosstudio.com/assets/brand/logo_hb_color02.svg',
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
  name: 'Look Out',
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
    <HomeContent />
  </>
)

export default Page
