// src/app/organisatie/sportscholen/page.tsx
'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import PageWrapper from './components/PageWrapper'
import LogoSection from './components/LogoSection'
import SchoolsList from './components/SchoolsList'

export default function SportscholenPage() {
  return (
    <PageWrapper>
      <Header />
      <Navigation />

      <main className="flex-grow">
        {/* Background subtle patterns */}
        <div className="absolute inset-0 bg-grid-gray-100/20 bg-repeat pointer-events-none" />
        
        {/* Content container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Main content */}
          <div className="container mx-auto px-4">
            <LogoSection />
            
            {/* Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </motion.div>

            {/* Schools list with fade-in animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <SchoolsList />
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent" />
          </div>
        </motion.div>
      </main>

      <Footer />
    </PageWrapper>
  )
}