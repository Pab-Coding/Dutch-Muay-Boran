'use client'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import ContactSection from './components/sections/ContactSection'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        <Header />
        <Navigation />

        <main className="relative">
          <ContactSection />
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}