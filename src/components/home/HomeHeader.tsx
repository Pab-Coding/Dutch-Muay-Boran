'use client'
import Image from 'next/image'
import { MotionHeader } from '../shared/MotionWrapper'

const HomeHeader = () => {
  return (
    <MotionHeader 
      className="w-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-[180px] relative bg-gradient-to-r from-red-600 via-white to-blue-600">
        <Image sizes="(max-width: 768px) 100vw, 50vw"
          src="/images/banner-principal.webp"
          alt="Dutch Muay Boran Foundation Banner"
          fill
          style={{ 
            objectFit: 'contain',
            objectPosition: 'center'
          }}
          priority
          className="hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </MotionHeader>
  )
}

export default HomeHeader
