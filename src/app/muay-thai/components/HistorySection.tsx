"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { useInView } from "framer-motion"

const HistorySection = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const contentVariants = {
    collapsed: {
      height: "auto",
      maxHeight: "400px",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    expanded: {
      height: "auto",
      maxHeight: "none",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  const paragraphs = [
    {
      title: "Oorsprong",
      content: "Muay Thai, ook wel Thaiboksen genoemd, is een vechtsport uit het hedendaagse Thailand waarvan de oorsprong meer dan 1000 jaar teruggaat. In die tijd werd het gebruikt in oorlogssituaties om het land te beschermen tegen invallen en om de koning te beschermen."
    },
    {
      title: "Ontwikkeling",
      content: "De Thaise soldaten vochten met twee zwaarden. Deze gewapende gevechtskunst werd 'Krabi Krabong' genoemd. Wanneer de soldaten hun zwaarden verloren hadden, gingen zij verder met het ongewapende gevecht: Muay Thai, oftewel 'Thais vechten'. De bedoeling was om de 8 harde delen van het lichaam als wapens te gebruiken."
    },
    {
      title: "Evolutie", 
      content: "In de loop der tijd ontwikkelden zich verschillende stijlen, afkomstig uit verschillende regio's van het Thaise rijk. De gevechtskunst werd zo populair dat het niet alleen meer door soldaten werd beoefend, maar ook door burgers. Er werden wedstrijden georganiseerd tussen verschillende scholen en regio's.",
      expanded: "Deze wedstrijden waren echter niet te vergelijken met de huidige wedstrijden. Zo was er geen boksring, waren er geen rondes en geen gewichtsklassen. Als twee vechters akkoord gingen met een wedstrijd, werd er één ronde gevochten totdat er één opgaf of knock-out ging."
    },
    {
      title: "Modernisering",
      content: "Daarom werden er in 1929 nieuwe regels ingevoerd. Er kwamen gewichtsklassen en 5 rondes van 3 minuten, waarna er op punten werd beslist. De wedstrijden vonden vanaf nu ook plaats in een boksring.",
      expanded: "Ook werd er nu gebruik gemaakt van bokshandschoenen in plaats van touwen die om de handen werden gewikkeld. Dit heeft de sport zo veranderd dat er inmiddels sprake is van twee takken: Muay Boran, de oude stijl, en Muay Thai, de 'nieuwe' wedstrijdsport."
    },
    {
      title: "Internationale Erkenning",
      content: "Sinds de Tweede Wereldoorlog is het hard gegaan met Muay Thai. De effectiviteit van de sport sprak zich rond in vechtsportland.",
      expanded: "Verscheidene delegaties van vechtsporters uit Japan, de Filipijnen en China werden allemaal verslagen. Onder de indruk van de hardheid van de Thai besloten de Japanners hun kennis te combineren met de trainingsmethodes en de technieken van de Thai. Om een groter publiek aan te spreken verwijderden zij de harde elleboogtechnieken, het clinchen en de Thaise rituelen en werd het 'kickboksen' genoemd. Ondanks de grotere bekendheid van het kickboksen tegenwoordig worden de wedstrijdvechters in Thailand nog altijd beschouwd als de beste en hardste ter wereld."
    }
  ]

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="pt-32 pb-8 sm:pb-16 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden
                     relative z-10"
        >
          {/* Timeline Container */}
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 opacity-50" />
            
            <div className="relative p-4 sm:p-8 space-y-6 sm:space-y-8">
              {paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${!isExpanded && index > 2 ? "hidden" : ""}`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    {/* Timeline dot and line */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex-shrink-0"
                      />
                      {index !== paragraphs.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-red-500 to-blue-500 opacity-20" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                        {paragraph.title}
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {paragraph.content}
                      </p>
                      {isExpanded && paragraph.expanded && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2"
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
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            )}
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.div
            className="p-4 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-blue-600
                         text-white font-semibold rounded-xl shadow-md
                         hover:from-red-500 hover:to-blue-500
                         transform transition-all duration-200
                         flex items-center justify-center space-x-2"
            >
              <span>{isExpanded ? "Lees Minder" : "Lees Meer"}</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
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
