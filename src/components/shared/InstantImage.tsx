'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface InstantImageProps {
  src: string
  alt: string
  inlineSrc?: string
  backgroundSrc?: string
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

const InstantImage = ({
  src,
  alt,
  inlineSrc,
  backgroundSrc,
  fill = false,
  sizes,
  className = '',
  priority = false,
  quality = 90,
  placeholder = 'blur',
  blurDataURL
}: InstantImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Create instant background style
  const backgroundStyle = backgroundSrc && mounted ? {
    backgroundImage: `url(${backgroundSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {}

  return (
    <div 
      className={`relative w-full h-full ${className}`}
      style={backgroundStyle}
    >
      {/* Instant display background layer - only show after mount */}
      {mounted && inlineSrc && !imageLoaded && (
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${inlineSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
            transform: 'scale(1.1)'
          }}
        />
      )}
      
      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={`object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Progressive enhancement overlay - only show after mount */}
      {mounted && !imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20 animate-pulse" />
      )}
    </div>
  )
}

export default InstantImage