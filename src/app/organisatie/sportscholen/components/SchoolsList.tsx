// src/app/organisatie/sportscholen/components/SchoolsList.tsx
'use client'

import { motion } from 'framer-motion'
import { GiBoxingGlove } from 'react-icons/gi'

const schools = [
  "Martial Arts Venlo",
  "Fedu sport Lisse",
  "Dieselnoi Gym Breda",
  "Muaythai Vivas Maastricht",
  "Possitiv Kick Leeuwaarden",
  "Thai boxing Vlissingen",
  "Vos Gym Amsterdam",
  "FFC Amsterdam",
  "Chakuriki / Xena sport Amsterdam",
  "Kamil Gym Heerlen",
  "Webova Gym Assendelf",
  "Lumpini Gym Roermond",
  "Biko Gym Roermond"
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

const SchoolsList = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schools.map((school, index) => (
          <motion.div
            key={school}
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 10 }}
            className="relative group"
          >
            {/* Card container */}
            <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm
                          border border-gray-200 shadow-lg
                          hover:shadow-xl transition-all duration-300">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-blue-600/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative p-4 flex items-center space-x-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <GiBoxingGlove className="w-6 h-6 text-red-600 group-hover:text-blue-600 
                                          transition-colors duration-300" />
                </motion.div>
                
                <span className="text-lg text-gray-800 font-medium">
                  {school}
                </span>
              </div>

              {/* Animated border */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 
                          bg-gradient-to-r from-red-500 to-blue-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default SchoolsList