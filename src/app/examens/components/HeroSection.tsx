'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { MotionSection, MotionDiv, MotionButton, MotionSpan, MotionH1, MotionP } from '@/components/shared/MotionComponents'

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
          src="/images/examens-muay.webp"
          alt="Muay Thai Examens"
          fill
          className="object-cover"
          quality={85}
          sizes="(max-width: 768px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRooBAABXRUJQVlA4IH4BAACwCACdASpkAGQAPpE+m0iloyKhMAgAsBIJaQAACvPP/YHW+o5GZkcwAAD+9cF9nrNE4iCHvJbXDTuA1X/9eozJoA75/JdWKfcxK+d7a5Dx/S3R1fIkPi70Rk+rX38/qoKnUiD8rrCJkNkxQPFPtNnzp1f9QEwRzTNg2/2o7kVuKL9gw++kkKOk8Tb+uxu77Vc5FE7zBOBBrEHePwbDSbCNDy+9aDFTDyFyWWuDBTIjK3LwcDIu5Yl1WGd9d9+J1r0sXl0I9D9J5UlXcAXszm8Bi6f9TBnw1+mP6Fw2jV0+XaVEyY7L2EH8aOwcMqhyjJ+GilKS1H8XQZtxeVuUCYtIw3zBx9OD6VYC+xO4I8kqG2EzEOLMU+C3YtCgF6tK5q8nnOWrq37DPj7kfO4ntD2QvJSuKXvGLKyScpIJLzwcWrVJNkAAAA=="
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
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-white via-gray-200 to-white
                         leading-[1.2] pb-4"
            >
              Examens & Khan-systeem
            </MotionH1>

            <MotionP
              variants={childVariants}
              className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg px-4 md:px-0"
            >
              Ontwikkel je vaardigheden en bereik nieuwe niveaus in Muay Thai
            </MotionP>
          </MotionDiv>

          <MotionDiv
            variants={childVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/examens/exameneisen">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-blue-600
                         text-white font-semibold rounded-xl shadow-lg
                         hover:from-red-500 hover:to-blue-500
                         transform transition-all duration-300
                         border border-white/20 backdrop-blur-sm
                         flex items-center space-x-3"
              >
                <span>Bekijk Exameneisen</span>
                <motion.div
                  animate={isMobile ? {} : { x: [0, 5, 0] }}
                  transition={isMobile ? {} : {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.div>
              </MotionButton>
            </Link>
          </MotionDiv>

        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default HeroSection
