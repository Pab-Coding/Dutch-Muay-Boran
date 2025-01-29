'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import VideoGrid from './components/VideoGrid'

export default function VideosPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -20
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

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  }

  const sectionTitleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={pageRef}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <Header />
      <Navigation />

      <main className="relative max-w-7xl mx-auto px-4">
        {/* Título y descripción */}
        <div className="text-center pt-12 pb-16">
          <motion.div
            variants={titleVariants}
            className="mb-6"
          >
            <h1 className="text-6xl font-bold tracking-tight relative">
              <span className="bg-gradient-to-r from-red-600 via-red-500 
                             to-blue-600 bg-clip-text text-transparent 
                             drop-shadow-sm">
                Videos
              </span>
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 
                             to-blue-500/10 blur-2xl -z-10 opacity-50" />
            </h1>
          </motion.div>
          <motion.p
            variants={descriptionVariants}
            className="text-gray-600 text-lg max-w-3xl mx-auto 
                     leading-relaxed"
          >
            Ontdek onze collectie van Muay Thai en Muay Boran videos, 
            van historische gevechten tot technische demonstraties
          </motion.p>
        </div>

        {/* Sección de Videotheek */}
        <div className="pb-16">
          <motion.div
            variants={sectionTitleVariants}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-center relative">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 
                             to-red-600 bg-clip-text text-transparent 
                             drop-shadow-sm">
                Videotheek
              </span>
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
                             to-red-500/10 blur-2xl -z-10 opacity-50" />
            </h2>
          </motion.div>
          <VideoGrid />
        </div>
      </main>

      <Footer />

      {/* Efectos decorativos globales */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 
                       via-transparent to-blue-500/5" />
      </div>
    </motion.div>
  )
}