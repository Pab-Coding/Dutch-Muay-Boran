'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import PageWrapper from './components/PageWrapper'
import DateSection from './components/DateSection'
import CoursesList from './components/CoursesList'
import CallToAction from './components/CallToAction'

export default function CursusDataPage() {
  // Simple fade-in animation for the entire page
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  // Simple animation for the separator
  const separatorVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { 
        duration: 0.5,
        delay: 0.3
      }
    }
  }

  return (
    <PageWrapper>
      <Navigation />

      <main className="flex-grow">
        {/* Content container with simple fade-in animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10"
        >
          {/* Main content */}
          <div className="container mx-auto px-4">
            {/* DateSection */}
            <DateSection />
            
            {/* Separator with simple animation */}
            <motion.div
              variants={separatorVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </motion.div>

            {/* Course list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <CoursesList />
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <CallToAction />
      </main>

      <Footer />
    </PageWrapper>
  )
}
