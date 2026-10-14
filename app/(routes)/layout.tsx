import "../_styles/base/globals.css";
import StyledComponentsRegistry from "./registry";
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { getLocale } from '../_i18n/getLocale'
import { LocaleProvider } from '../_i18n/LocaleProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hellbrosstudio.com'),
  title: 'Hell Bros | Indie Game Studio',
  description:
    'An independent Peruvian game studio focused on online cooperative experiences — makers of Look Out: Indie Game, a 3-player co-op platformer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = getLocale()
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
