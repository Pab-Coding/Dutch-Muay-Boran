import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dutchmuayboran.nl'),
  title: {
    default: 'Dutch Muay Boran Foundation',
    template: '%s - DMBF'
  },
  description: 'Official website of the Dutch Muay Boran Foundation',
  icons: {
    icon: [
      {
        url: '/images/logo.webp',
        sizes: '32x32',
      },
      {
        url: '/images/logo.webp',
        sizes: '16x16',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
