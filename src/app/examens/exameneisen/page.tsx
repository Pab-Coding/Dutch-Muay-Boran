'use client'

import { MotionDiv, MotionSection, MotionH1 } from '../../../components/shared/MotionComponents'
import Image from 'next/image'
// Importaciones de los componentes de layout
import Navigation from '../../../components/layout/Navigation'
import Footer from '../../../components/layout/Footer'
// Importaciones de los componentes locales
import ThaiseBenamingenSection from './components/ThaiseBenamingenSection'
import KhanSystemSection from './components/KhanSystemSection'
import Link from 'next/link'

const ExamensEisenPage = () => {
  return (
    <>
      <Navigation />
      
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100"
      >
        {/* Hero Section */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] bg-gradient-to-r from-red-600 via-white to-blue-600 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center">
            <MotionDiv
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-32 h-32 relative mb-6"
            >
              <Image
                src="/images/logo.webp"
                alt="Dutch Muay Boran Logo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </MotionDiv>

            <MotionH1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white text-center"
            >
              Exameneisen
            </MotionH1>
          </div>
        </MotionSection>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-16">
          <div className="space-y-16">
            {/* Intro Text */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-lg text-gray-600">
                Hier vindt u alle informatie over de exameneisen voor het Muay Boran systeem,
                inclusief de Thaise benamingen en het Khan-systeem
              </p>
            </MotionDiv>

            {/* Thaise Benamingen Section */}
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ThaiseBenamingenSection />
            </MotionDiv>

            {/* Khan System Section */}
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <KhanSystemSection />
            </MotionDiv>

            {/* Contact Section */}
<MotionSection
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-white rounded-2xl shadow-lg p-8 text-center"
>
  <h2 className="text-2xl font-bold text-gray-800 mb-4">
    Vragen over de exameneisen?
  </h2>
  <p className="text-gray-600 mb-6">
    Neem contact op met onze instructeurs voor meer informatie
  </p>
  <div className="flex justify-center space-x-4">
    <Link
      href="/contact"
      className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 
               text-white font-semibold rounded-xl shadow-lg
               hover:scale-[1.02] transition-transform duration-200"
    >
      Contact opnemen
    </Link>
  </div>
</MotionSection>
          </div>
        </main>
      </MotionDiv>

      <Footer />
    </>
  )
}

export default ExamensEisenPage
