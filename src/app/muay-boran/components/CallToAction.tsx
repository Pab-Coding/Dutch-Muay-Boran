'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 20 : 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-6 md:py-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-blue-600/5" />
          </div>

          {/* Content */}
          <div className="relative bg-white/95 p-6 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.4 : 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Ontdek de Kracht van Muay Boran
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                Begin jouw reis in de traditionele Thaise vechtkunst. Bij DMBF leer je niet alleen
                de authentieke technieken van Muay Boran, maar ook de rijke culturele historie en 
                filosofie die deze eeuwenoude martiale kunst zo bijzonder maakt
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4">
                <Link href="/opleidingen/inschrijven">
                  <motion.button
                    className="relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4
                             bg-gradient-to-r from-red-600 to-blue-600
                             text-white font-semibold rounded-xl
                             shadow-lg active:scale-95 transition-transform duration-150
                             text-sm md:text-base"
                  >
                    <span className="relative flex items-center space-x-2">
                      <span>Schrijf Je Nu In</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </span>
                  </motion.button>
                </Link>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xs md:text-sm text-gray-500 mt-4"
              >
                Getoetst door NOC/NSF
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CallToAction
