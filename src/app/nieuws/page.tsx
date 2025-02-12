import type { Metadata } from 'next'
import NieuwsPage from './NieuwsPage'

export const metadata: Metadata = {
  title: 'Nieuws'
}

export default function Page() {
  return <NieuwsPage />
}
