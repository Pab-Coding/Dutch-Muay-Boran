'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionButton
} from '@/components/shared/MotionComponents'

const WelcomeSection = () => {
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
        className="text-center"
      >
        {/* Logo container with larger size */}
        <MotionDiv
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-64 h-64 mx-auto" // Increased size from w-48 h-48
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-full" />
          <Image
            src="/images/logo.webp"
            alt="DMBF Logo"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </MotionDiv>

        {/* Title with gradient effect */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8"
        >
          <MotionH1 
            className="text-4xl md:text-5xl font-bold leading-relaxed md:leading-relaxed 
                      bg-gradient-to-r from-red-600 via-red-400 via-blue-300 via-blue-500 to-blue-600 
                      bg-clip-text text-transparent tracking-tight mb-6"
          >
            Welkom bij Dutch Muay Boran Foundation
          </MotionH1>
          
          {/* Description paragraphs */}
          <MotionP 
            className="text-lg leading-relaxed bg-gradient-to-r from-red-500 via-red-400 to-red-300 
                      bg-clip-text text-transparent max-w-3xl mx-auto mb-6"
          >
            Wij zijn de toonaangevende organisatie gespecialiseerd in het onderwijzen en behouden van authentiek Muay Thai en Muay Boran. Wij zijn erkend door de World Muaythai Federation (WMF) en de International Muay Boran Academy.
          </MotionP>
          <MotionP 
            className="text-base leading-relaxed bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 
                      bg-clip-text text-transparent max-w-3xl mx-auto mb-12"
          >
            Ons team van gekwalificeerde leraren en instructeurs houdt de essentie van de Thaise vechtkunsten levend, waarbij de oude traditie van Muay Boran wordt gecombineerd met de moderne effectiviteit van Muay Thai.
          </MotionP>
        </MotionDiv>

        {/* Discover More Button */}
        <MotionDiv className="mb-4">
          <Link href="/organisatie">
            <MotionButton
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white text-base font-semibold shadow-lg hover:shadow-blue-500/20 hover:shadow-2xl transform-gpu transition-all duration-300 overflow-hidden group"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-[length:200%_auto] animate-shimmer transition-opacity duration-300" 
              />
              <span className="relative inline-flex items-center gap-2">
                Ontdek Meer
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </MotionButton>
          </Link>
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

export default WelcomeSection
