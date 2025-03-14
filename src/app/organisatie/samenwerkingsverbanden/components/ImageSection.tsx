'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { ImageSectionProps } from '@/types'
import { MotionSection, MotionDiv, MotionH1, MotionH2, MotionP } from '@/components/shared/MotionComponents'

const ImageSection = ({ textConfig }: ImageSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Simplified scroll-based transforms
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  // Main container animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  // Title animation with spring physics
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  // Image container animation
  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  // Content text animation
  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <MotionSection
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full mt-4 mb-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main title */}
        <MotionDiv
          variants={titleVariants}
          style={{ opacity: headerOpacity }}
          className="mb-6"
        >
          <MotionH1 className="text-3xl md:text-5xl font-bold text-center
                       bg-gradient-to-r from-red-600 via-blue-600 to-red-600 
                       bg-clip-text text-transparent
                       leading-relaxed tracking-wide py-2 md:py-3
                       break-words hyphens-auto px-2"
          >
            {textConfig.mainTitle}
          </MotionH1>
        </MotionDiv>

        <MotionDiv
          variants={imageContainerVariants}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Image container with scroll-based scale */}
          <MotionDiv 
          className="relative aspect-[3/2] sm:aspect-[16/9] md:aspect-[21/9] w-full transform-gpu"
            style={{ scale: imageScale }}
          >
            <Image
              src="/images/samenwerkingsverbanden.webp"
              alt="Marco de Cesaris en Dale Tan op de WMF wereldkampioenschappen in Thailand"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={100}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b 
                          from-black/20 via-transparent to-black/80
                          transition-opacity duration-300" />

            {/* Dynamic light effect */}
            <MotionDiv
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
              animate={{
                opacity: [0, 0.1, 0],
                x: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </MotionDiv>

          {/* Text content with improved mobile positioning */}
          <MotionDiv
            variants={contentVariants}
          className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12
                     bg-gradient-to-t from-black/90 via-black/80 to-transparent"
          >
            <div className="max-w-7xl mx-auto">
              <MotionDiv 
                className="space-y-1 sm:space-y-2"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
              >
                <MotionH2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
                             text-white break-words
                             leading-tight tracking-wide"
                >
                  {textConfig.heroTitle.line1}
                </MotionH2>
                <MotionH2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
                             text-white break-words
                             leading-tight tracking-wide"
                >
                  {textConfig.heroTitle.line2}
                </MotionH2>
              </MotionDiv>

              <MotionP
                variants={contentVariants}
                className="text-sm sm:text-lg md:text-xl text-gray-200 
                         font-medium leading-relaxed
                         border-l-4 border-red-500 pl-3 sm:pl-4
                         mt-2 sm:mt-4 max-w-3xl"
              >
                {textConfig.description}
              </MotionP>
            </div>
          </MotionDiv>

          {/* Shine effect border */}
          <MotionDiv
            className="absolute inset-0 border-2 border-white/20 rounded-2xl"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </MotionDiv>
      </div>
    </MotionSection>
  )
}

export default ImageSection
