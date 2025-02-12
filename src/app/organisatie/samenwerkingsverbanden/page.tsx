import { Metadata } from 'next'
import SamenwerkingsverbandenPage from './SamenwerkingsverbandenPage'

export const metadata: Metadata = {
  title: 'Samenwerkingsverbanden - DMBF',
  description: 'Ontdek onze internationale samenwerkingsverbanden en partners in de wereld van Muay Boran en Muay Thai.',
}

export default function Page() {
  return <SamenwerkingsverbandenPage />
}
