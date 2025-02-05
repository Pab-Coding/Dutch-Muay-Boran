"use client";

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { MotionDiv } from '@/components/shared/MotionWrapper'
import { FaMedal } from 'react-icons/fa'
import { GiBoxingGlove } from 'react-icons/gi'
import { useRef } from 'react'

const titleVariants = {
  hidden: {
    opacity: 0,
    rotateX: 90,
    y: -50
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -200
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      ease: "easeOut"
    }
  }
}

const iconVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5
    }
  }
}

const cardContentVariants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardElementVariants = {
  initial: { y: 0, opacity: 1 },
  hover: { 
    y: -3,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const courses = [
  {
    title: 'Trainer / Coach niveau 3',
    startDate: 'Februari 2025',
    description: 'Start je reis als Muay Thai Boran instructeur met onze Trainer / Coach opleiding',
    icon: FaMedal,
    path: '/opleidingen/trainer-niveau-3',
    color: 'from-red-700 to-red-900'
  },
  {
    title: 'Leraar niveau 4 & 5',
    startDate: 'Februari 2025',
    description: 'Word een gecertificeerde Muay Thai Boran leraar niveau 4 & 5',
    icon: GiBoxingGlove,
    path: '/opleidingen/leraar-niveau-4&5',
    color: 'from-blue-700 to-blue-900'
  }
]

const OpleidingenSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.3 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? 'visible' : 'hidden'}
          className="text-4xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-gray-800 via-blue-600 to-gray-800 
                     mb-8 text-center tracking-tight"
        >
          Onze Opleidingen
        </motion.h2>

        {/*
          Changed the grid container to a flex container.
          - "flex" with "flex-wrap" allows the cards to wrap if needed.
          - "justify-center" centers the cards horizontally.
          - "gap-6" sets consistent spacing between the cards.
        */}
        <div className="flex flex-wrap justify-center gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.4 }}
              whileHover={{ 
                scale: 1.02, 
                translateY: -5,
                rotateZ: 1,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)"
              }}
              className="relative group w-full max-w-sm rounded-xl shadow-lg overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${course.color} 
                            opacity-90 transform transition-all duration-500 
                            group-hover:opacity-100 group-hover:bg-gradient-to-br`}
              />

              <motion.div 
                className="relative flex flex-col justify-between p-6 text-white"
                variants={cardContentVariants}
                initial="initial"
                whileHover="hover"
              >
                {/* Top section: icon, title, date, description */}
                <div>
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="mb-6"
                  >
                    <motion.div variants={cardElementVariants}>
                      <course.icon
                        size={48}
                        className="transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.h3 
                    variants={cardElementVariants}
                    className="text-xl font-bold mb-4 tracking-wide"
                  >
                    {course.title}
                  </motion.h3>

                  <motion.div 
                    variants={cardElementVariants}
                    className="flex items-center mb-4 text-gray-100"
                  >
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Start: {course.startDate}</span>
                  </motion.div>

                  <motion.p 
                    variants={cardElementVariants}
                    className="text-gray-100 font-light"
                  >
                    {course.description}
                  </motion.p>
                </div>

                {/* Bottom buttons */}
                <motion.div variants={cardElementVariants} className="mt-6">
                  <div className="flex flex-col gap-4">
                    <Link href="/opleidingen/cursusdata">
                      <MotionDiv
                        variants={cardElementVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 w-fit px-4 py-2
                                   bg-gradient-to-r from-red-500/30 to-blue-500/30
                                   hover:from-red-500/40 hover:to-blue-500/40
                                   backdrop-blur-sm rounded-lg
                                   cursor-pointer transition-all duration-300"
                      >
                        <CalendarIcon className="h-5 w-5 text-white" />
                        <span className="text-white font-medium">Zie geplande data</span>
                      </MotionDiv>
                    </Link>

                    <div className="flex items-center gap-4">
                      <Link href="/opleidingen/inschrijven">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold 
                                     flex items-center space-x-2 hover:bg-gray-100 transition-colors
                                     shadow-md hover:shadow-xl min-w-[120px]"
                        >
                          <span>Inschrijven</span>
                          <ArrowRightIcon className="h-4 w-4" />
                        </motion.button>
                      </Link>

                      <Link href={course.path}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 border-2 border-white text-white rounded-lg font-semibold 
                                     hover:bg-white hover:text-gray-900 transition-all
                                     backdrop-blur-sm hover:shadow-xl min-w-[120px]"
                        >
                          Meer Info
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default OpleidingenSection
