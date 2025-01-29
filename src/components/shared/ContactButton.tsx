'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChatBubbleBottomCenterTextIcon, XMarkIcon } from '@heroicons/react/24/outline'

const ContactButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  // Mostrar el botón después de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsTooltipVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mostrar tooltip después de 2 segundos si el botón es visible
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isVisible && !isTooltipVisible) {
      timeout = setTimeout(() => {
        setIsTooltipVisible(true)
      }, 2000)
    }
    return () => clearTimeout(timeout)
  }, [isVisible])

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95 
    }
  }

  const tooltipVariants = {
    hidden: { 
      opacity: 0,
      x: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    exit: { 
      opacity: 0,
      x: 20,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mr-4"
          >
            <div className="relative bg-white rounded-lg shadow-xl p-4 max-w-xs">
              <button
                onClick={() => setIsTooltipVisible(false)}
                className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1
                          hover:bg-red-600 transition-colors"
              >
                <XMarkIcon className="w-4 h-4 text-white" />
              </button>
              <p className="text-gray-800 text-sm">
                Heeft u vragen? Neem gerust contact met ons op!
              </p>
            </div>
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
              <div className="border-8 border-transparent border-l-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <Link href="/contact">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              {/* Botón principal */}
              <motion.div
                className="relative bg-gradient-to-r from-red-600 to-blue-600
                          rounded-full p-4 shadow-lg cursor-pointer
                          hover:shadow-xl transition-shadow"
              >
                <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Efecto de pulso */}
              <motion.div
                animate={pulseAnimation}
                className="absolute inset-0 bg-gradient-to-r from-red-400 to-blue-400
                          rounded-full -z-10 opacity-30 blur-sm"
              />
            </motion.div>
          </Link>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContactButton