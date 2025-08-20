'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface VideoPlayerProps {
  videoId: string | null
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

const VideoPlayer = ({ videoId, isOpen, onClose, title, description }: VideoPlayerProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const backdropVariants = {
    hidden: {
      opacity: 0,
      backdropFilter: 'blur(0px)'
    },
    visible: {
      opacity: 1,
      backdropFilter: 'blur(8px)',
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      backdropFilter: 'blur(0px)',
      transition: {
        duration: 0.3
      }
    }
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  }

  const infoVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4
      }
    }
  }

  const content = (
    <AnimatePresence>
      {isOpen && videoId && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-0 sm:px-4 py-4 sm:py-8 bg-black/80 touch-manipulation"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            className="relative w-full mx-auto bg-gradient-to-br from-gray-900 to-black rounded-none sm:rounded-2xl shadow-2xl sm:my-8 max-h-[96svh] overflow-auto flex flex-col max-w-[min(96vw,calc(90svh*16/9))]"
            variants={modalVariants}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 p-2 
                         rounded-full bg-black/50 text-white hover:bg-black/70 
                         backdrop-blur-sm border border-white/10
                         transition-colors duration-200 touch-manipulation"
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Video Container with Gradient Border */}
            <div className="relative bg-gradient-to-r from-red-500/20 via-white/20 to-blue-500/20 sm:rounded-t-2xl">
              {/* Use 56.25% aspect ratio plus a small extra space for controls rendering */}
              <div className="relative bg-black sm:rounded-t-2xl" style={{ paddingTop: '57%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; 
                         encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Video Information */}
            {(title || description) && (
              <motion.div
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                className="p-4 sm:p-6 bg-gradient-to-b from-black/80 to-black overflow-y-auto"
              >
                {title && (
                  <h2 className="text-2xl font-bold text-white mb-4 
                                leading-tight">
                    {title}
                  </h2>
                )}
                {description && (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-base leading-relaxed 
                                 whitespace-pre-line">
                      {description}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 
                           via-transparent to-blue-500/5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 
                           via-transparent to-red-500/5 pointer-events-none" />
          </motion.div>

          {/* Background Decorative Elements */}
          <motion.div
            className="fixed inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 
                           via-transparent to-blue-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_
                           var(--tw-gradient-stops))] from-white/5 via-transparent 
                           to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  if (!mounted) return null
  return createPortal(content, document.body)
}

export default VideoPlayer
