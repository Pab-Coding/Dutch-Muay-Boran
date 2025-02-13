'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MotionDiv, MotionH1 } from '@/components/shared/MotionComponents'

const DateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Only use scale animation on non-touch devices
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  
  // Check if we're in a browser environment and if hover is available
  const isHoverDevice = typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : false

  return (
    <MotionDiv
      ref={sectionRef}
      style={{ opacity }}
      className="w-full max-w-4xl mx-auto px-4 py-12"
      transition={{ duration: 0.3 }}
    >
      <MotionDiv
        initial={{ opacity: 0, y: '1rem' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center space-y-8"
      >
        {/* Circular image container */}
        <MotionDiv
          whileHover={isHoverDevice ? { scale: 1.05 } : undefined}
          transition={{ duration: 0.3 }}
          className="relative w-48 h-48 mx-auto rounded-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-full" />
          <Image
            src="/images/dates.webp"
            alt="Cursusdata"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-full"
            priority
            loading="eager"
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAwAQCdASoIAAUAAUAmJaQAA3AA/v89WAAAAP7/2T5G1NLf/8elPp36k9P/d8JvkH9D/Y32G9gD+AP4A/gD+AP4A/gD+AMAA"
          />
        </MotionDiv>

        {/* Title section */}
        <MotionDiv
          initial={{ opacity: 0, y: '1rem' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
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

        {/* Decorative line - optimized animation */}
        <MotionDiv
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-32 h-1 mx-auto bg-gradient-to-r from-red-500 via-gray-500 to-blue-500 rounded-full"
        />
      </MotionDiv>
    </MotionDiv>
  )
}

export default DateSection
