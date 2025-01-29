'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaFlagCheckered, 
  FaCrown, 
  FaUserGraduate, 
  FaHandshake, 
  FaChartLine 
} from 'react-icons/fa'

const GoalsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  const goals = [
    {
      icon: FaCrown,
      title: "Wedstrijdsport",
      text: "Organisatie van professionele en amateur wedstrijden onder authentieke Muay Thai regels",
      color: "from-amber-500 to-red-500"
    },
    {
      icon: FaUserGraduate,
      title: "Opleiding",
      text: "Ontwikkeling van gekwalificeerde leraren met diepgaande kennis van de sport",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: FaHandshake,
      title: "Samenwerking",
      text: "Versterking van banden met internationale Muay Thai organisaties",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaChartLine,
      title: "Groei",
      text: "Bevordering van de sport op zowel recreatief als competitief niveau",
      color: "from-green-500 to-blue-500"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative py-16"
    >
      {/* Header with floating icon */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="inline-block mb-6"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center">
            <FaFlagCheckered className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <motion.h2
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
        >
          Onze Doelstellingen
        </motion.h2>
      </motion.div>

      {/* Goals grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4"
      >
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            {/* Card with glassmorphism effect */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="p-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${goal.color} flex items-center justify-center mb-4`}
                >
                  <goal.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {goal.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  {goal.text}
                </p>

                {/* Animated border */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${goal.color} transform origin-left`}
                />
              </div>
            </div>

            {/* Floating particles effect */}
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.5
              }}
              className={`absolute -z-10 w-32 h-32 bg-gradient-to-br ${goal.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 -bottom-16 -right-16`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Final decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-32 blur-3xl bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20"
      />
    </motion.section>
  )
}

export default GoalsSection