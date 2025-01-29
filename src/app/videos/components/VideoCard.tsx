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
    '0fNkU_APRU8': '/images/saenchai.jpg',
    'GbmdhnMPB3M': '/images/kard-chuek.jpg',
    'SGl9vOE_rj8': '/images/marco.jpg'
  }

  // Posiciones personalizadas del botón de play según el videoId
  const playButtonPositions: { [key: string]: string } = {
    'AI2MD0wuXXo': 'top-[45%]', // Video 1 - ajustado a una posición más alta
    '0fNkU_APRU8': 'top-[30%]', // Video 2
    'GbmdhnMPB3M': 'top-[30%]', // Video 3
    'SGl9vOE_rj8': 'top-[30%]'  // Video 4
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
      className="relative group rounded-xl overflow-hidden shadow-xl 
                 bg-gradient-to-r from-red-500/10 to-blue-500/10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPlay}
    >
      <div className="relative aspect-video">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transform transition-transform duration-500 
                     group-hover:scale-105"
          quality={100}
          onError={() => setThumbnailError(true)}
        />

        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          className="absolute inset-0 bg-gradient-to-t from-black/90 
                     via-black/50 to-transparent"
        />

        <motion.div
          variants={playButtonVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          whileHover="hover"
          className={`absolute ${playButtonPositions[videoId] || 'top-[30%]'} left-1/2 
                     transform -translate-x-1/2 -translate-y-1/2 z-20`}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-600 
                         rounded-full flex items-center justify-center shadow-lg 
                         backdrop-blur-sm border border-white/20">
            <svg
              className="w-8 h-8 text-white translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          className="absolute bottom-0 left-0 right-0 p-6 z-10"
        >
          <h3 className="text-xl font-bold text-white mb-2 
                         line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-200 text-sm line-clamp-3 
                       leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Efectos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 
                       to-blue-600/10 mix-blend-overlay" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-red-500/20 
                     via-transparent to-blue-500/20"
        />
      </div>

      {/* Borde con gradiente */}
      <div className="absolute inset-0 border border-white/10 rounded-xl" />
      
      {/* Efecto de brillo en hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        className="absolute inset-0 bg-gradient-to-r from-red-500/10 
                   via-white/20 to-blue-500/10 mix-blend-overlay"
      />

      {/* Efecto de sombra adicional */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-px bg-gradient-to-r from-red-500/10 
                   to-blue-500/10 rounded-xl blur-lg"
      />
    </motion.div>
  )
}

export default VideoCard