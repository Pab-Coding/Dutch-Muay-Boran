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
      'Anatomische Basis',
      'De wervelkolom',
      'De schoudergordel',
      'Ellebooggewrichten',
      'Pols- en handgewrichten',
      'Bekken en heupgewricht',
      'Kniegewricht',
      'Enkel- en voetgewricht'
    ]
  },
  {
    title: 'Fysiologie',
    icon: HeartIcon,
    items: [
      'Hart en bloedvaten',
      'Het ademhalingsstelsel',
      'Het spijsverteringsstelsel',
      'Uitscheiding en warmteregulatie',
      'Het zenuwstelsel',
      'Inspanningsfysiologie'
    ]
  },
  {
    title: 'Methodiek/didactiek',
    icon: AcademicCapIcon,
    items: [
      'Inleiding in de didactiek en methodiek',
      'Beginsituatie en doelstelling',
      'Onderwijsleerstof',
      'Didactische werkvormen en leeractiviteiten',
      'Onderwijsmiddelen en evaluatie',
      'Praktijkopdrachten en thema\'s'
    ]
  },
  {
    title: 'Praktijk',
    icon: UserGroupIcon,
    items: [
      'Eigen vaardigheid in Muay Thai en Muay Boran',
      'Het eigen maken van de Thaise benamingen',
      'Geschiedenis van Muay Thai',
      'Cherng mahd, sok, khao, teep en dteh',
      'Mae Mai technieken',
      'Look Mai technieken',
      'Scheidsrechter & jurycursus',
      'Stage van 10 uur'
    ]
  },
  {
    title: 'Eindexamen',
    icon: CheckBadgeIcon,
    items: [
      'Examen voor de 6e khan',
      'Theoretisch examen',
      'Praktisch examen',
      'Didactische vaardigheden evaluatie'
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
      className="w-full py-8 sm:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent px-4"
        >
          Opleidingsmodules
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16 px-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-full
                         transform hover:scale-[1.02] transition-all duration-300
                         max-w-full"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-2 rounded-xl bg-gradient-to-br from-red-100 to-blue-100"
                  >
                    <module.icon className="w-8 h-8 text-gray-800" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{module.title}</h3>
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
                      <span className="h-2 w-2 mt-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
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
          className="w-full bg-gradient-to-r from-red-600/5 via-transparent to-blue-600/5 
                     rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col justify-center items-stretch gap-4 sm:gap-6">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full"
              >
                <Link href="/opleidingen/inschrijven?course=assistant">
                  <div className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 
                                text-white font-semibold rounded-xl shadow-lg
                                hover:from-red-500 hover:to-red-600 
                                flex items-center justify-center gap-2
                                transform transition-all duration-300 text-center">
                    <span>Direct Inschrijven</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full"
              >
                <Link href="/examens">
                  <div className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600/10 to-blue-700/10
                                backdrop-blur-sm border-2 border-blue-600 text-blue-600 
                                font-semibold rounded-xl hover:bg-blue-600 hover:text-white
                                flex items-center justify-center gap-2
                                transform transition-all duration-300 text-center">
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
              className="mt-8 text-center px-4"
            >
              <p className="text-gray-600 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span>Voor meer informatie:</span>
                <span className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <a href="mailto:info@dmbf.nl" className="text-blue-600 hover:underline whitespace-nowrap">
                    info@dmbf.nl
                  </a>
                  <span className="hidden sm:inline">|</span>
                  <a href="mailto:mtbacademy.nl@gmail.com" className="text-blue-600 hover:underline whitespace-nowrap">
                    mtbacademy.nl@gmail.com
                  </a>
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ModulesSection
