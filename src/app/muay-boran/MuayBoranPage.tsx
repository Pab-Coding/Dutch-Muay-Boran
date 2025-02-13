'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from './components/HeroSection'

// Lazy load below-fold components
const HistorySection = lazy(() => import('./components/HistorySection'))
const CallToAction = lazy(() => import('./components/CallToAction'))

// Loading fallbacks
const LoadingSection = () => (
  <div className="w-full h-96 bg-gray-50 animate-pulse" />
)

export default function MuayBoranPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  })

  // Simplified animations with reduced range
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.99])

  // Simplified animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
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
      {/* Simplified background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 pointer-events-none" />

      {/* Contenedor principal */}
      <div className="relative z-10">
        <Navigation />

        <main className="relative">
          {/* Hero Section */}
          <motion.div
            variants={sectionVariants}
            style={{ opacity, scale }}
          >
            <HeroSection />
          </motion.div>

          {/* Separador con gradiente */}
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

          {/* Lazy loaded sections */}
          <Suspense fallback={<LoadingSection />}>
            <motion.div
              variants={sectionVariants}
              className="relative z-10"
            >
              <HistorySection />
            </motion.div>
          </Suspense>

          <Suspense fallback={<LoadingSection />}>
            <motion.div
              variants={sectionVariants}
              className="relative z-10"
            >
              <CallToAction />
            </motion.div>
          </Suspense>
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
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>
    </motion.div>
  )
}
