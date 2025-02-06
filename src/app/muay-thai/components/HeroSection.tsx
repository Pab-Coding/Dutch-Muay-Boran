'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { MotionSection, MotionDiv, MotionButton, MotionSpan, MotionH1, MotionP } from '@/components/shared/MotionComponents'

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Reduced animation complexity for better mobile performance
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.05])
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, 50])

  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 1.05
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
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
      className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full overflow-hidden"
    >
      {/* Background image with optimized loading */}
      <MotionDiv
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/muay-thai.webp"
          alt="Muay Thai Boran"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 100vw"
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Simplified gradients for better performance */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </MotionDiv>

      {/* Main content with improved mobile spacing */}
      <MotionDiv
        style={{ y: textY, opacity }}
        className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="flex flex-col justify-center h-full max-w-4xl">
          <MotionDiv
            variants={childVariants}
            className="space-y-2 sm:space-y-4"
          >
            <MotionDiv
              variants={childVariants}
              className="inline-block bg-gradient-to-r from-red-500/20 to-blue-500/20
                         backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4"
            >
              <span className="text-white/90 font-medium text-sm sm:text-base">
                Dutch Muay Boran Foundation
              </span>
            </MotionDiv>

            <MotionH1
              variants={childVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-white via-gray-200 to-white
                         leading-[1.2] pb-2 sm:pb-4"
            >
              Muay Thai Boran
            </MotionH1>

            <MotionP
              variants={childVariants}
              className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg px-2 sm:px-0"
            >
              De nationale sport van Thailand met meer dan 1000 jaar geschiedenis
            </MotionP>
          </MotionDiv>

          <MotionDiv
            variants={childVariants}
            className="mt-8 sm:mt-10"
          >
            <Link href="/opleidingen/inschrijven">
              <MotionButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-blue-600
                           text-white font-semibold rounded-xl shadow-lg
                           hover:from-red-500 hover:to-blue-500
                           transform transition-all duration-200
                           border border-white/20 backdrop-blur-sm
                           flex items-center justify-center sm:justify-start space-x-3"
              >
                <span>Inschrijven</span>
                <MotionSpan
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
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
                </MotionSpan>
              </MotionButton>
            </Link>
          </MotionDiv>
        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default HeroSection
