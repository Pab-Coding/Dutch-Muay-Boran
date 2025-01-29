'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaHandHoldingHeart, 
  FaBalanceScale, 
  FaUsers, 
  FaGraduationCap 
} from 'react-icons/fa'

const ValuesList = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  const values = [
    {
      icon: FaHandHoldingHeart,
      title: "Authenticiteit",
      description: "Behoud van traditionele Thaise vechtsporttechnieken en waarden",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: FaBalanceScale,
      title: "Kwaliteit",
      description: "Hoogwaardige training en professionele begeleiding op alle niveaus",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: FaUsers,
      title: "Toegankelijkheid",
      description: "Sport voor iedereen, ongeacht niveau of achtergrond",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: FaGraduationCap,
      title: "Ontwikkeling",
      description: "Focus op fysieke, mentale en sociale groei",
      gradient: "from-red-500 to-blue-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative py-16"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 rounded-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-4"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
        >
          Onze Kernwaarden
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-lg transition-all duration-300" />

              <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white shadow-lg">
                <div className="flex items-start space-x-4">
                  {/* Icon container with gradient background */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${value.gradient} origin-left`}
                />
              </div>

              {/* Hover effect highlight */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-20 blur-3xl bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20"
        />
      </motion.div>
    </motion.section>
  )
}

export default ValuesList