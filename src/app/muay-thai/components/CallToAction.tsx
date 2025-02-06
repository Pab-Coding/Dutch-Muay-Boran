'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const CallToAction = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full py-6 sm:py-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Simplified background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-blue-600/5" />
          </div>

          {/* Content */}
          <div className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Begin Jouw Muay Thai Boran Reis
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                Word onderdeel van een eeuwenoude traditie en start je training in Muay Thai Boran. 
                Bij DMBF krijg je les van gecertificeerde instructeurs die de authentieke technieken 
                en waarden van deze nobele vechtsport doorgeven.
              </p>

              <div className="flex justify-center pt-2 sm:pt-4">
                <Link href="/opleidingen/inschrijven" className="w-full sm:w-auto">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-blue-600
                             text-white font-semibold rounded-xl shadow-md
                             hover:from-red-500 hover:to-blue-500
                             transform transition-all duration-200
                             flex items-center justify-center space-x-2"
                  >
                    <span>Schrijf Je Nu In</span>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </Link>
              </div>

              {/* Simplified decorative elements */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs sm:text-sm text-gray-500 mt-4"
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
