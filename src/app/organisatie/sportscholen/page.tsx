import { Metadata } from 'next'
import SportscholenPage from './SportscholenPage'

export const metadata: Metadata = {
  title: 'Sportscholen - DMBF',
  description: 'Ontdek de aangesloten sportscholen van Dutch Muay Boran Federation. Vind een sportschool bij jou in de buurt.',
}

export default function Page() {
  return <SportscholenPage />
}
