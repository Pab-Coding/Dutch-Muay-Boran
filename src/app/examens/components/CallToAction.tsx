'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const CallToAction = () => {
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
      y: 30
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-8 bg-gradient-to-b from-gray-50 to-white" // Reducido el padding vertical
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background con gradiente animado */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-blue-600/5"
              animate={{
                background: [
                  "linear-gradient(to bottom right, rgba(239,68,68,0.05), transparent, rgba(37,99,235,0.05))",
                  "linear-gradient(to bottom right, rgba(37,99,235,0.05), transparent, rgba(239,68,68,0.05))"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>

          {/* Contenido */}
          <div className="relative bg-white/90 backdrop-blur-sm p-6 md:p-8 text-center"> {/* Reducido el padding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4" // Reducido el espacio vertical
            >
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Klaar voor je volgende khan?
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Ontdek de gedetailleerde exameneisen voor elke khan-graad en begin je reis naar het volgende niveau in Muay Thai
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2" // Reducido el padding top
              >
                <Link href="/examens/exameneisen">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="group relative inline-flex items-center justify-center px-6 py-3
                             bg-gradient-to-r from-red-600 to-blue-600 
                             hover:from-red-500 hover:to-blue-500
                             text-white font-semibold rounded-xl
                             transform transition-all duration-300
                             shadow-lg hover:shadow-xl"
                  >
                    <span className="relative flex items-center space-x-2">
                      <span>Bekijk Exameneisen</span>
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </motion.span>
                    </span>

                    {/* Efecto de brillo */}
                    <motion.div
                      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100
                               bg-gradient-to-r from-transparent via-white/20 to-transparent
                               transform -skew-x-12 transition-opacity duration-500"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear"
                      }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Efectos decorativos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2
                       w-3/4 h-8 blur-2xl
                       bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CallToAction
