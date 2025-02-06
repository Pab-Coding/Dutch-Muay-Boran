'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MotionSection, MotionDiv, MotionH1, MotionP } from '@/components/shared/MotionComponents'

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
      className="relative min-h-[100dvh] w-full overflow-hidden"
    >
      {/* Background image with parallax effect */}
      <MotionDiv
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/flyer-amsterdam.webp"
          alt="Dutch Muay Boran Foundation Amsterdam"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
       
        {/* Decorative effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </MotionDiv>

      {/* Main content */}
      <MotionDiv
        style={{ y: textY, opacity }}
        className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
      >
        <div className="w-full max-w-4xl mx-auto">
          <MotionDiv
            variants={childVariants}
            className="space-y-6"
          >
            <MotionDiv
              className="inline-block bg-gradient-to-r from-red-500/20 to-blue-500/20
                         backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2"
            >
              <span className="text-white/90 font-medium text-sm sm:text-base">
                Dutch Muay Boran Foundation
              </span>
            </MotionDiv>

            <div className="space-y-6 sm:space-y-8">
              <MotionH1
                variants={childVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
                           bg-gradient-to-r from-white via-gray-200 to-white
                           leading-[1.2] tracking-normal"
              >
                Organisatie - Ons{' '}
                <span className="block">Erfgoed</span>
              </MotionH1>

              <MotionP
                variants={childVariants}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium
                           leading-relaxed max-w-2xl"
              >
                Ontdek de geschiedenis, visie en missie achter de Dutch Muay Boran Foundation
              </MotionP>
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>

      {/* Decorative elements */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32
                   bg-gradient-to-t from-black/50 to-transparent"
      />
     
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                   w-full sm:w-1/2 h-16 blur-3xl
                   bg-gradient-to-r from-red-600/30 to-blue-600/30"
      />

      {/* Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <MotionDiv
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full
                     flex justify-center items-start p-2"
        >
          <MotionDiv
            animate={{ height: ["20%", "80%", "20%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-white/50 rounded-full"
          />
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  )
}

export default HeroSection
