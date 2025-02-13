'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState, memo } from 'react'
import { MotionSection, MotionDiv, MotionH1, MotionP } from '@/components/shared/MotionComponents'

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Simplified animation variants
  const heroVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <MotionSection
      ref={sectionRef}
      initial="initial"
      animate="animate"
      variants={heroVariants}
      className="relative h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[600px] w-full overflow-hidden"
    >
      <MotionDiv className="absolute inset-0">
        <Image
          src="/images/boran-optimized.webp"
          alt="Muay Boran"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          className="object-cover"
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAwAQCdASoIAAUAAUAmJaQAA3AA/v89WAAAAP7/2T5G1NLf/8elPp36k9P/d8JvkH9D/Y32G9gD+AP4A/gD+AP4A/gD+AMAA"
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
                         leading-[1.2] pb-2 md:pb-4"
              >
                Muay Boran
              </MotionH1>

            <MotionP
              variants={childVariants}
              className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg px-4 md:px-0"
            >
              De traditionele gevechtskunst van Thailand - De oorsprong van het moderne Muay Thai
            </MotionP>
          </MotionDiv>

          <MotionDiv variants={childVariants} className="mt-10">
            <Link href="/opleidingen/inschrijven">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600
                           text-white font-semibold rounded-xl shadow-lg
                           hover:from-red-500 hover:to-blue-500
                           transform transition-all duration-200
                           border border-white/20 backdrop-blur-sm
                           flex items-center space-x-3"
              >
                <span>Inschrijven</span>
                <svg 
                  className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </motion.button>
            </Link>
          </MotionDiv>
        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default memo(HeroSection, () => true)
