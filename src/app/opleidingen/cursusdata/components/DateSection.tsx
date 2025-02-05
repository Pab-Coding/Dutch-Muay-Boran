'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MotionDiv, MotionH1 } from '@/components/shared/MotionWrapper'

const DateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <MotionDiv
      ref={sectionRef}
      style={{ opacity, scale }}
      className="w-full max-w-4xl mx-auto px-4 py-12"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        {/* Circular image container */}
        <MotionDiv
          whileHover={{ scale: 1.05 }}
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
          />
        </MotionDiv>

        {/* Title with adjusted padding and line-height */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
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

        {/* Decorative line */}
        <MotionDiv
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-32 h-1 mx-auto bg-gradient-to-r from-red-500 via-gray-500 to-blue-500 rounded-full"
        />
      </MotionDiv>
    </MotionDiv>
  )
}

export default DateSection
