'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const HistorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
      className="w-full py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {/* Logo inicial */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/logo.png"
            alt="Dutch Muay Boran Foundation Logo"
            width={200}
            height={200}
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Sección Oprichting */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Oprichting
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              De Dutch Muay Boran Foundation is in 2008 opgericht door Dale Tan en Mies Stolp, beide oudgedienden in de Nederlandse vechtsportwereld. Dale Tan richtte samen met Luciën Carbin de TBBN (Thai Boxing Bond Nederland) op in de jaren '80. Dit was jarenlang een slapende bond geweest.
            </p>
            
            <p>
              In maart 1999 werd hij voorzitter van de Nederlandse afdeling van de International Amateur Muay Thai Federation (IAMTF) en legde daarmee goede contacten in Thailand bij de AITMA en WMF (World Muaythai Federation). In Thailand zag men het belang in van een goed contact met de Nederlandse vechtsportwereld, vanwege het hoge niveau op het gebied van kick- en thaiboksen.
            </p>

            <p>
              In deze periode kwam hij in contact met Mies Stolp. Mies Stolp heeft - naast haar ervaring met thaiboksen via Samurai Sports - ook veel ervaring met het organiseren van evenementen en werken met gemeenten. Zij werd daarom de voorzitster van de IAMTF Nederland. Dit markeerde het begin van een lange samenwerking.
            </p>

            <p>
              Met steun vanuit Thailand werd geprobeerd om rijkserkenning te krijgen voor Muay Thai. Het doel was om één overkoepelende bond in Nederland te creëren. Om de erkenning te krijgen moest de IAMTF samengaan met een bond met meer leden. Dit resulteerde in een fusie met de MTBN, waaruit de Muaythai Organisatie Nederland (MON) ontstond. De MON werd de eerste bond in Nederland met rijkserkenning voor Muay Thai. Dale Tan was hierin verantwoordelijk voor de portefeuilles 'Opleidingen' en 'Breedtesport'. Na onenigheid met enkele andere bestuursleden stapten Dale Tan en Mies Stolp uit de MON. De MON verloor vervolgens haar rijkserkenning.
            </p>
          </div>
        </motion.div>

        {/* Segundo logo */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/otro-logo.jpg"
            alt="DMBF Secondary Logo"
            width={200}
            height={200}
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Continuación del texto */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-gray-700 space-y-6"
        >
          <p>
            Dale Tan en Mies Stolp zagen nog steeds het belang in van een bond met rijkserkenning en richtten de Dutch Muay Boran Foundation (DMBF) op. Deze organisatie richt zich specifiek op Muay Thai en Muay Boran, en niet op kickboksen. Een belangrijk doel van de bond is om de Thaise stijlen meer bekendheid te geven en de Thaise achtergrond van de sport meer naar voren te brengen. De DMBF is aangesloten bij de Thaise wereldbond voor Muay Thai, de WMF, en bij de International Muay Boran Academy voor traditionele Thaise gevechtskunsten.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                     w-1/2 h-16 blur-3xl
                     bg-gradient-to-r from-red-600/20 to-blue-600/20"
        />
      </div>
    </motion.section>
  )
}

export default HistorySection