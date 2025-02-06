'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white"
      style={{ contain: 'content' }}
    >
      {/* Background subtle patterns - optimized for mobile */}
      <div 
        className="absolute inset-0 bg-grid-gray-100/20 bg-repeat pointer-events-none"
        style={{ willChange: 'transform', contain: 'paint' }}
      />
      
      {/* Decorative elements - combined gradients for better performance */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', contain: 'paint' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 [mask-image:radial-gradient(ellipse_at_top,white,transparent)]" />
      </div>

      {children}
    </motion.div>
  )
}

export default PageWrapper
