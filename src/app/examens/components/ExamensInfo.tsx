'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const ExamensInfo = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texto informativo */}
          <motion.div
            variants={textVariants}
            className="space-y-6"
          >
            <motion.div
              variants={textVariants}
              className="relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-white/20 to-blue-600/10" />
              <div className="relative backdrop-blur-sm bg-white/80 p-8 md:p-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  De Dutch Muay Boran Foundation onderscheidt zich van andere thaiboks- en 
                  kickboksorganisaties door niet alleen wedstrijden te organiseren, maar ook 
                  de breedtesport te bevorderen.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  De meerderheid van de Muay Thai en Muay Boran beoefenaars traint recreatief. 
                  Via ons graduatiesysteem kunnen deze recreanten hun technische vaardigheden 
                  testen door middel van khan-examens, vergelijkbaar met het bandensysteem in 
                  Japanse vechtsporten.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Uw khan-graad wordt officieel geregistreerd bij de Kru Muaythai Association 
                  in Thailand en is internationaal erkend. Instructeurs die onze lerarenopleiding 
                  succesvol afronden, behalen de 12e khan, terwijl assistent-leraren examen 
                  doen voor de 8e khan.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Het complete graduatiesysteem van DMBF Nederland biedt een duidelijke 
                  structuur voor persoonlijke groei en ontwikkeling binnen de kunst van 
                  Muay Thai en Muay Boran.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen del puño */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20 
                           rounded-2xl transform -rotate-3"
                animate={{
                  rotate: [0, -3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute inset-0 backdrop-blur-sm bg-white/40 rounded-2xl 
                           transform rotate-3"
                animate={{
                  rotate: [0, 3, 0],
                  scale: [1, 1.01, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/examens-fist.png"
                  alt="Muay Thai Fist"
                  width={400}
                  height={400}
                  className="object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ExamensInfo