'use client'

import { motion } from 'framer-motion'

interface KhanCardProps {
  number: number
  title: string
  description: string[]
  color: string
}

const KhanCard = ({ number, title, description, color }: KhanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${color}`}
    >
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>
        
        <div className="space-y-2">
          {description.map((item, index) => (
            <p key={index} className="text-gray-600">
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default KhanCard