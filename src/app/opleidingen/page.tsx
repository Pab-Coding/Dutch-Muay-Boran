import type { Metadata } from 'next'
import OpleidingenPage from './OpleidingenPage'

export const metadata: Metadata = {
  title: 'Opleidingen'
}

export default function Page() {
  return <OpleidingenPage />
}
