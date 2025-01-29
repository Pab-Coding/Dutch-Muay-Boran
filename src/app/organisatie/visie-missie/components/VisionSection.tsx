'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaLightbulb } from 'react-icons/fa'

const VisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-blue-50 rounded-3xl" />

      <div className="relative p-8 md:p-12">
        {/* Introducción */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center"
          >
            <FaLightbulb className="w-8 h-8 text-white" />
          </motion.div>

          <motion.p className="text-lg text-gray-700 leading-relaxed">
            Ondernemen doe je vanuit een bepaalde visie. Zo is het ook bij de Dutch Muay Boran Foundation. 
            De oprichters van deze organisatie zagen tot hun spijt hoe het authentieke Muay Thai met clinchen, 
            ellebogen en 5 rondes steeds meer naar de achtergrond werd verdreven door de opkomst van het K-1 systeem. 
            Daarom besloten zij zelf een bond op te richten die zich specifiek richt op Muay Thai en Muay Boran
          </motion.p>
        </motion.div>

        {/* Visión */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10"
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
          >
            Visie
          </motion.h2>
          
          <motion.h3 className="text-xl font-semibold text-gray-800 mb-6">
            De Dutch Muay Boran Foundation gelooft dat:
          </motion.h3>

          <motion.div className="space-y-4">
            {[
              'Muay Thai en Muay Boran voor iedereen toegankelijk moeten zijn, ongeacht leeftijd of niveau.',
              'De authentieke Thaise vechtsport behouden moet blijven, inclusief traditionele technieken en waarden.',
              'Kwaliteit en professionaliteit essentieel zijn, zowel op recreatief als wedstrijdniveau.',
              'De ontwikkeling van vechtsporters niet alleen fysiek, maar ook mentaal en sociaal moet zijn'
            ].map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  className="w-2 h-2 mt-2.5 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex-shrink-0"
                />
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {belief}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                     w-1/2 h-16 blur-3xl
                     bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20"
        />
      </div>
    </motion.section>
  )
}

export default VisionSection