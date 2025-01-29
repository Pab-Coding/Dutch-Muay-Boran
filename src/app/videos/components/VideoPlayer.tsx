'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface VideoPlayerProps {
  videoId: string | null
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

const VideoPlayer = ({ videoId, isOpen, onClose, title, description }: VideoPlayerProps) => {
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

  return (
    <AnimatePresence>
      {isOpen && videoId && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center 
                     px-4 py-8 overflow-y-auto bg-black/60"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-5xl mx-auto bg-gradient-to-br 
                       from-gray-900 to-black rounded-2xl overflow-hidden 
                       shadow-2xl my-8"
            variants={modalVariants}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-10 p-2 rounded-full 
                         bg-black/50 text-white hover:bg-black/70 
                         backdrop-blur-sm border border-white/10
                         transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              <XMarkIcon className="w-6 h-6" />
            </motion.button>

            {/* Video Container with Gradient Border */}
            <div className="relative p-[1px] bg-gradient-to-r from-red-500/20 
                           via-white/20 to-blue-500/20 rounded-t-2xl">
              <div className="relative aspect-video rounded-t-2xl overflow-hidden 
                             bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
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
                className="p-6 bg-gradient-to-b from-black/80 to-black"
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
}

export default VideoPlayer