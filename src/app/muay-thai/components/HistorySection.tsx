'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const HistorySection = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const contentVariants = {
    collapsed: {
      height: "280px",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  const paragraphs = [
    {
      title: "Oorsprong",
      content: "Muay Thai Boran, ook wel Thaiboksen genoemd, is een vechtsport uit het hedendaagse Thailand waarvan de oorsprong meer dan 1000 jaar teruggaat. In die tijd werd het gebruikt in oorlogssituaties om het land te beschermen tegen invallen en om de koning te beschermen."
    },
    {
      title: "Ontwikkeling",
      content: "De Thaise soldaten vochten met twee zwaarden. Deze gewapende gevechtskunst werd 'Krabi Krabong' genoemd. Wanneer de soldaten hun zwaarden verloren hadden, gingen zij verder met het ongewapende gevecht: Muay Thai Boran, oftewel 'Thais vechten'. De bedoeling was om de 8 harde delen van het lichaam als wapens te gebruiken."
    },
    {
      title: "Evolutie",
      content: "In de loop der tijd ontwikkelden zich verschillende stijlen, afkomstig uit verschillende regio's van het Thaise rijk. De gevechtskunst werd zo populair dat het niet alleen meer door soldaten werd beoefend, maar ook door burgers. Er werden wedstrijden georganiseerd tussen verschillende scholen en regio's.",
      expanded: "Deze wedstrijden waren echter niet te vergelijken met de huidige wedstrijden. Zo was er geen boksring, waren er geen rondes en geen gewichtsklassen. Als twee vechters akkoord gingen met een wedstrijd, werd er één ronde gevochten totdat er één opgaf of knock-out ging."
    },
    {
      title: "Modernisering",
      content: "Daarom werden er in 1929 nieuwe regels ingevoerd. Er kwamen gewichtsklassen en 5 rondes van 3 minuten, waarna er op punten werd beslist. De wedstrijden vonden vanaf nu ook plaats in een boksring.",
      expanded: "Ook werd er nu gebruik gemaakt van bokshandschoenen in plaats van touwen die om de handen werden gewikkeld. Dit heeft de sport zo veranderd dat er inmiddels sprake is van twee takken: Muay Boran, de oude stijl, en Muay Thai Boran, de 'nieuwe' wedstrijdsport."
    },
    {
      title: "Internationale Erkenning",
      content: "Sinds de Tweede Wereldoorlog is het hard gegaan met Muay Thai Boran. De effectiviteit van de sport sprak zich rond in vechtsportland.",
      expanded: "Verscheidene delegaties van vechtsporters uit Japan, de Filipijnen en China werden allemaal verslagen. Onder de indruk van de hardheid van de Thai besloten de Japanners hun kennis te combineren met de trainingsmethodes en de technieken van de Thai. Om een groter publiek aan te spreken verwijderden zij de harde elleboogtechnieken, het clinchen en de Thaise rituelen en werd het 'kickboksen' genoemd. Ondanks de grotere bekendheid van het kickboksen tegenwoordig worden de wedstrijdvechters in Thailand nog altijd beschouwd als de beste en hardste ter wereld."
    }
  ]

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="pt-32 pb-16 px-4" // Ajustado el padding-top para evitar superposición
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden
                     relative z-10" // Añadido z-index para asegurar el orden correcto
        >
          {/* Timeline Container */}
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 opacity-50" />
            
            <div className="relative p-8 space-y-8">
              {paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative ${!isExpanded && index > 2 ? 'hidden' : ''}`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Timeline dot and line */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      />
                      {index !== paragraphs.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-red-500 to-blue-500 opacity-20" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                        {paragraph.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {paragraph.content}
                      </p>
                      {isExpanded && paragraph.expanded && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="text-gray-700 leading-relaxed mt-2"
                        >
                          {paragraph.expanded}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gradient overlay for collapsed state */}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            )}
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.div
            className="p-4 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-blue-600
                         text-white font-semibold rounded-xl shadow-lg
                         hover:from-red-500 hover:to-blue-500
                         transform transition-all duration-300
                         flex items-center space-x-2"
            >
              <span>{isExpanded ? 'Lees Minder' : 'Lees Meer'}</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HistorySection