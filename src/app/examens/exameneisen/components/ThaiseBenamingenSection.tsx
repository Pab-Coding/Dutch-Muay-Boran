'use client'

import { MotionSection, MotionDiv, MotionH2, MotionP, MotionButton } from '../../../../components/shared/MotionComponents'
import Image from 'next/image'
import { useState } from 'react'

const ThaiseBenamingenSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const sections = [
    {
      title: 'Algemene begrippen en tellen',
      content: [
        'Ajarn = meester (vanaf 14e khan)',
        'Kru = leraar',
        'Pahsom = combinatie',
        'Sawadee kap = begroeting',
        'Chok = beginnen',
        'Yud = stoppen',
        'Sai = links',
        'Kua = rechts'
      ]
    },
    {
      title: 'Standen en loopbewegingen',
      content: [
        'Wai = groet met gevouwen handen',
        'Kum Chung = gevechtshouding',
        'Seub = voorwaarts schuifelen (zelfde been blijft voor',
        'Seue Yang = voorwaarts schuifelen (wisselen van been)',
        'Mah Yong = paardenloop (met knieën omhoog)',
        'Yaang saam kum = driestaps loop',
        'Yaang suk gasem = ontwijkende loop (in een driehoek)'
      ]
    }
  ]

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <MotionDiv variants={itemVariants} className="lg:w-1/3">
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/thaise-benamingen.webp"
              alt="Thaise Benamingen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </MotionDiv>

        <div className="lg:w-2/3 space-y-6">
          <MotionH2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-gray-800"
          >
            Thaise benamingen
          </MotionH2>

          <MotionP 
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-600"
          >
            Vanwege de Thaise achtergrond van de sport worden er ook Thaise benamingen voor de technieken gebruikt. In het begin lijkt dit moeilijk, maar het is vrij eenvoudig te leren. Zo heet een &quot;directe stoot&quot; een &quot;mahd trong&quot;. Als je weet dat &quot;mahd&quot; het Thaise woord is voor &quot;stoot&quot; en &quot;trong&quot; het Thaise woord is voor &quot;direct&quot; of &quot;voorwaarts&quot; dan is een voorwaartse knie &quot;khao trong&quot; en een afhoudtrap &quot;teep trong&quot;.
          </MotionP>

          <MotionDiv 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </MotionDiv>

          <MotionButton
            variants={itemVariants}
            onClick={() => window.open('/documents/thaise-benamingen.pdf', '_blank')}
            className="mt-4 sm:mt-6 w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl 
                     bg-gradient-to-r from-red-600 to-red-700 
                     text-white font-semibold shadow-lg text-sm sm:text-base
                     hover:scale-[1.02] transition-transform duration-200"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Thaise benamingen PDF
          </MotionButton>
        </div>
      </div>
    </MotionSection>
  )
}

export default ThaiseBenamingenSection
