'use client'

import { useScroll, useTransform } from 'framer-motion'
import { MotionSection, MotionDiv } from '../../../components/shared/MotionComponents'
import Image from 'next/image'
import { useRef } from 'react'
import { BsAward } from 'react-icons/bs'

const KhanSystemTable = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <MotionSection
      ref={sectionRef}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <MotionDiv
          variants={titleVariants}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BsAward className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Khan Graduatie Systeem
            </h2>
            <BsAward className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ontdek de verschillende niveaus en vereisten voor elke khan-graad
          </p>
        </MotionDiv>

        <MotionDiv
          variants={imageVariants}
          className="relative max-w-[90vw] sm:max-w-2xl md:max-w-4xl mx-auto"
        >
          {/* Efectos decorativos de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-blue-600/5 
                         rounded-2xl transform -rotate-1" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-red-600/5 
                         rounded-2xl transform rotate-1" />
          
          {/* Contenedor de la imagen */}
          <MotionDiv
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden
                       transform hover:scale-[1.02] transition-all duration-300"
            whileHover={{
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
          >
            <Image
              src="/images/khans.webp"
              alt="Khan System Table"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-contain"
              priority
            />
            
            {/* Overlay con gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          </MotionDiv>

          {/* Decoración adicional */}
          <MotionDiv
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8
                       bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10
                       blur-2xl rounded-full"
            animate={{
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </MotionDiv>

        {/* Nota informativa */}
        <MotionDiv
          variants={titleVariants}
          className="mt-8 sm:mt-12 text-center px-4"
        >
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Bekijk op de volgende pagina de exameneisen voor de 1e tot en met de 6e khan
          </p>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}

export default KhanSystemTable
