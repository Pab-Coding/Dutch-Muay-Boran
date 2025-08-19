'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MotionSection, MotionDiv, MotionH1, MotionP } from '@/components/shared/MotionComponents'

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  // Optimized animation variants
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
          src="/images/flyer-amsterdam.webp"
          alt="Dutch Muay Boran Foundation Amsterdam"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRpQBAABXRUJQVlA4IIgBAABQCgCdASpkAGQAPpE+mEiloyKhqAgAsBIJaQAACtK/OJ9htpGpAAD++Gb6VVnXPTJppvGkgPIpJu4vPiD4GQAZm1KLu3j5Vc2EFY4PD6I/B3dV7UBeCLF5Pqw1qP1HwSv9Vl/BDtOjY1o5t9hOYE1rZUWmO3uQc7Vd1FBQmLSzAAD+8cRGi25sGLhMvbQYJBXi7aGhg7RsFBhZL2UdYO3u1UWyXJAgbG8EZcxpvSEtGbgTrzHYRD3YoTKi0WVcIq0O/UcVEMVgIrLAm2vOYGEwCIE2fqEk4NnB8vDtmWHq1CXf6ZbPb+eVs+JL+jUxvWBmLALVk9HH6HExYZSFBs7Y7H4XqYasMxSyVK6FhVw1bcjlXkqMv7FYw2uGvFYXmTL97pUvTkbRXPLCJpCp0rfN4lHZLr/10U83ZUO0B5oS4wpYw/jtm1FPvQBjCbYgQxOETuB8lFkLTKXyAAAA"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
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
              className="inline-block bg-gradient-to-r from-red-500/20 to-blue-500/20
                         backdrop-blur-sm rounded-lg px-4 py-2 mb-4"
            >
              <span className="text-white font-medium">
                Dutch Muay Boran Foundation
              </span>
            </MotionDiv>

            <MotionH1
              variants={childVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-b from-white to-blue-400
                         leading-[1.2] pb-2 md:pb-4"
            >
              Organisatie
            </MotionH1>
          </MotionDiv>
        </div>
      </MotionDiv>

    </MotionSection>
  )
}

export default HeroSection
