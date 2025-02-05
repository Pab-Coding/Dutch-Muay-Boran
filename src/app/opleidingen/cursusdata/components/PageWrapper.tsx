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
      className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background subtle patterns */}
      <div className="absolute inset-0 bg-grid-gray-100/20 bg-repeat pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent" />
      </div>

      {children}
    </motion.div>
  )
}

export default PageWrapper