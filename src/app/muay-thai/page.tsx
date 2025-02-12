import type { Metadata } from 'next'
import MuayThaiPage from './MuayThaiPage'

export const metadata: Metadata = {
  title: 'Muay Thai'
}

export default function Page() {
  return <MuayThaiPage />
}
