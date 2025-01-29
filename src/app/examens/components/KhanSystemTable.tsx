'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
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
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={titleVariants}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BsAward className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Khan Graduatie Systeem
            </h2>
            <BsAward className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ontdek de verschillende niveaus en vereisten voor elke khan-graad
          </p>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="relative max-w-4xl mx-auto"
        >
          {/* Efectos decorativos de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-blue-600/5 
                         rounded-2xl transform -rotate-1" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-red-600/5 
                         rounded-2xl transform rotate-1" />
          
          {/* Contenedor de la imagen */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden
                       transform hover:scale-[1.02] transition-all duration-300"
            whileHover={{
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
          >
            <Image
              src="/images/khans.png"
              alt="Khan System Table"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
            
            {/* Overlay con gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          </motion.div>

          {/* Decoración adicional */}
          <motion.div
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
        </motion.div>

        {/* Nota informativa */}
        <motion.div
          variants={titleVariants}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Bekijk op de volgende pagina de exameneisen voor de 1e tot en met de 6e khan
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default KhanSystemTable