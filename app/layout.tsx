import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://impactnexus.io'),
  title: 'Impact Nexus — Building Digital Solutions That Matter',
  description:
    'Impact Nexus is a product-driven tech company building scalable digital tools for healthcare, fintech, and commerce.',
  openGraph: {
    title: 'Impact Nexus — Building Digital Solutions That Matter',
    description:
      'Elegant digital solutions for the people who need them most. Impact Nexus builds scalable tools for healthcare, fintech, and commerce.',
    url: 'https://impactnexus.io',
    siteName: 'Impact Nexus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impact Nexus — Building Digital Solutions That Matter',
    description:
      'A product-driven tech company building scalable digital tools for healthcare, fintech, and commerce.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg text-text" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
