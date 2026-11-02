import "@/app/_styles/base/globals.css";
import StyledComponentsRegistry from "./registry";
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { LOCALES, toLocale } from '@/app/_i18n/locales'
import { LocaleProvider } from '@/app/_i18n/LocaleProvider'
import { SITE_URL } from '@/app/_utils/constants'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Hell Bros | Indie Game Studio',
  description:
    'An independent Peruvian game studio focused on online cooperative experiences — makers of Look Out: Indie Game, a 3-player co-op platformer.',
}

export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }))

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const locale = toLocale((await params).lang)
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <LocaleProvider locale={locale}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </LocaleProvider>
      </body>
    </html>
  )
}
