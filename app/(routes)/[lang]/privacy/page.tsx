import type { Metadata } from 'next'
import Header from '@/app/_components/header/page'
import Footer from '@/app/_components/footer/page'
import PrivacyContent from '../../privacy/_components/PrivacyContent'
import { dictionaries } from '@/app/_i18n/dictionaries'
import { DEFAULT_LOCALE, PRIVACY_PAGE, localePath, otherLocale, toLocale } from '@/app/_i18n/locales'

type Props = {
  params: Promise<{ lang: string }>
}

// Only the generated languages exist; anything else is a 404.
export const dynamicParams = false

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const locale = toLocale((await params).lang)
  const { meta, privacy } = dictionaries[locale]
  return {
    title: privacy.metaTitle,
    description: privacy.metaDescription,
    alternates: {
      canonical: localePath(locale, PRIVACY_PAGE),
      languages: {
        en: localePath('en', PRIVACY_PAGE),
        es: localePath('es', PRIVACY_PAGE),
        'x-default': localePath(DEFAULT_LOCALE, PRIVACY_PAGE),
      },
    },
    openGraph: {
      title: privacy.metaTitle,
      description: privacy.metaDescription,
      url: localePath(locale, PRIVACY_PAGE),
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
  }
}

const Page = () => (
  <>
    <Header />
    <PrivacyContent />
    <Footer />
  </>
)

export default Page
