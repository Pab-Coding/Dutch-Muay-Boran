'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

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
      className="relative h-[80vh] min-h-[600px] w-full overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/examens-muay.jpg"
          alt="Muay Thai Examens"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Degradado más suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        
        {/* Efectos decorativos más suaves */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-blue-900/5" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </motion.div>

      {/* Contenido principal */}
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

            <motion.h1
              variants={childVariants}
              className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-white via-gray-200 to-white
                         leading-tight drop-shadow-lg"
            >
              Examens & Khan-systeem
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="mt-6 text-xl md:text-2xl text-gray-200 font-medium
                         leading-relaxed max-w-2xl drop-shadow-lg"
            >
              Ontwikkel je vaardigheden en bereik nieuwe niveaus in Muay Thai Boran
            </motion.p>
          </motion.div>

          {/* Botón ajustado a mt-20 */}
          <motion.div
            variants={childVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/examens/exameneisen">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600
                         text-white font-semibold rounded-xl shadow-lg
                         hover:from-red-500 hover:to-blue-500
                         transform transition-all duration-300
                         border border-white/20 backdrop-blur-sm
                         flex items-center space-x-3"
              >
                <span>Bekijk Exameneisen</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-0 left-0 w-full h-32
                       bg-gradient-to-t from-black/40 to-transparent"
          />
         
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                       w-1/2 h-16 blur-3xl
                       bg-gradient-to-r from-red-600/20 to-blue-600/20"
          />
        </div>
      </motion.div>

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