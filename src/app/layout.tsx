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
      <head>
        {/* Critical resource preloading for instant display */}
        <link rel="preload" as="image" href="/images/new-team-photo.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/logo.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/boran-optimized.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/muay-thai.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/nieuws.webp" />
        <link rel="preload" as="image" href="/images/examens-muay.webp" />
        {/* DNS prefetch for faster image loading */}
        <link rel="dns-prefetch" href="//dutchmuayboran.nl" />
        <style>{`
          /* Zero-delay loading states */
          .instant-image-container {
            background: linear-gradient(135deg, rgb(220, 38, 38, 0.1) 0%, rgb(37, 99, 235, 0.1) 100%);
            transition: none !important;
          }
          .instant-image-container * {
            transition: opacity 0.2s ease !important;
          }
          /* Prevent flash of unstyled content */
          body { opacity: 1; }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
