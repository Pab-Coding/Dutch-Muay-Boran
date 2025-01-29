'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGlobe } from 'react-icons/fa'

const partners = [
  {
    title: 'Muay Boran internationaal',
    organizations: [
      {
        name: 'Kru Muaythai Association',
        url: 'https://www.krumuaythai.or.th/',
        description: 'Officiële registratie en certificering van khan-graden',
        color: 'from-blue-600 to-blue-800'
      },
      {
        name: 'World Muaythai Council',
        url: 'https://wmc.muaythai.sport/',
        description: 'Wereldwijde promotie en ontwikkeling van Muay Thai',
        color: 'from-red-600 to-red-800'
      },
      {
        name: 'International Federation of Muaythai Associations',
        url: 'https://muaythai.sport/',
        description: 'Internationale competities en sportieve ontwikkeling',
        color: 'from-purple-600 to-purple-800'
      }
    ]
  },
  {
    title: 'Nationaal',
    organizations: [
      {
        name: 'Federatie Oosterse Gevechtskunsten (FOG)',
        url: 'https://www.fogevechtskunsten.nl/over-FOG.html',
        description: 'Nederlandse koepelorganisatie voor oosterse vechtsporten',
        color: 'from-green-600 to-green-800'
      }
    ]
  }
]

const PartnersGrid = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  // Section animation
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  }

  // Card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  // Hover animation for cards
  const cardHoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <motion.section
      className="w-full mt-4 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="relative bg-white/80 backdrop-blur-sm rounded-2xl 
                   shadow-xl border border-gray-200/50 overflow-hidden"
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(219, 39, 119, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(219, 39, 119, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="p-8 md:p-12 relative space-y-12">
            {/* Intro text */}
            <motion.div
              variants={sectionVariants}
              className="text-center max-w-3xl mx-auto mb-8"
            >
              <motion.p 
                className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed"
                variants={cardVariants}
              >
                <span className="bg-gradient-to-r from-red-600 to-blue-600 
                             bg-clip-text text-transparent">
                  Ontdek meer over onze partners
                </span>{' '}
                door op hun kaarten te klikken — Elke organisatie speelt een{' '}
                <span className="bg-gradient-to-r from-blue-600 to-red-600 
                             bg-clip-text text-transparent">
                  belangrijke rol
                </span>{' '}
                in de ontwikkeling van Muay Thai en Muay Boran
              </motion.p>
            </motion.div>

            {/* Partner sections */}
            {partners.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={sectionVariants}
                className="space-y-6"
              >
                <motion.h2 
                  variants={cardVariants}
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r 
                           from-red-600 to-blue-600 bg-clip-text text-transparent"
                >
                  {category.title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.organizations.map((org) => (
                    <motion.div
                      key={org.name}
                      variants={cardVariants}
                      whileHover="hover"
                      whileTap="tap"
                      custom={categoryIndex}
                    >
                      <Link 
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          variants={cardHoverVariants}
                          className="h-full bg-gradient-to-br from-gray-50 to-white 
                                   rounded-xl shadow-lg overflow-hidden border 
                                   border-gray-200/50 transform-gpu"
                        >
                          {/* Color bar */}
                          <motion.div 
                            className={`h-2 bg-gradient-to-r ${org.color}`}
                            whileHover={{
                              scaleX: 1.05,
                              transition: { duration: 0.3 }
                            }}
                          />
                          
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <motion.h3
                                className="text-xl font-semibold text-gray-800 
                                         transition-colors duration-300"
                                variants={{
                                  hover: {
                                    background: "linear-gradient(to right, #DC2626, #2563EB)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                  }
                                }}
                              >
                                {org.name}
                              </motion.h3>
                              
                              <motion.div
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.3 }}
                                className="text-blue-600 transition-colors duration-300"
                              >
                                <FaGlobe className="w-5 h-5" />
                              </motion.div>
                            </div>

                            <motion.p 
                              className="text-gray-600 transition-colors duration-300"
                              variants={{
                                hover: { color: "#374151" }
                              }}
                            >
                              {org.description}
                            </motion.p>

                            {/* Visit website indicator */}
                            <motion.div
                              className="mt-4 flex items-center text-sm text-gray-500
                                       transition-colors duration-300"
                              variants={{
                                hover: { color: "#2563EB" }
                              }}
                            >
                              <motion.span
                                className="flex items-center"
                                animate={{
                                  x: [0, 4, 0]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                Bezoek website
                                <svg 
                                  className="w-4 h-4 ml-1" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M9 5l7 7-7 7" 
                                  />
                                </svg>
                              </motion.span>
                            </motion.div>

                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r 
                                       from-transparent via-white/20 to-transparent
                                       -skew-x-45 translate-x-[-150%]"
                              variants={{
                                hover: {
                                  translateX: "150%",
                                  transition: {
                                    duration: 0.8,
                                    ease: "easeInOut"
                                  }
                                }
                              }}
                            />
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PartnersGrid