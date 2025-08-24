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
  showLoadingOverlay?: boolean
  disableFade?: boolean
  fastFade?: boolean
  placeholderSoft?: boolean
  overlayOnTop?: boolean
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
  placeholder = 'empty',
  blurDataURL,
  showLoadingOverlay = false,
  disableFade = false,
  fastFade = false,
  placeholderSoft = false,
  overlayOnTop = false
}: InstantImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Create instant background style
  const backgroundStyle = backgroundSrc ? {
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
      {/* Instant display background layer - SSR + CSR with optional soft placeholder and fast fade */}
      {inlineSrc && (
        <div
          className={`absolute inset-0 transition-opacity ${fastFade ? 'duration-100' : 'duration-300'} ${overlayOnTop ? 'z-10' : ''}`}
          style={{
            backgroundImage: `url(${inlineSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: placeholderSoft ? 'blur(1px)' : 'blur(2px)',
            transform: placeholderSoft ? 'none' : 'scale(1.1)',
            opacity: imageLoaded ? 0 : 1
          }}
        />
      )}
      
      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={`object-cover ${disableFade ? '' : fastFade ? 'transition-opacity duration-100' : 'transition-opacity duration-300'} ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Progressive enhancement overlay - optional */}
      {showLoadingOverlay && !imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20 animate-pulse" />
      )}
    </div>
  )
}

export default InstantImage
