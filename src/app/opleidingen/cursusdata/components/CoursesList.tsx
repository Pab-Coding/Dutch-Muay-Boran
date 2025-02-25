'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
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
      { date: "19 april 2025", isExam: false },
      { date: "10 mei 2025", isExam: false },
      { date: "14 juni 2025", isExam: false },
      { date: "13 september 2025", isExam: false },
      { date: "11 oktober 2025", isExam: false },
      { date: "8 november 2025", isExam: false },
      { date: "13 december 2025", isExam: false },
      { date: "10 januari 2026", isExam: false },
      { date: "7 februari 2026", isExam: false },
      { date: "11 april 2026", isExam: true }
    ]
  },
  {
    title: "Leraar niveau 4 & 5",
    dates: [
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
      { date: "18 juli 2026", isExam: true }
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

// Optimized accordion animation variants
const accordionVariants = {
  open: { 
    opacity: 1,
    maxHeight: 2000, // Use a large fixed value instead of "auto"
    transition: { 
      opacity: { duration: 0.2, ease: "easeOut" },
      maxHeight: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] } // Custom easing for smoother animation
    }
  },
  closed: { 
    opacity: 0,
    maxHeight: 0,
    transition: { 
      opacity: { duration: 0.1, ease: "easeOut" },
      maxHeight: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }
    }
  }
}

// Simple fade animation for date items
const dateItemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.1 }
  }
}

const CoursesList = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear any existing timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleCourseClick = (courseTitle: string) => {
    // Prevent clicking during animation
    if (isAnimating) return
    
    setIsAnimating(true)
    
    // If clicking the same course, close it
    if (expandedCourse === courseTitle) {
      setExpandedCourse(null)
    } else {
      // If another course is open, close it first then open the new one
      setExpandedCourse(courseTitle)
    }
    
    // Reset animation lock after animation completes
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
    }, 350) // Slightly longer than our animation duration
  }

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
            {/* Course Card - with optimized animations */}
            <div className="relative overflow-hidden rounded-xl bg-white/80
                        border border-gray-200 shadow-lg cursor-pointer
                        hover:shadow-xl transition-all duration-300">
              {/* Clickable area */}
              <motion.div
                onClick={() => handleCourseClick(course.title)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
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
              </motion.div>
              
              {/* Static colored border instead of animated */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 
                            bg-gradient-to-r from-red-500 to-blue-500
                            ${expandedCourse === course.title ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                            transition-opacity duration-300`} />
            </div>

            {/* Dates Grid - with optimized animations */}
            <div className="overflow-hidden">
              <motion.div
                animate={expandedCourse === course.title ? "open" : "closed"}
                variants={accordionVariants}
                initial="closed"
                className="overflow-hidden"
                style={{ 
                  transformOrigin: "top center",
                  willChange: "opacity, max-height"
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-white/50 rounded-b-xl">
                  {course.dates.map((date, index) => (
                    <motion.div
                      key={date.date}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.2,
                        delay: index * 0.03 // Simple staggered effect
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                        transition: { duration: 0.2 }
                      }}
                      className={`p-4 rounded-lg shadow-md transition-all
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
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default CoursesList
