'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect, useCallback, memo } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import type { ReactElement } from 'react'

// Helper function for debouncing
function debounce(fn: Function, ms: number) {
  let timer: NodeJS.Timeout
  return function(this: any, ...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), ms)
  }
}

const CallToAction = (): ReactElement => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    const debouncedResize = debounce(checkMobile, 250)
    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  }, [])

  // Memoize variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 15 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  // Memoize content variants
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full py-6 md:py-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          variants={contentVariants}
        >
          {/* Background gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-blue-600/5" />
          </div>

          {/* Content */}
          <div className="relative bg-white/95 p-6 md:p-12 text-center">
            <motion.div
              variants={contentVariants}
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4
                             bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500
                             text-white font-semibold rounded-xl
                             shadow-lg transition-all duration-200
                             text-sm md:text-base"
                  >
                    <span className="relative flex items-center space-x-2">
                      <span>Schrijf Je Nu In</span>
                      <ArrowRightIcon className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </Link>
              </div>

              <motion.p
                variants={contentVariants}
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

export default memo(CallToAction)
