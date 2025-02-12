import type { Metadata } from 'next'
import OrganisatiePage from './OrganisatiePage'

export const metadata: Metadata = {
  title: 'Organisatie - DMBF',
  description: 'Leer meer over de Dutch Muay Boran Foundation, onze geschiedenis, activiteiten en doelstellingen.',
  openGraph: {
    title: 'Organisatie - DMBF',
    description: 'Leer meer over de Dutch Muay Boran Foundation, onze geschiedenis, activiteiten en doelstellingen.',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'Dutch Muay Boran Foundation Logo'
      }
    ]
  }
}

export default function Page() {
  return <OrganisatiePage />
}
