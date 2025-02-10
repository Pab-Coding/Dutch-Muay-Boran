'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  TrophyIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const activities = [
  {
    title: 'Lerarenopleiding',
    icon: AcademicCapIcon,
    description: 'Een opleiding voor leraren vanaf 23 jaar met minimaal 3 jaar ervaring in Muay Thai, Muay Boran of kickboksen. Hierin worden personen opgeleid tot verantwoordelijke leraren met een hoge technische vaardigheid op het gebied van Muay Thai. Tevens worden kickboksleraren omgeschoold tot Muay Thai leraren, die gebruik maken van elleboogtechnieken, clinchen en Thaise benamingen.',
  },
  {
    title: 'Trainer / coach niveau 3',
    icon: UserGroupIcon,
    description: 'Bedoeld voor trainers vanaf 21 jaar met minimaal 2 jaar ervaring in Muay Thai.',
  },
  {
    title: 'Scheidsrechter- en jury cursus',
    icon: ClipboardDocumentCheckIcon,
    description: 'Professionele opleiding voor scheidsrechters en juryleden.',
  },
  {
    title: 'Praktijkstages',
    icon: ChartBarIcon,
    description: 'Stages onder leiding van de beste leraren in Muay Thai en Muay Boran waarin de technische vaardigheden van zowel leraren, assistent-leraren, als wedstrijdvechters en recreanten worden verbeterd.',
  },
  {
    title: 'Wedstrijden en Gala\'s',
    icon: TrophyIcon,
    description: 'De DMBF organiseert Muay Thai gala\'s waar ook clinchen en elleboogtechnieken zijn toegestaan. Vanaf 18 jaar en C-klasse wordt met ellebogen gestreden. A-klasse wedstrijden worden gehouden in 5 ronden van 3 minuten. Alleen in toernooien worden 3 ronden van 3 minuten gehouden.',
  }
]

const ActivitiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="w-full py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Activiteiten
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Om het doel van de bond te verwezenlijken is er in 2008 begonnen met het aanbieden van opleidingen
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group w-full"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 
                             shadow-lg hover:shadow-xl transition-all duration-300
                             group-hover:bg-white/95 group-hover:scale-[1.01]">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ rotate: -180, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-red-100 to-blue-100 
                                flex-shrink-0 shadow-sm"
                    >
                      <activity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-1 w-full bg-gradient-to-r from-red-500/20 via-blue-500/20 to-red-500/20 
                               transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-red-50 to-blue-50 rounded-xl shadow-lg"
        >
          <p className="text-gray-700 text-center text-sm sm:text-base">
            De DMBF wil meer aandacht vestigen op breedtesport en richt zich daarom ook op wedstrijden volgens Amateur- en Pro-Am-regels met bescherming.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ActivitiesSection
