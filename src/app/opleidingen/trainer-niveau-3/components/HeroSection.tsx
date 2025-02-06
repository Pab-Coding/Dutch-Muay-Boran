'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { MotionSection, MotionDiv, MotionH1, MotionP } from '@/components/shared/MotionComponents'

const HeroSection = () => {
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
className="relative h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[600px] w-full overflow-hidden"
    >
      <MotionDiv 
        className="absolute inset-0 transform transition-transform duration-700 ease-out will-change-transform"
      >
        <Image
          src="/images/Muay-thai-boran.webp"
          alt="Traditional Muay Thai Boran Training Techniques"
          fill
          sizes="100vw"
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
        <div className="flex flex-col justify-center h-full max-w-4xl">
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
                         leading-[1.2] pb-4 max-w-full break-words"
            >
              Trainer / Coach niveau 3
            </MotionH1>

            <MotionP
              variants={childVariants}
              className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg px-4 md:px-0"
            >
              Start je reis als Muay Thai Boran instructeur en word deel van een 
              eeuwenoude traditie
            </MotionP>

            <Link href="/opleidingen/cursusdata">
              <MotionDiv
                variants={childVariants}
                whileHover={{ scale: isMobile ? 1 : 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2
                         bg-gradient-to-r from-red-500/20 to-blue-500/20
                         hover:from-red-600/20 hover:to-blue-600/20
                         backdrop-blur-sm rounded-lg border border-white/20
                         cursor-pointer transition-all duration-300"
              >
                <CalendarIcon className="w-5 h-5 text-white" />
                <span className="text-white/90 font-medium">
                  Zie geplande data
                </span>
              </MotionDiv>
            </Link>
          </MotionDiv>

          <MotionDiv
            variants={childVariants}
            className="mt-8 sm:mt-12 flex flex-wrap gap-4 w-full px-2 sm:px-0"
          >
            <Link href="/opleidingen/inschrijven">
              <MotionDiv
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 
                         text-white font-semibold rounded-lg shadow-lg text-center
                         hover:from-red-500 hover:to-red-600 
                         transform transition-all duration-300
                         border border-red-400/20 backdrop-blur-sm
                         cursor-pointer"
              >
                Schrijf je nu in
              </MotionDiv>
            </Link>

            <Link href="/examens">
              <MotionDiv
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600/10 to-blue-700/10
                         backdrop-blur-sm border-2 border-white/30 text-white text-center
                         font-semibold rounded-lg hover:bg-white/20
                         transform transition-all duration-300
                         cursor-pointer"
              >
                Meer over examens
              </MotionDiv>
            </Link>
          </MotionDiv>

        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default HeroSection
