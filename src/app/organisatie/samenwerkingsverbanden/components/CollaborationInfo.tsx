'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const CollaborationInfo = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Main container animation
  const containerVariants = {
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
        damping: 20,
        staggerChildren: 0.2
      }
    }
  }

  // Content section animation
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20
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

  // Button hover animation
  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
    tap: { 
      scale: 0.98,
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
    }
  }

  // Gradient animation for decorative elements
  const gradientVariants = {
    animate: {
      background: [
        "radial-gradient(circle at 0% 0%, rgba(219, 39, 119, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 0% 0%, rgba(219, 39, 119, 0.1) 0%, transparent 50%)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <motion.section
      ref={ref}
      className="w-full mt-8 relative z-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="relative bg-white/80 backdrop-blur-sm rounded-2xl 
                     shadow-xl border border-gray-200/50 overflow-hidden"
        >
          {/* Decorative background effects */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            variants={gradientVariants}
            animate="animate"
          />

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative">
            {/* DMBF Section */}
            <motion.div
              variants={sectionVariants}
              className="space-y-6"
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r 
                         from-red-600 to-blue-600 bg-clip-text text-transparent"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
              >
                Aansluiting DMBF
              </motion.h2>

              <div className="space-y-4">
                <motion.p 
                  variants={sectionVariants}
                  className="text-gray-700 leading-relaxed"
                >
                  De Dutch Muay Boran Foundation is aangesloten bij verschillende 
                  bonden in Thailand en Nederland, waaronder bij de{' '}
                  <Link 
                    href="https://muaythai.sport/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 
                             transition-colors underline"
                  >
                    International Federation of Muaythai Associations (IFMA)
                  </Link>
                  . Hierdoor kan de Dutch Muay Boran Foundation een Nederlandse 
                  delegatie sturen om mee te doen aan de wereldkampioenschappen 
                  Muay Thai.
                </motion.p>

                <motion.p 
                  variants={sectionVariants}
                  className="text-gray-700 leading-relaxed"
                >
                  Ook worden alle leraren en leden van de D.M.B.F. geregistreerd 
                  bij de Kru Muaythai Association in Thailand. Hier wordt 
                  bijgehouden welke khan-graad iemand heeft bereikt. De khan-graad 
                  wordt internationaal erkend.
                </motion.p>

                <motion.div
                  variants={sectionVariants}
                  className="pt-4"
                >
                  <Link href="/examens">
                    <motion.button
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="group px-6 py-3 bg-gradient-to-r from-red-600 
                               to-blue-600 text-white font-semibold rounded-xl 
                               flex items-center space-x-2 transform-gpu"
                    >
                      <span>Meer over Khan Systeem</span>
                      <motion.span
                        animate={{ 
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </motion.span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Insurance Section */}
            <motion.div
              variants={sectionVariants}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2
                }}
                className="bg-gradient-to-br from-blue-50 to-red-50 
                         rounded-xl p-6 md:p-8 border border-gray-200
                         h-full relative overflow-hidden transform-gpu"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-xl md:text-2xl font-semibold 
                           text-gray-800 mb-4"
                  variants={sectionVariants}
                >
                  Verzekeringen via de bond
                </motion.h3>
                
                <motion.p 
                  className="text-gray-700 leading-relaxed"
                  variants={sectionVariants}
                >
                  Via de FOG heeft DMBF een collectieve ongevallenverzekering 
                  voor al haar leden. Ook is er een aansprakelijkheidsverzekering 
                  afgesloten met een uitgebreide dekking.
                </motion.p>

                {/* Decorative gradient blob */}
                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 
                           rounded-full filter blur-2xl opacity-50"
                  animate={{
                    background: [
                      "radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, transparent 70%)"
                    ],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CollaborationInfo