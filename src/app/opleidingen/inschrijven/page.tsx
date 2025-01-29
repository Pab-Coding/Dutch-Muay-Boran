'use client'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import InschrijvenForm from '@/components/forms/InschrijvenForm'

export default function InschrijvenPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-red-50 via-gray-50 to-blue-50 flex flex-col"
    >
      <Header />
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <InschrijvenForm />
      </main>

      <Footer />
    </motion.div>
  )
}