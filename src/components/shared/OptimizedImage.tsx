'use client'

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
  quality = 85,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) => {
  const imageClassName = className && className.trim().length > 0 ? className : 'object-cover'

  return (
    <div className={`relative w-full h-full`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={imageClassName}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
}

export default OptimizedImage