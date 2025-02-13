"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect, useCallback, memo } from "react"
import { useInView } from "framer-motion"
import type { ReactElement } from 'react'

interface TimelineItem {
  title: string
  content: string
  expanded: string
}

// Move static content outside component
const paragraphs: TimelineItem[] = [
  {
    title: "Oorsprong en Definitie",
    content: "Muay Thai Boran is de moedersport van het moderne Muay Thai, de ringsport die over de hele wereld populair is vanwege zijn hardheid en effectiviteit. Het hedendaagse Muay Thai werd door de eeuwen heen ontwikkeld uit wat nu Muay Thai Boran genoemd wordt. 'Boran' betekent 'oud' of in het Engels 'ancient', en 'muay' betekent 'vechten' - letterlijk dus 'oud vechten'.",
    expanded: "In 1929 werden de nieuwe regels ingevoerd, die afgeleid zijn van het Westerse boksen. Gewichtsklassen werden ingevoerd, 5 rondes van 3 minuten en bokshandschoenen werden verplicht. Dit heeft de sport zo ingrijpend veranderd dat er een duidelijk verschil is ontstaan tussen het moderne sport-Muay Thai en de oude gevechtskunst Muay Boran."
  },
  {
    title: "Historische Ontwikkeling",
    content: "De naam 'Muay Boran', zoals de sport in het algemeen genoemd wordt, is relatief nieuw. Deze werd pas rond 1990 voor het eerst gebruikt. De technieken uit Muay Boran zijn daarentegen al eeuwen oud.",
    expanded: "In feite is Muay Boran een mix van verschillende oude krijgskunsten uit Thailand, zoals Muay Chaiya, Muay Korat en Muay Lopburi. Al deze stijlen baseren zich op dezelfde gevechtsprincipes maar verschillen in de uitvoering daarvan, afhankelijk van de regio waar de stijl ontstaan is. Zo zijn er de artistieke en dodelijke Hanuman-technieken (van de witte apenkoning) uit Muay Chaiya en de rechtopstaande technieken uit Muay Korat die in het Muay Boran-lesprogramma zijn opgenomen."
  },
  {
    title: "Moderne Aanpak",
    content: "Deze oude gevechtsprincipes en traditionele technieken, gecombineerd met de moderne wetenschappelijk bestudeerde trainingstechnieken uit het professionele thaiboksen, creëren een effectief en bruikbaar lesprogramma dat geschikt is voor moderne Westerse sporters en martial arts-enthousiastelingen.",
    expanded: "Daarom kan Muay Boran met recht een traditionele én moderne discipline genoemd worden."
  },
  {
    title: "Internationale Ontwikkeling",
    content: "Dankzij de inspanningen van Senator-Generaal Tienchai Sirisompan werd in Europa, onder de commissie van Thaise cultuur, de International Amateur Muay Thai Federation (I.A.M.T.F.) opgericht om de Thaise krijgskunsten in het buitenland te promoten.",
    expanded: "Hiervoor werd een internationale coördinator aangesteld: grootmeester Chinawooth Sirisompan (Master Woody), die gevestigd was in Manchester, England. Eén van zijn belangrijkste taken was te definiëren wat de best mogelijke manier voor niet-Thai was om de rijkdom aan Siamese krijgstradities aan te leren."
  },
  {
    title: "Modern Curriculum",
    content: "Het doel van grootmeester Sirisompan was dan ook het ontwikkelen van een coherent en begrijpelijk technisch lesprogramma voor traditioneel Muay Thai. Na verschillende pogingen patenteerde hij de eerste versie van zijn programma, dat onderverdeeld was in verschillende niveaus, genaamd 'Khan'.",
    expanded: "Dit programma vormde de basisstructuur voor het officiële curriculum dat nu gevolgd wordt door de Dutch Muay Boran Foundation (D.M.B.F.) en de International Muay Boran Academy (IMBA), waarbij de D.M.B.F. is aangesloten. Het is door dit programma en de constante samenwerking tussen grootmeester Sirisompan en de Italiaanse Arjarn Marco De Cesaris dat we vandaag de dag een systeem hebben dat de traditionele Siamese gevechtskunst perfect heeft afgestemd op de eisen van de Westerse beoefenaar: zelfverdediging, fitheid, zelfvertrouwen, culturele bagage en uiteraard het beoefenen van een harde vechtsport. De perfecte combinatie van het Oosten en het Westen."
  }
]

const HistorySection = (): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    const debouncedResize = debounce(checkMobile, 250)
    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  }, [])

  // Memoize toggle handler
  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev)
  }, [])

  // Memoize variants
  const containerVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  // Memoize item variants
  const itemVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  }

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
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden
                     relative z-10"
        >
          {/* Timeline Container */}
          <motion.div
            className={`relative overflow-hidden transition-all duration-500 ease-in-out
                       ${isExpanded ? 'max-h-[4000px]' : 'max-h-[400px] md:max-h-[280px]'}`}
            style={{ willChange: 'max-height' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 opacity-30" />
            
            <div className="relative p-4 sm:p-8 space-y-6 sm:space-y-8">
              {paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative ${!isExpanded && index > 2 ? "hidden" : ""}`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Timeline dot and line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      />
                      {index !== paragraphs.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-red-500 to-blue-500 opacity-10" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base md:text-xl font-bold mb-1.5 md:mb-2 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                        {paragraph.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-[13px] md:text-base">
                        {paragraph.content}
                      </p>
                      {isExpanded && paragraph.expanded && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-700 leading-relaxed mt-1.5 md:mt-2 text-[13px] md:text-base"
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
            <div 
              className={`absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-white to-transparent
                         transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
            />
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.div
            className="p-4 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={toggleExpanded}
              className="px-5 md:px-8 py-1.5 md:py-3 bg-gradient-to-r from-red-600 to-blue-600
                         text-white font-semibold rounded-lg md:rounded-xl shadow-lg
                         hover:from-red-500 hover:to-blue-500
                         active:scale-95 transition-all duration-150
                         flex items-center space-x-1.5 md:space-x-2 mx-auto text-sm md:text-base
                         sticky bottom-0"
            >
              <span>{isExpanded ? "Lees Minder" : "Lees Meer"}</span>
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

// Helper function for debouncing
function debounce(fn: Function, ms: number) {
  let timer: NodeJS.Timeout
  return function(this: any, ...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), ms)
  }
}

export default memo(HistorySection)
