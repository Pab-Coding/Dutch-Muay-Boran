'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

import HeroSection from './components/HeroSection'
import HistorySection from './components/HistorySection'
import ActivitiesSection from './components/ActivitiesSection'
import CallToAction from './components/CallToAction'

export default function OrganisatiePage() {
  const pageRef = useRef<HTMLDivElement>(null)

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
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        <Header />
        <Navigation />

        <main className="relative">
          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <HeroSection />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <HistorySection />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <ActivitiesSection />
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
      <div className="fixed inset-0 bottom-[5%] bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />
    </motion.div>
  )
}