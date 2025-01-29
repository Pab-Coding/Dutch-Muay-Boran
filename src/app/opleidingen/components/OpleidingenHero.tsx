'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const OpleidingenHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.05])
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, 50])

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
    <motion.section
      ref={sectionRef}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="relative h-[70vh] min-h-[600px] w-full overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/opleidingen.jpg"
          alt="Opleidingen Muay Thai"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-blue-900/5" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full max-w-7xl mx-auto px-4"
      >
        <div className="flex flex-col justify-center h-full max-w-4xl">
          <motion.div
            variants={childVariants}
            className="space-y-2"
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-red-500/20 to-blue-500/20
                         backdrop-blur-sm rounded-lg px-4 py-2 mb-4"
            >
              <span className="text-white/90 font-medium">
                Dutch Muay Boran Foundation
              </span>
            </motion.div>

            <div className="mb-4"> {/* Contenedor adicional con margen inferior */}
              <motion.h1
                variants={childVariants}
                className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text
                           bg-gradient-to-r from-white via-gray-200 to-white
                           leading-[1.2] pb-4" // Ajustado leading y añadido padding-bottom
              >
                Opleidingen
              </motion.h1>
            </div>

            <motion.p
              variants={childVariants}
              className="mt-6 text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg"
            >
              Ontwikkel je vaardigheden en start je professionele carrière
              in de authentieke kunst van Muay Thai Boran en Muay Boran
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default OpleidingenHero