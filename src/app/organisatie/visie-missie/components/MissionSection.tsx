'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaFlag, FaChalkboardTeacher, FaTrophy, FaHandshake } from 'react-icons/fa'

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  const goals = [
    {
      icon: FaChalkboardTeacher,
      text: 'Het professionaliseren van de sport in Nederland',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FaHandshake,
      text: 'Het opleiden van gekwalificeerde leraren met kennis van didactiek, pedagogiek en Thaise traditie',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaTrophy,
      text: 'Het organiseren van zowel professionele als amateur wedstrijden',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaFlag,
      text: 'Het uitdragen van de positieve aspecten van deze vechtsport',
      color: 'from-red-500 to-blue-600'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative py-8 sm:py-12 overflow-hidden"
    >
      {/* Background decorative elements - hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Mission Statement */}
        <motion.div
          variants={cardVariants}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
          >
            Missie
          </motion.h2>
          <motion.p
            className="text-base sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2"
          >
            De Dutch Muay Boran Foundation wil Muay Thai en Muay Boran naar een breder publiek brengen. 
            Dit doen we door niet alleen op topsport te focussen, maar juist ook op breedtesport in te zetten. 
            Een sterke bond met rijkserkenning is hiervoor essentieel
          </motion.p>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-xl transform transition-transform duration-300" />
              
              <div className="relative bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${goal.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <goal.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      {goal.text}
                    </p>
                  </div>
                </div>

                {/* Decorative line - hidden on mobile */}
                <div
                  className="hidden sm:block absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500/30 to-blue-500/30"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 }}
          className="hidden sm:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-20 blur-3xl bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20"
        />
      </div>
    </motion.section>
  )
}

export default MissionSection
