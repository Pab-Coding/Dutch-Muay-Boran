'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  BeakerIcon,
  HeartIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const modules = [
  {
    title: 'Anatomie',
    icon: BeakerIcon,
    items: [
      'Geavanceerde Bewegingsanalyse',
      'Diepgaande analyse van Muay Thai / Muay Boran technieken',
      'Biomechanische principes'
    ]
  },
  {
    title: 'Fysiologie - Medische Kennis',
    icon: HeartIcon,
    items: [
      'EHBSO: Eerste Hulp Bij Sportongelukken',
      'Sportblessure analyse en behandeling',
      'Presentatievaardigheden medische casuïstiek'
    ]
  },
  {
    title: 'Pedagogiek',
    icon: AcademicCapIcon,
    items: [
      'Gevorderde Pedagogische Vaardigheden',
      'Ontwikkeling pedagogisch actieplan',
      'Specialistische begeleiding (bijvoorbeeld ADHD)',
      'Adaptief lesgeven'
    ]
  },
  {
    title: 'Praktijk',
    icon: UserGroupIcon,
    items: [
      'Thaise terminologie beheersing',
      'Mae Mai technieken',
      'Look Mai technieken',
      'Scheidsrechter & Jurycursus',
      'Uitgebreide stage (20 uur)'
    ]
  },
  {
    title: 'Eindexamen',
    icon: CheckBadgeIcon,
    items: [
      'Examen voor de 10e khan',
      'Theoretisch examen',
      'Praktisch examen',
      'Pedagogische vaardigheden evaluatie'
    ]
  }
]

const ModulesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="w-full py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Opleidingsmodules
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden
                         transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-2 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100"
                  >
                    <module.icon className="w-8 h-8 text-gray-800" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
                </div>

                <motion.ul
                  className="space-y-3"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {module.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      variants={itemVariants}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="h-2 w-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5
                     rounded-2xl p-8 shadow-lg backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <Link href="/opleidingen/inschrijven?course=zelfstandig">
                  <div className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700
                                text-white font-semibold rounded-xl shadow-lg
                                hover:from-blue-500 hover:to-purple-600
                                flex items-center justify-center gap-2
                                transform transition-all duration-300">
                    <span>Direct Inschrijven</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <Link href="/examens">
                  <div className="w-full px-8 py-4 bg-gradient-to-r from-purple-600/10 to-blue-700/10
                                backdrop-blur-sm border-2 border-purple-600 text-purple-600
                                font-semibold rounded-xl hover:bg-purple-600 hover:text-white
                                flex items-center justify-center gap-2
                                transform transition-all duration-300">
                    <span>Exameninformatie</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center space-y-2"
            >
              <div className="flex items-center justify-center gap-2 text-gray-800">
                <CalendarIcon className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Start: Januari 2025</span>
              </div>
             
              <p className="text-gray-600">
                Voor meer informatie: <a href="mailto:info@dmbf.nl"
                                      className="text-purple-600 hover:underline">
                                        info@dmbf.nl
                                      </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ModulesSection