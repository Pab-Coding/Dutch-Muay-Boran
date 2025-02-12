'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionButton,
  MotionSection
} from '@/components/shared/MotionComponents'

const WelcomeSection = () => {
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
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="relative h-auto min-h-[600px] w-full overflow-hidden rounded-xl py-12 mb-12"
    >
      {/* Background with multiple layers */}
      <MotionDiv
        className="absolute inset-0"
      >
        <Image
          src="/images/new-team-photo.jpg"
          alt="DMBF Team"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Multiple overlay layers for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 rounded-xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-blue-900/30 rounded-xl" />
        <div className="absolute inset-0 backdrop-blur-[2px] rounded-xl" />
      </MotionDiv>

      {/* Content Container */}
      <MotionDiv
        className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-center items-center h-full">
          {/* Logo */}
          <MotionDiv
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-48 h-48 md:w-56 md:h-56 mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-full backdrop-blur-sm" />
            <Image
              src="/images/logo.webp"
              alt="DMBF Logo"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-contain"
              priority
            />
          </MotionDiv>

          {/* Text Content */}
          <MotionDiv
            variants={childVariants}
            className="text-center max-w-4xl space-y-6"
          >
            <MotionH1 
              variants={childVariants}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-slate-100 via-blue-400 to-slate-100
                        leading-tight tracking-tight mb-4"
            >
              Welkom bij Dutch Muay Boran Foundation
            </MotionH1>
            
            <MotionP 
              variants={childVariants}
              className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mb-3"
            >
              Wij zijn de toonaangevende organisatie gespecialiseerd in het onderwijzen en behouden van authentiek Muay Thai en Muay Boran. Wij zijn erkend door de World Muaythai Federation (WMF) en de International Muay Boran Academy.
            </MotionP>
            
            <MotionP 
              variants={childVariants}
              className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Ons team van gekwalificeerde leraren en instructeurs houdt de essentie van de Thaise vechtkunsten levend, waarbij de oude traditie van Muay Boran wordt gecombineerd met de moderne effectiviteit van Muay Thai.
            </MotionP>

            {/* Button */}
            <MotionDiv variants={childVariants}>
              <Link href="/organisatie">
                <MotionButton
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 
                            text-white text-lg font-semibold shadow-lg hover:shadow-red-500/20 
                            hover:shadow-2xl transform-gpu transition-all duration-300 
                            overflow-hidden group backdrop-blur-sm"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                bg-gradient-to-r from-red-400 via-blue-500 to-red-400 
                                bg-[length:200%_auto] animate-shimmer transition-opacity duration-300" />
                  <span className="relative inline-flex items-center gap-2">
                    Ontdek Meer
                    <svg 
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" 
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
          </MotionDiv>
        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default WelcomeSection
