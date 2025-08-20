'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

const OptimizedImage = ({
  src,
  alt,
  fill = false,
  sizes,
  className = '',
  priority = false,
  quality = 85, // Reduced from 90 for better performance
  placeholder = 'blur',
  blurDataURL
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Minimal blur placeholder
  const defaultBlurDataURL = "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACQAQCdASoKAAYABUB8JZQAAgboSWgA+Qa3wgZ8qSji/y1MrOm0BWgAOoeQUI6up0x4ocKzKn/mcAAA="

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Minimal loading state - only show after mount */}
      {mounted && !imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
      
      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={`object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        onLoad={() => setImageLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
}

export default OptimizedImage