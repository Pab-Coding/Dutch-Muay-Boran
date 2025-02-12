'use client'

import { motion } from 'framer-motion'
import HomeHeader from '@/components/home/HomeHeader'
import Navigation from '@/components/layout/Navigation'
import WelcomeSection from '@/components/home/WelcomeSection'
import OpleidingenSection from '@/components/home/OpleidingenSection'
import LatestNewsHighlight from '@/components/home/LatestNewsHighlight'
import ContactButton from '@/components/shared/ContactButton' // Añadimos esta importación
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col"
    >
      <HomeHeader />
      <Navigation />
     
      <main className="container mx-auto px-4 flex-grow mt-8">
        <WelcomeSection />
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4"
        >
          <OpleidingenSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 sm:mt-8"
        >
          <LatestNewsHighlight />
        </motion.div>
      </main>

      {/* Añadimos el ContactButton aquí */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-50"
      >
        <ContactButton />
      </motion.div>

      <Footer />
    </motion.div>
  )
}
