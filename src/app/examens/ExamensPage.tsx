'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/layout/Navigation'
import HeroSection from './components/HeroSection'
import ExamensInfo from './components/ExamensInfo'
import KhanSystemTable from './components/KhanSystemTable'
import CallToAction from './components/CallToAction'
import Footer from '@/components/layout/Footer'

export default function ExamensPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

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
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none max-w-[100vw]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent pointer-events-none max-w-[100vw]" />

      {/* Content Container */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navigation />

        <main className="relative">
          <motion.div
            variants={sectionVariants}
            style={{ opacity, scale }}
          >
            <HeroSection />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-20 -mt-16 sm:-mt-20"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none max-w-[100vw]" />
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <ExamensInfo />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <KhanSystemTable />
          </motion.div>

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

      {/* Decorative Elements */}
      <div className="fixed inset-0 bottom-[5%] bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none max-w-[100vw]" />
    </motion.div>
  )
}
