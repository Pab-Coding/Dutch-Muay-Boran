'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import ModulesSection from './components/ModulesSection'
import Footer from '@/components/layout/Footer'

export default function AssistentLeraarPage() {
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
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background Effects - Ajustados para evitar la barra blanca */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        <Header />
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
            className="relative z-20 -mt-20"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <InfoSection />
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            className="relative z-10"
          >
            <ModulesSection />
          </motion.div>
        </main>

        {/* Footer sin efectos decorativos superpuestos */}
        <motion.footer
          variants={sectionVariants}
          className="relative z-20"
        >
          <Footer />
        </motion.footer>
      </div>

      {/* Decorative Elements - Ajustados para no afectar al footer */}
      <div className="fixed inset-0 bottom-[5%] bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />
    </motion.div>
  )
}