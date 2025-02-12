import { Metadata } from 'next'
import VisieMissiePage from './VisieMissiePage'

export const metadata: Metadata = {
  title: 'Visie & Missie - DMBF',
  description: 'Ontdek de visie en missie van Dutch Muay Boran Federation. Lees meer over onze doelen, waarden en toekomstplannen.',
}

export default function Page() {
  return <VisieMissiePage />
}
