'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { ImageSectionProps } from '@/types'

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
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full mt-12 mb-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main title */}
        <motion.div
          variants={titleVariants}
          style={{ opacity: headerOpacity }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center
                       bg-gradient-to-r from-red-600 via-blue-600 to-red-600 
                       bg-clip-text text-transparent
                       leading-relaxed tracking-wide py-4"
          >
            {textConfig.mainTitle}
          </h1>
        </motion.div>

        <motion.div
          variants={imageContainerVariants}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Image container with scroll-based scale */}
          <motion.div 
            className="relative aspect-[21/9] w-full transform-gpu"
            style={{ scale: imageScale }}
          >
            <Image
              src="/images/samenwerkingsverbanden.jpg"
              alt="Marco de Cesaris en Dale Tan op de WMF wereldkampioenschappen in Thailand"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b 
                          from-black/20 via-transparent to-black/80
                          transition-opacity duration-300" />

            {/* Dynamic light effect */}
            <motion.div
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
          </motion.div>

          {/* Text content with configurable positioning */}
          <motion.div
            variants={contentVariants}
            className="absolute"
            style={{
              bottom: textConfig.textPosition.bottomOffset,
              left: textConfig.textPosition.leftOffset,
              right: 0,
              paddingRight: "2rem"
            }}
          >
            <div 
              className="space-y-6"
              style={{ maxWidth: textConfig.textPosition.maxWidth }}
            >
              <motion.div 
                className="space-y-1"
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
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold
                             text-white whitespace-nowrap
                             leading-[1.2] tracking-wide"
                >
                  {textConfig.heroTitle.line1}
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold
                             text-white whitespace-nowrap
                             leading-[1.2] tracking-wide pb-2"
                >
                  {textConfig.heroTitle.line2}
                </h2>
              </motion.div>

              <motion.p
                variants={contentVariants}
                className="text-xl md:text-2xl text-gray-200 
                         font-medium leading-relaxed
                         border-l-4 border-red-500 pl-4
                         mt-4"
              >
                {textConfig.description}
              </motion.p>
            </div>
          </motion.div>

          {/* Shine effect border */}
          <motion.div
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
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ImageSection