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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const InfoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Historia y Antecedentes */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-white/20 to-blue-600/10" />
          <div className="relative backdrop-blur-sm bg-white/80 p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Historie & Achtergrond
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Muay Thai Boran, de nationale sport van Thailand, kent een rijke geschiedenis van meer dan 1000 jaar. 
              Oorspronkelijk ontwikkeld als gevechtskunst voor militaire doeleinden, heeft het zich geëvolueerd 
              tot een verfijnde vechtsport die wereldwijd wordt beoefend. Bij de Dutch Muay Boran Foundation (DMBF) 
              bewaren en onderwijzen we deze authentieke kunst in zijn meest pure vorm.
            </p>
          </div>
        </motion.div>

        {/* Word Assistent Leraar */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Word Assistent Leraar
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Wil jij je passie voor Muay Thai Boran delen en anderen inspireren? 
                De DMBF biedt een uitgebreide NOC/NSF-erkende opleiding tot assistent leraar aan.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Deze opleiding is perfect voor:
              </h3>
              <ul className="space-y-3">
                {[
                  'Aspirant Muay Thai Boran instructeurs',
                  'Huidige assistent leraren die hun kennis willen verdiepen',
                  'Instructeurs uit andere vechtsporten (kickboksen, karate, etc.)',
                  'Sportprofessionals die zich willen specialiseren in Muay Thai Boran'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
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
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Professionele Certificering & Erkenning
              </h2>
              <ul className="space-y-3">
                {[
                  'Volledige opleiding verspreid over meerdere maanden',
                  'NOC/NSF niveau 2 gecertificeerd',
                  'Officieel erkend door NOC/NSF'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-blue-600">•</span>
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
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Toelatingseisen
              </h2>
              <ul className="space-y-3">
                {[
                  'Minimumleeftijd: 18 jaar',
                  'Minimaal 3 jaar aantoonbare ervaring in Muay Thai, Kickboksen, Savate of vergelijkbare full-contact sporten',
                  'Motivatie om de authentieke kunst van Muay Thai Boran te onderwijzen'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-red-600">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Inversión y Materiales */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-red-600/5 via-transparent to-blue-600/5 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Investering in je Toekomst
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Complete Opleiding & Certificering
              </h3>
              <ul className="space-y-3">
                {[
                  'Volledige reeks lesdagen',
                  'Professionele scheidsrechter- en jurycursus',
                  'Uitgebreide cursusboeken en studiematerialen',
                  'Officieel examen en certificaat'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-blue-600">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Studiematerialen
              </h3>
              <ul className="space-y-3">
                {[
                  'Uitgebreid cursusboek',
                  'Officieel graduatieboek',
                  'Complete studiemap met alle leermaterialen'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-red-600">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 p-6 bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10 rounded-xl backdrop-blur-sm"
          >
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Opleidingskosten: €1150,00
            </p>
            <p className="text-gray-600">
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