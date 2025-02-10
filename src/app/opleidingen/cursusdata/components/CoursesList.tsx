'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

interface CourseDate {
  date: string
  isExam: boolean
}

interface Course {
  title: string
  dates: CourseDate[]
}

const courses: Course[] = [
  {
    title: "Trainer / Coach niveau 3",
    dates: [
      { date: "15 maart 2025", isExam: false },
      { date: "19 april 2025", isExam: false },
      { date: "10 mei 2025", isExam: false },
      { date: "14 juni 2025", isExam: false },
      { date: "13 september 2025", isExam: false },
      { date: "11 oktober 2025", isExam: false },
      { date: "8 november 2025", isExam: false },
      { date: "13 december 2025", isExam: false },
      { date: "10 januari 2026", isExam: false },
      { date: "7 februari 2026", isExam: false },
      { date: "7 maart 2026", isExam: true }
    ]
  },
  {
    title: "Leraar niveau 4 & 5",
    dates: [
      { date: "22 maart 2025", isExam: false },
      { date: "26 april 2025", isExam: false },
      { date: "17 mei 2025", isExam: false },
      { date: "21 juni 2025", isExam: false },
      { date: "20 september 2025", isExam: false },
      { date: "18 oktober 2025", isExam: false },
      { date: "15 november 2025", isExam: false },
      { date: "20 december 2025", isExam: false },
      { date: "17 januari 2026", isExam: false },
      { date: "14 februari 2026", isExam: false },
      { date: "21 maart 2026", isExam: false },
      { date: "18 april 2026", isExam: false },
      { date: "16 mei 2026", isExam: false },
      { date: "20 juni 2026", isExam: true }
    ]
  }
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

const datesContainerVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  }
}

const dateItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const CoursesList = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.title}
            variants={itemVariants}
            className="relative group"
          >
            {/* Course Card */}
            <motion.div
              onClick={() => setExpandedCourse(expandedCourse === course.title ? null : course.title)}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl bg-white/80
                        border border-gray-200 shadow-lg cursor-pointer
                        hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-blue-600/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Course Title */}
              <div className="relative p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <FaCalendarAlt className="w-6 h-6 text-red-600 group-hover:text-blue-600 
                                            transition-colors duration-300" />
                  </motion.div>
                  <span className="text-xl text-gray-800 font-medium">
                    {course.title}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: expandedCourse === course.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500"
                >
                  ▼
                </motion.span>
              </div>

              {/* Animated border */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 
                          bg-gradient-to-r from-red-500 to-blue-500"
              />
            </motion.div>

            {/* Dates Grid */}
            <AnimatePresence mode="wait">
              {expandedCourse === course.title && (
                <motion.div
                  layout
                  variants={datesContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-white/50 rounded-b-xl">
                    {course.dates.map((date, index) => (
                      <motion.div
                        layout
                        key={date.date}
                        variants={dateItemVariants}
                        custom={index}
                        className={`p-4 rounded-lg shadow-md
                                  ${date.isExam 
                                    ? 'bg-gradient-to-r from-red-100 to-red-50 border-2 border-red-200' 
                                    : 'bg-white border border-gray-100'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-medium text-gray-800">
                            {date.date}
                          </span>
                          {date.isExam && (
                            <span className="text-sm font-semibold text-red-600 bg-red-100 
                                          px-2 py-1 rounded-full">
                              Examen
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default CoursesList
