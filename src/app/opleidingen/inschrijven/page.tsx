import { Metadata } from 'next'
import InschrijvenPage from './InschrijvenPage'

export const metadata: Metadata = {
  title: 'Inschrijven - DMBF',
  description: 'Schrijf je in voor een opleiding bij Dutch Muay Boran Federation. Start je reis in Muay Boran en Muay Thai.',
}

export default function Page() {
  return <InschrijvenPage />
}
