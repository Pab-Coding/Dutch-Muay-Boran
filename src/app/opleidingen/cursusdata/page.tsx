import type { Metadata } from 'next'
import CursusDataPage from './CursusDataPage'

export const metadata: Metadata = {
  title: 'Cursusdata'
}

export default function Page() {
  return <CursusDataPage />
}
