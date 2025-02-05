'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { MotionSection, MotionDiv, MotionButton, MotionSpan, MotionH1, MotionP } from '@/components/shared/MotionWrapper'

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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
      className="relative h-[70vh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Imagen de fondo con efecto parallax */}
      <MotionDiv
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/muay-thai.webp"
          alt="Muay Thai Boran"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
        />
        {/* Degradados y efectos */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-blue-900/5" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </MotionDiv>

      {/* Contenido principal */}
      <MotionDiv
        style={{ y: textY, opacity }}
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
              className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-white via-gray-200 to-white
                         leading-[1.2] pb-4"
            >
              Muay Thai Boran
            </MotionH1>

            <MotionP
              variants={childVariants}
              className="mt-6 text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg"
            >
              De nationale sport van Thailand met meer dan 1000 jaar geschiedenis
            </MotionP>
          </MotionDiv>

          <MotionDiv
            variants={childVariants}
            className="mt-10"
          >
            <Link href="/opleidingen/inschrijven">
              <MotionButton
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
                <MotionSpan
                  animate={{ x: [0, 5, 0] }}
                  transition={{
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
