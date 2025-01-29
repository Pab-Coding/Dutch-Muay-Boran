'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import VisionSection from './components/VisionSection'
import MissionSection from './components/MissionSection'
import ValuesList from './components/ValuesList'
import GoalsSection from './components/GoalsSection'

export default function VisieMissiePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <motion.div
      ref={pageRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Efectos de fondo decorativos */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-10">
        <Header />
        <Navigation />

        <main className="relative max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Título principal */}
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent"
              >
                Visie / Missie
              </motion.h1>
            </div>

            <VisionSection />
            <MissionSection />
            <ValuesList />
            <GoalsSection />
          </motion.div>
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}