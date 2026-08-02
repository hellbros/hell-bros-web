import "../_styles/base/globals.css";
import StyledComponentsRegistry from "./registry";
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hellbrosstudio.com'),
  title: 'Hell Bros | Indie Game Studio',
  description:
    'An independent Peruvian game studio focused on online cooperative experiences — makers of Look Out, a 3-player co-op platformer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
