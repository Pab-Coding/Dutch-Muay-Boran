'use client'

import { motion } from 'framer-motion'
import InstantImage from '@/components/shared/InstantImage'
import { INLINE_IMAGES } from '@/constants/inlineImages'
import Link from 'next/link'
import { useRef } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { CalendarIcon } from '@heroicons/react/24/outline'
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
        <InstantImage
          src="/images/Muay-thai-boran.webp"
          alt="Traditional Muay Thai Training Techniques"
          inlineSrc={INLINE_IMAGES.muayThaiBoranInline}
          backgroundSrc={INLINE_IMAGES.muayThaiBoranInlineBg}
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRmQBAABXRUJQVlA4IFgBAABQCACdASpkAGQAPpFAm0eloyIhsAgAsBIJaQAAPGge4BR2wCujkxmMAP7zw3+nRUeHUxgNSNOUjYSx/hLPEu03BRHWFUvHAWnbxQZdTX+3Wa/rHxb0oHlb5h92C2QoO5oOmX2mAd+eYTBPUqAILvJfEUJZA0OMY8G1b/L2kpZ9BBd42AChfXJvs3LL4y65g1FpJxmM7ssCWgR26Z1Rp9UoGhfGhGR9GOdUjBKsYABvJO7q2nZlVPGUC1e6YfXDmRZXpPZgtchm6cORgRl7SXdSNYHbO8N+1eCk7dHXWWaTrm9yfOWEigolXtKa0EpTDxoKwuNLsGp1D3Fb9Z8vYGOokOWfhZlnxEVkgpXYGYnO/Vy/gJp+l1xkuavTbNJXKrdcWavxwqtTVrwAAAAA"
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
                         backdrop-blur-sm rounded-lg px-4 py-2"
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
              Start je reis als Muay Thai instructeur en word deel van een 
              eeuwenoude traditie
            </MotionP>

          </MotionDiv>

          <MotionDiv
            variants={childVariants}
            className="mt-8 sm:mt-12 flex flex-wrap gap-4 w-full px-4 sm:px-0"
          >
            <Link href="/opleidingen/inschrijven">
              <motion.div
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
              </motion.div>
            </Link>

            <Link href="/opleidingen/cursusdata">
              <motion.div
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600/10 to-blue-700/10
                         backdrop-blur-sm border-2 border-white/30 text-white text-center
                         font-semibold rounded-lg hover:bg-white/20
                         transform transition-all duration-300
                         cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-white" />
                  <span>Zie geplande data</span>
                </div>
              </motion.div>
            </Link>
          </MotionDiv>

        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default HeroSection
