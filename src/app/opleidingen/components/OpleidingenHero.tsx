'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MotionSection, MotionDiv, MotionH1, MotionP } from '@/components/shared/MotionComponents'

const OpleidingenHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  // Simplified animations for mobile
  const heroVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: isMobile ? 0.1 : 0.2
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <MotionSection
      ref={sectionRef}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="relative h-[60vh] min-h-[400px] md:h-[70vh] md:min-h-[600px] w-full overflow-hidden"
    >
      <MotionDiv
        className="absolute inset-0 transform transition-transform duration-700 ease-out will-change-transform"
      >
        <Image
          src="/images/opleidingen.webp"
          alt="Opleidingen Muay Thai"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-blue-900/5" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </MotionDiv>

      <MotionDiv
        className="relative z-10 h-full max-w-7xl mx-auto px-4"
      >
        <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
          <MotionDiv
            variants={childVariants}
            className="space-y-2"
          >
            <MotionDiv
              variants={childVariants}
              className="inline-block bg-gradient-to-r from-red-500/20 to-blue-500/20
                         backdrop-blur-sm rounded-lg px-4 py-2 mb-4"
            >
              <span className="text-white/90 font-medium">
                Dutch Muay Boran Foundation
              </span>
            </MotionDiv>

            <MotionH1
              variants={childVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-white via-gray-200 to-white
                         leading-[1.2] pb-2 md:pb-4"
            >
              Opleidingen
            </MotionH1>

            <MotionP
              variants={childVariants}
              className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg px-4 md:px-0"
            >
              Ontwikkel je vaardigheden en start je professionele carrière
              in de authentieke kunst van Muay Thai Boran en Muay Boran
            </MotionP>
          </MotionDiv>
        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default OpleidingenHero
