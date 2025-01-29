// src/app/organisatie/sportscholen/components/LogoSection.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const LogoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, scale }}
      className="w-full max-w-4xl mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        {/* Logo container */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-48 h-48 mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-full blur-xl" />
          <Image
            src="/images/logo.png"
            alt="DMBF Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Título principal con padding ajustado y line-height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-relaxed md:leading-relaxed 
                         bg-gradient-to-r from-red-600 via-gray-800 to-blue-600 
                         bg-clip-text text-transparent 
                         px-4 py-2" // Añadido padding
          >
            Aangesloten sportscholen
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto 
                       leading-relaxed px-4" // Añadido padding horizontal
          >
            De volgende Nederlandse sportscholen zijn aangesloten bij DMBF
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-32 h-1 mx-auto bg-gradient-to-r from-red-500 via-gray-500 to-blue-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  )
}

export default LogoSection