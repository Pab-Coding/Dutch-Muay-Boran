'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import PageWrapper from './components/PageWrapper'
import DateSection from './components/DateSection'
import CoursesList from './components/CoursesList'

export default function CursusDataPage() {
  return (
    <PageWrapper>
      <Navigation />

      <main className="flex-grow">
        {/* Content container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Main content */}
          <div className="container mx-auto px-4">
            <DateSection />
            
            {/* Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </motion.div>

            {/* Course list with fade-in animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <CoursesList />
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </PageWrapper>
  )
}
