'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { MotionSection, MotionDiv, MotionH1, MotionP } from '@/components/shared/MotionWrapper'

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
      className="relative h-[80vh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <MotionDiv 
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/aanglesloten-sportschole.webp"
          alt="Aangesloten Sportschole"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Decorative Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
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
                         leading-tight drop-shadow-lg"
            >
              Aangesloten Sportschole
            </MotionH1>

            <MotionP
              variants={childVariants}
              className="mt-6 text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg"
            >
              Word lid van onze aangesloten sportscholen en train onder de beste instructeurs in Muay Thai Boran
            </MotionP>
          </MotionDiv>

          <MotionDiv
            variants={childVariants}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link href="/opleidingen/inschrijven">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 
                         text-white font-semibold rounded-lg shadow-lg
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600/10 to-blue-700/10
                         backdrop-blur-sm border-2 border-white/30 text-white 
                         font-semibold rounded-lg hover:bg-white/20
                         transform transition-all duration-300
                         cursor-pointer"
              >
                Meer over examens
              </MotionDiv>
            </Link>
          </MotionDiv>

          {/* Decorative Elements */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-0 left-0 w-full h-32 
                       bg-gradient-to-t from-black/50 to-transparent"
          />
          
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                       w-1/2 h-16 blur-3xl
                       bg-gradient-to-r from-red-600/30 to-blue-600/30"
          />
        </div>
      </MotionDiv>

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
          className="w-6 h-10 border-2 border-white/30 rounded-full
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
