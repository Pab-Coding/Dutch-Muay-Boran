import type { Metadata } from 'next'
import ExamensPage from './ExamensPage'

export const metadata: Metadata = {
  title: 'Examens'
}

export default function Page() {
  return <ExamensPage />
}
