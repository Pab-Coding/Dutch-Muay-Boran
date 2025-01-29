'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ImageSection from './components/ImageSection'
import CollaborationInfo from './components/CollaborationInfo'
import PartnersGrid from './components/PartnersGrid'
import { useRef } from 'react'
import { TextConfig } from '@/types'

// Configuración del texto para ImageSection
const imageTextConfig: TextConfig = {
  mainTitle: "Samenwerkingsverbanden",
  heroTitle: {
    line1: "Internationale",
    line2: "Samenwerkingsverbanden"
  },
  description: "Marco de Cesaris en Dale Tan op de WMF wereldkampioenschappen in Thailand",
  textPosition: {
    maxWidth: "70%",
    leftOffset: "8%", // Ajusta este valor para mover el texto más a la izquierda
    bottomOffset: "12%"
  }
}

export default function SamenwerkingsPage() {
  const mainRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  })

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])

  // Page transition variants
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen flex flex-col bg-white"
    >
      <Header />
      <Navigation />

      <motion.main 
        ref={mainRef}
        className="flex-grow relative"
      >
        {/* Background patterns */}
        <motion.div
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            transition: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className="fixed inset-0 pointer-events-none"
          style={{
            y: backgroundY,
            opacity: backgroundOpacity
          }}
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-gray-100/10 bg-repeat" />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
          
          {/* Dynamic light effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Content container */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="relative z-10"
        >
          <div className="container mx-auto px-4">
            {/* Content sections */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              className="space-y-12 py-8"
            >
              <ImageSection 
                textConfig={imageTextConfig}
              />
              
              {/* Separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="max-w-4xl mx-auto"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </motion.div>

              <CollaborationInfo />
              <PartnersGrid />
            </motion.div>
          </div>
        </motion.div>
      </motion.main>

      <Footer />
    </motion.div>
  )
}