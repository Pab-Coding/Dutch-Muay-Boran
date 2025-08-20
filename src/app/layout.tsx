import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'

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
    <html lang="en" className="h-full">
      <head>
        {/* Keep head minimal to avoid duplicate image fetches; Next/Image handles priority */}
        <style>{`
          /* Zero-delay loading states  */
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
      <body className={`${inter.className} h-full`}> 
        <Navigation />
        {/* Spacer to offset the fixed nav height */}
        <div className="h-16" />
        {children}
      </body>
    </html>
  )
}
