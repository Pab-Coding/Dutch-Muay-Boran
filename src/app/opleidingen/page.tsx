'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import OpleidingenHero from './components/OpleidingenHero'
import OpleidingenSection from '@/components/home/OpleidingenSection'

export default function OpleidingenPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.98])

  const titleVariants = {
    hidden: {
      opacity: 0,
      rotateX: 90,
      y: -50
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.3,
        ease: "easeOut"
      }
    })
  }

  const infoCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const infoItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.div
      ref={pageRef}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        <Header />
        <Navigation />

        <main className="relative">
          <motion.div
            style={{ opacity, scale }}
          >
            <OpleidingenHero />
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="relative z-10"
          >
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="-mt-12"
              >
                <OpleidingenSection />
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            variants={infoCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 py-16"
          >
            <div className="max-w-7xl mx-auto px-4">
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.01] transition-all duration-300"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <motion.h2
                  variants={titleVariants}
                  className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
                >
                  Waarom kiezen voor DMBF?
                </motion.h2>
                
                <motion.div
                  variants={infoCardVariants}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <motion.div 
                    variants={infoItemVariants}
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-red-50 to-white"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">Professionele Certificering</h3>
                    <p className="text-gray-600">
                      Al onze opleidingen zijn NOC/NSF erkend en voldoen aan de hoogste kwaliteitsstandaarden in de vechtsportwereld.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    variants={infoItemVariants}
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">Ervaren Instructeurs</h3>
                    <p className="text-gray-600">
                      Onze instructeurs hebben jarenlange ervaring in het lesgeven en de praktijk van Muay Thai Boran.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 bottom-[5%] bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />
    </motion.div>
  )
}