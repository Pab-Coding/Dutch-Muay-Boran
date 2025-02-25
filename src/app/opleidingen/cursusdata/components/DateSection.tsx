'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MotionDiv, MotionH1 } from '@/components/shared/MotionComponents'

const DateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  // Simplified mobile detection with safe check
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  // Simple animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <MotionDiv
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="w-full max-w-4xl mx-auto px-4 py-12"
    >
      <MotionDiv
        className="text-center space-y-8"
      >
        {/* Circular image container with simple animation */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            scale: isMobile ? 1 : 1.05,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-full" />
          <Image
            src="/images/dates.webp"
            alt="Cursusdata"
            fill
            sizes="(max-width: 768px) 100vw, 192px"
            className="object-cover rounded-full"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAwAQCdASoIAAUAAUAmJaQAA3AA/v89WAAAAP7/2T5G1NLf/8elPp36k9P/d8JvkH9D/Y32G9gD+AP4A/gD+AP4A/gD+AMAA"
          />
        </MotionDiv>

        {/* Title section with simple fade-in */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <MotionH1 
            className="text-4xl md:text-5xl font-bold leading-relaxed md:leading-relaxed 
                      bg-gradient-to-r from-red-600 via-red-500 via-blue-400 via-blue-500 to-blue-700 
                      bg-clip-text text-transparent 
                      px-4 py-2"
          >
            Cursusdata
          </MotionH1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Bekijk de geplande data voor onze opleidingen
          </p>
        </MotionDiv>

        {/* Decorative line with simple animation */}
        <MotionDiv
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-32 h-1 mx-auto bg-gradient-to-r from-red-500 via-gray-500 to-blue-500 rounded-full"
        />
      </MotionDiv>
    </MotionDiv>
  )
}

export default DateSection
