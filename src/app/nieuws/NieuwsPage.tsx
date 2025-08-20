'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Footer from '@/components/layout/Footer'
import HeroSection from './components/HeroSection'
import NewsGrid from './components/NewsGrid'
import ContactButton from '@/components/shared/ContactButton'

const newsData = [
  {
    id: 2,
    title: 'Toekomstige Nederlandse Kampioenschappen Muay Thai',
    date: new Date().toISOString().split('T')[0],
    image: '/images/muay-thai.webp',
    excerpt: 'De Dutch Muay Boran Foundation (DMBF) werkt aan de organisatie van nieuwe Nederlandse Kampioenschappen Muay Thai. Samen met onze partners bereiden we toekomstige evenementen voor die het authentieke Muay Thai zullen promoten. Blijf op de hoogte van aankomende kampioenschappen en evenementen! Voor meer informatie over toekomstige evenementen, neem contact met ons op.',
    slug: 'contact',
    category: 'Aankondiging'
  }
]

const archivedNews = [
  {
    id: 1,
    title: 'Nederlandse Kampioenschappen Muay Thai 2025',
    date: '2025-03-15',
    image: '/images/nk-muaythai-2025.webp',
    excerpt: 'De Dutch Muay Boran Foundation (DMBF) organiseerde op 15 en 16 maart 2025 de Nederlandse Kampioenschappen Muay Thai. In samenwerking met de WFCA werd dit prestigieuze evenement gehouden dat zich richtte op het authentieke Muay Thai.',
    slug: 'archived-nk-2025',
    category: 'Evenementen'
  }
]

export default function NieuwsPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98])

  const pageVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
      <div 
        className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none" 
      />
      <div 
        className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent pointer-events-none" 
      />

      {/* Content Container */}
      <div className="relative z-10">

        <main className="relative">
          <motion.div
            variants={sectionVariants}
            style={{ opacity, scale }}
            className="relative z-10"
          >
            <HeroSection />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-20"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div 
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" 
              />
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <NewsGrid news={newsData} />
            
            {/* Archived News Section */}
            <div className="max-w-7xl mx-auto px-4 pb-12 mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Archief - Oude Nieuwsberichten
              </h2>
              <NewsGrid news={archivedNews} />
            </div>
          </motion.div>
        </main>

        {/* Contact Button */}
        <motion.div
          variants={sectionVariants}
          className="relative z-30"
        >
          <ContactButton />
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={sectionVariants}
          className="relative z-20"
        >
          <Footer />
        </motion.footer>
      </div>

      {/* Bottom Decorative Gradient */}
      <div 
        className="fixed inset-0 bottom-[5%] bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" 
      />

      {/* Additional Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5" />
      </motion.div>
    </motion.div>
  )
}
