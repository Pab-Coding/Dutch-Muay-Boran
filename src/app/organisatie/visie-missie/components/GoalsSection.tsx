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
        staggerChildren: 0.1,
        delayChildren: 0.2
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
      className="relative py-8 sm:py-16 overflow-hidden"
    >
      {/* Header with icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-16"
      >
        <div className="inline-block mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center">
            <FaFlagCheckered className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>

        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent px-2"
        >
          Onze Doelstellingen
        </motion.h2>
      </motion.div>

      {/* Goals grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto px-4"
      >
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
          >
            {/* Card with simplified effects */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-gray-100">
              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-5`} />

              <div className="p-4 sm:p-6">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${goal.color} flex items-center justify-center mb-3 sm:mb-4`}
                >
                  <goal.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {goal.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {goal.text}
                </p>

                {/* Simplified border - hidden on mobile */}
                <div
                  className="hidden sm:block absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500/20 to-blue-500/20"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative element - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-32 blur-3xl bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20"
      />
    </motion.section>
  )
}

export default GoalsSection
