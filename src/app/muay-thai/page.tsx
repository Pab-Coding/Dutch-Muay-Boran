'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from './components/HeroSection'
import HistorySection from './components/HistorySection'
import CallToAction from './components/CallToAction'

export default function MuayThaiPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  })

  // Simplified scroll effects for better mobile performance
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.95])

  const pageVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={pageRef}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Simplified background effects for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Contenedor principal */}
      <div className="relative z-10">
        <Navigation />

        <main className="relative">
          {/* Hero Section */}
          <motion.div
            variants={sectionVariants}
            style={{ opacity }}
            className="sm:transform-none"
          >
            <HeroSection />
          </motion.div>

          {/* Historia Section */}
          <motion.div
            variants={sectionVariants}
            className="relative z-20 -mt-20"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div 
                className="absolute inset-0 bg-gradient-to-b from-black/50 
                           via-transparent to-transparent pointer-events-none" 
              />
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <HistorySection />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <CallToAction />
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer
          variants={sectionVariants}
          className="relative z-20"
        >
          <Footer />
        </motion.footer>
      </div>

      {/* Simplified decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
    </motion.div>
  )
}
