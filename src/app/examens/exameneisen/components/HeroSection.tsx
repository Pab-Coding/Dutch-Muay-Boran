'use client'

import { MotionSection, MotionDiv, MotionH1 } from '../../../../components/shared/MotionComponents'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[300px] bg-gradient-to-r from-red-600 via-white to-blue-600 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center">
        <MotionDiv
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-32 h-32 relative mb-6"
        >
          <Image
            src="/images/logo.webp"
            alt="Dutch Muay Boran Logo"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </MotionDiv>

        <MotionH1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          Exameneisen
        </MotionH1>
      </div>
    </MotionSection>
  )
}

export default HeroSection
