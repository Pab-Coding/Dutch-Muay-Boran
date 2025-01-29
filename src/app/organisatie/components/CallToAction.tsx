'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="w-full py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Background Gradients */}
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

          {/* Content */}
          <div className="relative bg-white/90 backdrop-blur-sm p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Leer Ons Beter Kennen
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Ontdek meer over onze visie, missie en de toekomst van Muay Thai en Muay Boran in Nederland
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4"
              >
                <Link href="/organisatie/visie-missie">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-8 py-4
                             bg-gradient-to-r from-red-600 to-blue-600
                             hover:from-red-500 hover:to-blue-500
                             text-white font-semibold rounded-xl
                             transform transition-all duration-300
                             shadow-lg hover:shadow-xl"
                  >
                    <span className="relative flex items-center space-x-3">
                      <span>Ontdek Onze Visie en Missie</span>
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <ArrowLongRightIcon className="w-6 h-6" />
                      </motion.span>
                    </span>

                    {/* Hover effect */}
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

          {/* Decorative elements */}
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