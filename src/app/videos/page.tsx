import type { Metadata } from 'next'
import VideosPage from './VideosPage'

export const metadata: Metadata = {
  title: 'Videos'
}

export default function Page() {
  return <VideosPage />
}
