'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const TeamSection = () => {
  const [showContent, setShowContent] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setShowContent(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="/images/team-photo.png"
          alt="Dutch Muay Boran Foundation Team"
          fill
          className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
          priority
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 80vw,
                 70vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <motion.div
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
          >
            <motion.h2
              initial={{ 
                opacity: 0,
                filter: "blur(10px)",
                y: -10
              }}
              animate={{ 
                opacity: 1,
                filter: "blur(0px)",
                y: 0
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
              className="text-5xl font-bold bg-gradient-to-r from-slate-100 via-blue-400 to-slate-100 bg-clip-text text-transparent tracking-tight"
            >
              Welkom bij Dutch Muay Boran Foundation
            </motion.h2>
          </motion.div>

          <motion.div 
            className="absolute bottom-[-20px] left-0 p-12 text-white max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed mb-4 text-gray-100"
            >
              Wij zijn de toonaangevende organisatie gespecialiseerd in het onderwijzen en behouden van authentiek Muay Thai en Muay Boran. Wij zijn erkend door de World Muaythai Federation (WMF) en de International Muay Boran Academy.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base leading-relaxed text-gray-200 mb-6"
            >
              Ons team van gekwalificeerde leraren en instructeurs houdt de essentie van de Thaise vechtkunsten levend, waarbij de oude traditie van Muay Boran wordt gecombineerd met de moderne effectiviteit van Muay Thai.
            </motion.p>
            <Link href="/organisatie">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative px-8 py-3 rounded-xl
                         bg-gradient-to-r from-blue-600 to-blue-800
                         text-white text-base font-semibold shadow-lg
                         hover:shadow-blue-500/20 hover:shadow-2xl
                         transform-gpu transition-all duration-300
                         overflow-hidden group"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                           bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400
                           bg-[length:200%_auto] animate-shimmer
                           transition-opacity duration-300" 
                />
                <span className="relative inline-flex items-center gap-2">
                  Ontdek Meer
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default TeamSection