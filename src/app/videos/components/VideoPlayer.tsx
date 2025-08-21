'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
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
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      backdropFilter: 'blur(0px)',
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.96,
      y: 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: 10,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
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

  const containerRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const [showHint, setShowHint] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const scrollToInfo = () => {
    if (containerRef.current && infoRef.current) {
      const top = infoRef.current.offsetTop
      containerRef.current.scrollTo({ top, behavior: 'smooth' })
    }
    setShowHint(false)
  }

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setShowHint(true)
  }

  // Toggle down-hint visibility based on scroll direction
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let last = el.scrollTop
    const onScroll = () => {
      const y = el.scrollTop
      const delta = y - last
      if (delta > 5) {
        setShowHint(false)
      } else if (delta < -5) {
        setShowHint(true)
      }
      last = y
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [isOpen])

  const content = (
    <AnimatePresence>
      {isOpen && videoId && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-black/90 sm:bg-black/80 touch-manipulation"
          variants={backdropVariants}
          initial={false}
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            ref={containerRef}
            className="relative w-full h-[100dvh] sm:h-auto bg-gradient-to-br from-gray-900 to-black rounded-none sm:rounded-2xl shadow-2xl sm:my-8 sm:max-h-[90vh] overflow-y-auto flex flex-col sm:max-w-[min(90vw,1200px)] will-change-transform"
            variants={modalVariants}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 sm:p-2 
                         rounded-full bg-black/70 sm:bg-black/50 text-white hover:bg-black/80 
                         backdrop-blur-sm border border-white/30 sm:border-white/10
                         transition-colors duration-200 touch-manipulation"
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              <XMarkIcon className="w-6 h-6" />
            </motion.button>

            {/* Video Container with Gradient Border */}
            <div className="relative flex-shrink-0 bg-gradient-to-r from-red-500/10 via-white/10 to-blue-500/10 sm:rounded-t-2xl">
              {/* Use 56.25% aspect ratio plus a small extra space for controls rendering */}
              <div className="relative bg-black sm:rounded-t-2xl" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1&controls=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; 
                         encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  onLoad={() => setVideoLoaded(true)}
                />
                {!videoLoaded && (
                  <div className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-150" />
                )}
              </div>
              {/* Scroll hint to details - visible on mobile too */}
              {(title || description) && (
                <button
                  onClick={scrollToInfo}
                  className={`flex absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 items-center justify-center w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/90 text-gray-800 shadow-lg border border-black/10 hover:bg-white transition-all duration-300 ${showHint ? 'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'}`}
                  aria-label="Scroll to details"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 16.5a.75.75 0 0 1-.53-.22l-6-6a.75.75 0 1 1 1.06-1.06L12 14.69l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-.53.22z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>

            {/* Video Information */}
            {(title || description) && (
              <motion.div
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                ref={infoRef}
                className="relative z-10 flex-shrink-0 min-h-[200px] p-4 sm:p-6 bg-gradient-to-b from-black/90 to-black backdrop-blur-[1px]"
              >
                <div className="absolute right-2 sm:right-4 top-2 sm:top-3 flex gap-2">
                  <button
                    onClick={scrollToTop}
                    className="inline-flex items-center justify-center w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 touch-manipulation"
                    aria-label="Back to video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12 7.5a.75.75 0 0 1 .53.22l6 6a.75.75 0 0 1-1.06 1.06L12 9.31l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 .53-.22z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {title && (
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-3 leading-tight pr-10">
                    {title}
                  </h2>
                )}
                {description && (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {description}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Decorative Elements (placed behind content) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/5 
                           via-transparent to-blue-500/5 pointer-events-none" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/5 
                           via-transparent to-red-500/5 pointer-events-none" />
          </motion.div>

          {/* Background Decorative Elements */}
          <motion.div
            className="fixed inset-0 pointer-events-none"
            initial={{ opacity: 1 }}
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
