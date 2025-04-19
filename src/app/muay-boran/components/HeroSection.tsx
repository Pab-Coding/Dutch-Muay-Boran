'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MotionSection, MotionDiv, MotionH1, MotionP } from '@/components/shared/MotionComponents'

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

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
      <MotionDiv
        className="absolute inset-0"
      >
        <Image
          src="/images/boran-optimized.webp"
          alt="Muay Boran"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
          priority={true}
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRnQBAABXRUJQVlA4IGgBAACQBgCdASpkAGQAPpE+m0elo6KhMAgAsBIJaQAACRgAAjUxQJAD55QAAAAD6UAA5mLR0tXYe0jN7JA8QlXSZmvtLfdoQk8RsELOw9Pqix8WA0eVXIQvIj8EFqCNDvLZZLSaAAD+88eElnY/i1jWY1TxhYlhLTsI0NJlRNZbSFKM6/rhJDlW66yhUFx53cB5pqy3DdwGKB/KUdxOoBjGT5iiDAGbOPnE1xobyWQJGTVe3MgKy7IFNP3qbvJNPuB+jQgFR7dYxA7MxHs18DHCpVwVQ7XTzKnIEUZUNFmOLuZUxkjHg2LPuR9G86Nq5kx8eYHbOyEQeKU6KlC6LMCvOt/fv8Jdybn+hLKQfCrLvPLnl7T6O6cL5YAYGK4nVOE+v1KaP2EEGidOY7zFYtE5hDBRUn5o8czXP4X+S/Y2CfSvOVs+57CouQAAAA=="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-blue-900/5" />
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

          <MotionDiv
            variants={childVariants}
            className="mt-10"
          >
            <Link href="/opleidingen/inschrijven">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600
                           text-white font-semibold rounded-xl shadow-lg
                           hover:from-red-500 hover:to-blue-500
                           transform transition-all duration-300
                           border border-white/20 backdrop-blur-sm
                           flex items-center space-x-3"
              >
                <span>Inschrijven</span>
                <motion.div
                animate={isMobile ? {} : { x: [0, 5, 0] }}
                transition={isMobile ? {} : {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                >
                  <svg 
                    className="w-5 h-5" 
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
                </motion.div>
              </motion.button>
            </Link>
          </MotionDiv>
        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default HeroSection
