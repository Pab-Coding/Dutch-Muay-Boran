// src/app/organisatie/sportscholen/components/PageWrapper.tsx
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
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Efectos de fondo decorativos */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Efecto de degradado inferior */}
      <div className="fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
    </motion.div>
  )
}

export default PageWrapper