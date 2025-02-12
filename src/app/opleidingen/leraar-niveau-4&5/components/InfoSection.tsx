'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const InfoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-8 sm:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 space-y-6 sm:space-y-8">
        {/* Historie & Achtergrond */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-white/20 to-purple-600/10" />
          <div className="relative backdrop-blur-sm bg-white/80 p-6 sm:p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Historie & Achtergrond
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Muay Thai, de nationale sport van Thailand, heeft een rijke geschiedenis van meer dan 1000 jaar 
              en is geëvolueerd van militaire gevechtskunst tot een wereldwijd beoefende vechtsport. 
              Bij de Dutch Muay Boran Foundation (DMBF) bewaren en onderwijzen we deze authentieke kunst 
              via een professionele lerarenopleiding op NOC/NSF niveau 3, gericht op het behoud van 
              traditionele Muay Thai Boran technieken.
            </p>
          </div>
        </motion.div>

        {/* Word Zelfstandig Leraar */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-6 sm:gap-8"
        >
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="relative z-10">
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Word Leraar niveau 4 & 5
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Deze geavanceerde opleiding is specifiek ontwikkeld voor ervaren instructeurs die zich 
                willen ontwikkelen tot Leraar niveau 4 & 5.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
                Deze opleiding is perfect voor:
              </h3>
              <ul className="space-y-3">
                {[
                  'Gediplomeerde DMBF assistent-leraren',
                  'Ervaren instructeurs die zich willen ontwikkelen tot zelfstandig leraar',
                  'Professionals die aan kunnen tonen over het gewenste kennisniveau te beschikken'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: isMobile ? index * 0.03 : index * 0.08,
                      duration: isMobile ? 0.5 : 0.8,
                      ease: "easeOut"
                    }}
                    className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* Certificering */}
            <motion.div
              variants={itemVariants}
              className="bg-white/90 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professionele Certificering & Erkenning
              </h2>
              <ul className="space-y-3">
                {[
                  'Intensieve tien maanden durende opleiding',
                  'NOC/NSF niveau 3 gecertificeerd',
                  'De opleiding voldoet aan de hoogste onderwijsstandaarden en is officieel getoetst door NOC/NSF'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: isMobile ? index * 0.03 : index * 0.08,
                      duration: isMobile ? 0.5 : 0.8,
                      ease: "easeOut"
                    }}
                    className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base"
                  >
                    <span className="text-purple-600 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Toelatingseisen */}
            <motion.div
              variants={itemVariants}
              className="bg-white/90 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Toelatingseisen
              </h2>
              <ul className="space-y-3">
                {[
                  'DMBF Trainer / Coach niveau 3 diploma',
                  'Aantoonbaar gewenst kennisniveau voor directe toelating',
                  'Mogelijkheid tot individuele beoordeling via mail bij afwijkende kwalificaties'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: isMobile ? index * 0.03 : index * 0.08,
                      duration: isMobile ? 0.5 : 0.8,
                      ease: "easeOut"
                    }}
                    className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base"
                  >
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Investering */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Investering in je Toekomst
          </h2>
         
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
                Complete Opleiding & Certificering
              </h3>
              <ul className="space-y-3">
                {[
                  '14 uitgebreide lesdagen',
                  'Professionele scheidsrechter- en jurycursus',
                  'Uitgebreide cursusboeken en studiematerialen',
                  'Officieel examen voor de 10e khan (bij succesvol afronden)'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: isMobile ? index * 0.03 : index * 0.08,
                      duration: isMobile ? 0.5 : 0.8,
                      ease: "easeOut"
                    }}
                    className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base"
                  >
                    <span className="text-purple-600 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
                Extra Ondersteuning & Faciliteiten
              </h3>
              <ul className="space-y-3">
                {[
                  'Uitgebreide lunch en verversingen tijdens lesdagen',
                  'Persoonlijke stagebegeleiding (20 uur)',
                  'Professionele DMBF ondersteuning en advies bij evenementen'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: isMobile ? index * 0.03 : index * 0.08,
                      duration: isMobile ? 0.5 : 0.8,
                      ease: "easeOut"
                    }}
                    className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base"
                  >
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: isMobile ? 0.1 : 0.15,
              duration: isMobile ? 0.5 : 0.8,
              ease: "easeOut"
            }}
            className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-xl backdrop-blur-sm"
          >
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Opleidingskosten: €1150,00
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Er zijn verschillende mogelijkheden voor belastingaftrek en subsidie.
              Neem contact met ons op voor meer informatie.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default InfoSection
