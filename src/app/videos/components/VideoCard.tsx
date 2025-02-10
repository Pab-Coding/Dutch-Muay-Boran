'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface VideoCardProps {
  videoId: string
  title: string
  description: string
  onPlay: () => void
}

const VideoCard = ({ videoId, title, description, onPlay }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [thumbnailError, setThumbnailError] = useState(false)

  const defaultThumbnails: { [key: string]: string } = {
    '0fNkU_APRU8': '/images/saenchai.webp',
    'GbmdhnMPB3M': '/images/kard-chuek.webp',
    'SGl9vOE_rj8': '/images/marco.webp'
  }

  // Posiciones personalizadas del botón de play según el videoId
  const playButtonPositions: { [key: string]: string } = {
    'AI2MD0wuXXo': 'top-[35%]', // De Geschiedenis van Muay Thai - considerably higher
    '0fNkU_APRU8': 'top-[30%]', // Saenchai video
    'GbmdhnMPB3M': 'top-[20%]', // Muay Kard Chiek - higher
    'SGl9vOE_rj8': 'top-[20%]'  // Marco de Cesaris - slightly higher
  }

  const thumbnailUrl = defaultThumbnails[videoId] || 
                      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
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

  const playButtonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative group rounded-xl overflow-hidden shadow-lg 
                 bg-gradient-to-r from-red-500/10 to-blue-500/10 cursor-pointer
                 hover:shadow-xl transition-shadow duration-300
                 active:scale-[0.98] touch-manipulation"
      onClick={onPlay}
    >
      <div className="relative aspect-video">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover"
          quality={85}
          onError={() => setThumbnailError(true)}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {/* Always visible overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 
                       via-black/40 to-transparent opacity-90" />

        {/* Play button - positioned higher on mobile and using custom positions */}
        <div className={`absolute ${playButtonPositions[videoId] || 'top-[25%] sm:top-1/2'} left-1/2 transform -translate-x-1/2 
                       -translate-y-1/2 z-20`}>
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r 
                         from-red-600 to-blue-600 rounded-full flex items-center 
                         justify-center shadow-lg backdrop-blur-sm border 
                         border-white/20 transition-transform duration-200
                         hover:scale-110 active:scale-95">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Video info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 
                         line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-200 text-sm line-clamp-2 sm:line-clamp-3 
                       leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Simple border */}
      <div className="absolute inset-0 border border-white/10 rounded-xl" />
    </motion.div>
  )
}

export default VideoCard
