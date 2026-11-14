import type { Metadata } from 'next'
import Header from '@/app/_components/header/page'
import Footer from '@/app/_components/footer/page'
import PressKitContent from '../../presskit/_components/PressKitContent'
import { dictionaries } from '@/app/_i18n/dictionaries'
import { DEFAULT_LOCALE, PRESSKIT_PAGE, localePath, otherLocale, toLocale } from '@/app/_i18n/locales'

type Props = {
  params: Promise<{ lang: string }>
}

// Only the generated languages exist; anything else is a 404.
export const dynamicParams = false

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const locale = toLocale((await params).lang)
  const { meta, presskit } = dictionaries[locale]
  return {
    title: presskit.metaTitle,
    description: presskit.metaDescription,
    alternates: {
      canonical: localePath(locale, PRESSKIT_PAGE),
      languages: {
        en: localePath('en', PRESSKIT_PAGE),
        es: localePath('es', PRESSKIT_PAGE),
        'x-default': localePath(DEFAULT_LOCALE, PRESSKIT_PAGE),
      },
    },
    openGraph: {
      title: presskit.metaTitle,
      description: presskit.metaDescription,
      url: localePath(locale, PRESSKIT_PAGE),
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
    <PressKitContent />
    <Footer />
  </>
)

export default Page
