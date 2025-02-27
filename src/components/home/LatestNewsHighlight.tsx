'use client'

import { useRef, memo, useState } from 'react'
import { useInView } from 'framer-motion'
import { MotionDiv, MotionSpan } from '../shared/MotionComponents'
import Image from 'next/image'
import Link from 'next/link'
import { BsNewspaper } from 'react-icons/bs'

// Define animation variants outside the component for performance.
const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

const shakeAnimation = {
  x: [0, -5, 5, -5, 5, 0],
  transition: {
    duration: 0.5,
    repeat: 3,
    ease: 'easeInOut'
  }
}

const LatestNewsHighlight = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showFullText, setShowFullText] = useState(false)

  return (
    <div ref={ref} className="w-full mb-12">
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <MotionDiv
          animate={pulseAnimation}
          className="bg-white rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="relative">
            <Image
              src="/images/nk-muaythai-2025.webp"
              alt="Nederlandse Kampioenschappen Muay Thai 2025"
              width={1200}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-[250px] object-cover"
            />
            <MotionDiv
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full 
                         flex items-center space-x-2 shadow-lg"
            >
              <BsNewspaper className="animate-bounce" />
              <MotionSpan animate={shakeAnimation}>NIEUWS!</MotionSpan>
            </MotionDiv>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Nederlandse Kampioenschappen Muay Thai 2025
            </h2>
            <div className="relative">
              <p className={`text-gray-600 mb-2 ${showFullText ? '' : 'line-clamp-3'}`}>
                De Dutch Muay Boran Foundation (DMBF) kondigt met trots aan dat op 15 en 16 maart 2025 
                de Nederlandse Kampioenschappen Muay Thai zullen plaatsvinden. In samenwerking met de WFCA 
                organiseert de DMBF dit prestigieuze evenement dat zich richt op het authentieke Muay Thai.
                {!showFullText && (
                  <button 
                    onClick={() => setShowFullText(true)}
                    className="text-blue-600 hover:underline text-sm font-medium inline sm:hidden"
                  >
                    ...Lees meer
                  </button>
                )}
              </p>
              
              {showFullText && (
                <button 
                  onClick={() => setShowFullText(false)}
                  className="text-blue-600 hover:underline text-sm font-medium mt-1 inline-block sm:hidden"
                >
                  Toon minder
                </button>
              )}
            </div>
            <p className="text-gray-600 mb-6 italic">
              Voor meer informatie kunt u contact met ons opnemen.
            </p>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                  <span className="whitespace-nowrap">Contact:</span>
                  <div className="flex flex-col sm:flex-row sm:ml-2 space-y-1 sm:space-y-0 sm:space-x-2">
                    <a href="mailto:info@dmbf.nl" className="text-blue-600 hover:underline break-all text-sm sm:text-base">
                      info@dmbf.nl
                    </a>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-blue-600 text-white 
                           rounded-lg font-semibold flex items-center space-x-2 shadow-lg
                           hover:from-red-500 hover:to-blue-500 transition-all duration-300"
                >
                  <span>Contact</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </MotionDiv>
              </Link>
            </div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
}

export default memo(LatestNewsHighlight)
