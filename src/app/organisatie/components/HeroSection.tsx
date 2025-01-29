'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

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
      className="relative h-[85vh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Imagen de fondo con efecto parallax */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/flyer-amsterdam.jpg"
          alt="Dutch Muay Boran Foundation Amsterdam"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
       
        {/* Efectos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </motion.div>

      {/* Contenido principal */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center"
      >
        <div className="max-w-4xl">
          <motion.div
            variants={childVariants}
            className="space-y-6"
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-red-500/20 to-blue-500/20
                         backdrop-blur-sm rounded-lg px-4 py-2"
            >
              <span className="text-white/90 font-medium">
                Dutch Muay Boran Foundation
              </span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1
                variants={childVariants}
                className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text
                           bg-gradient-to-r from-white via-gray-200 to-white
                           leading-[1.15] md:leading-[1.2] tracking-normal"
              >
                Organisatie - Ons{' '}
                <span className="block">Erfgoed</span>
              </motion.h1>

              <motion.p
                variants={childVariants}
                className="text-xl md:text-2xl text-gray-200 font-medium
                           leading-relaxed max-w-2xl"
              >
                Ontdek de geschiedenis, visie en missie achter de Dutch Muay Boran Foundation
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-32
                   bg-gradient-to-t from-black/50 to-transparent"
      />
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                   w-1/2 h-16 blur-3xl
                   bg-gradient-to-r from-red-600/30 to-blue-600/30"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full
                     flex justify-center items-start p-2"
        >
          <motion.div
            animate={{ height: ["20%", "80%", "20%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection