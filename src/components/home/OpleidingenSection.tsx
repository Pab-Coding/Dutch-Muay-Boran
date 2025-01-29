'use client'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { FaMedal } from 'react-icons/fa'
import { GiBoxingGlove } from 'react-icons/gi'
import { HiOutlineAcademicCap } from 'react-icons/hi'
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
      duration: 1,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -200,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.3,
      ease: "easeOut"
    }
  })
}

const iconVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
}

const courses = [
  {
    title: 'Assistent Muay Thai Boran leraar',
    startDate: 'Januari 2025',
    description: 'Start je reis als Muay Thai Boran instructeur met onze assistant-lerarenopleiding',
    icon: FaMedal,
    path: '/opleidingen/assistent-leraar',
    color: 'from-red-700 to-red-900'
  },
  {
    title: 'Zelfstandig Muay Thai Boran leraar',
    startDate: 'Januari 2025',
    description: 'Word een gecertificeerde zelfstandige Muay Thai Boran leraar',
    icon: GiBoxingGlove,
    path: '/opleidingen/zelfstandig-leraar',
    color: 'from-blue-700 to-blue-900'
  },
  {
    title: 'Jury & Scheidsrechtercursus',
    startDate: 'Februari 2025',
    description: 'Specialiseer je als official in Muay Thai wedstrijden',
    icon: HiOutlineAcademicCap,
    path: '/opleidingen/jury-scheidsrechter',
    color: 'from-purple-700 to-purple-900'
  }
]

const OpleidingenSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardRefs = useRef(courses.map(() => useRef(null)))
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" })
  
  return (
    <section ref={sectionRef} className="w-full px-4 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r 
                     from-gray-800 via-blue-600 to-gray-800 mb-12 text-center tracking-tight"
        >
          Onze Opleidingen
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              ref={cardRefs.current[index]}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${course.color} rounded-xl opacity-90 
                            transform transition-all duration-300 group-hover:opacity-100 shadow-lg`}>
              </div>
              
              <div className="relative p-6 text-white">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="mb-4"
                >
                  <course.icon 
                    size={48} 
                    className="transform group-hover:scale-110 transition-transform duration-300" 
                  />
                </motion.div>

                <h3 className="text-xl font-bold mb-2 tracking-wide">{course.title}</h3>
                
                <div className="flex items-center mb-4 text-gray-100">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span className="font-medium">Start: {course.startDate}</span>
                </div>
                
                <p className="text-gray-100 mb-6 font-light">{course.description}</p>
                
                <div className="flex gap-4">
                <Link href="/opleidingen/inschrijven">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold 
                               flex items-center space-x-2 hover:bg-gray-100 transition-colors
                               shadow-md hover:shadow-xl"
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
                               backdrop-blur-sm hover:shadow-xl"
                    >
                      Meer Info
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default OpleidingenSection