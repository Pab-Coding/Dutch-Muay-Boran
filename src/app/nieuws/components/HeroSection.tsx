'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MotionSection, MotionDiv, MotionH1, MotionP } from '@/components/shared/MotionWrapper'

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Ajustamos los valores de transformación para que sean más suaves
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.02])
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, 30])

  const heroVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8, // Aumentamos la duración
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 10, // Reducimos el valor inicial de y
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

  return (
    <MotionSection
      ref={sectionRef}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="relative h-[60vh] min-h-[500px] w-full overflow-hidden"
    >
      <MotionDiv
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image sizes="(max-width: 768px) 100vw, 50vw"
          src="/images/nieuws.webp"
          alt="Nieuws - Dutch Muay Boran Foundation"
          fill sizes="100vw"
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
        
        {/* Subtle decorative effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-blue-900/5" />
      </MotionDiv>

      {/* Main Content */}
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
              className="inline-block bg-gradient-to-r from-red-500/10 to-blue-500/10
                         backdrop-blur-[2px] rounded-lg px-4 py-2 mb-4"
            >
              <span className="text-white/90 font-medium">
                Dutch Muay Boran Foundation
              </span>
            </MotionDiv>

            <MotionH1
              variants={childVariants}
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-white via-gray-200 to-white
                         leading-tight"
            >
              Laatste Nieuws
            </MotionH1>

            <MotionP
              variants={childVariants}
              className="mt-6 text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl"
            >
              Blijf op de hoogte van onze laatste ontwikkelingen, evenementen en updates
            </MotionP>
          </MotionDiv>

          {/* Decorative bottom gradient - Más sutil */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-0 left-0 w-full h-32
                       bg-gradient-to-t from-black/20 to-transparent"
          />
        </div>
      </MotionDiv>

      {/* Subtle scroll indicator */}
      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <MotionDiv
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full
                     flex justify-center items-start p-2"
        >
          <MotionDiv
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 bg-white/30 rounded-full"
          />
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  )
}

export default HeroSection
