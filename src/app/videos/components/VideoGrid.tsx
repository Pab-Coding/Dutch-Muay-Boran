'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import VideoCard from './VideoCard'
import VideoPlayer from './VideoPlayer'

const videosData = [
  {
    id: 'AI2MD0wuXXo',
    title: 'De Geschiedenis van Muay Thai',
    description: 'In deze video zie je de geschiedenis van Muay Thai'
  },
  {
    id: '0fNkU_APRU8',
    title: 'Saenchai vs Nong-O Sitjaopor',
    description: 'Dit gevecht tussen Saenchai en Nong-O Sitjaopor vond plaats op 29 december 2010 in het Rajadamnern-stadion in Bangkok. Saenchai is de onbetwiste koning van Muay Thai, een levende legende. Deze Thai is een van de weinige vechters die in zijn wedstrijden Muay Boran-technieken gebruikt. Hij staat op nummer 1 gerankt in de 135 lbs (61,23 kg) klasse van het Lumpinee-stadion. Zijn talent is zo groot dat hij vaak wordt geplaatst tegen tegenstanders die een paar kilo meer wegen. Naast zijn sublieme techniek is Saenchai ook zeer geliefd om zijn dominante aanwezigheid in de ring. Zijn tegenstander Nong-O Sitjaopor is ook geen onbekende. Zo werd hij in 2006 al vechter van het jaar in Thailand. In dit gevecht weet hij het Saenchai erg moeilijk te maken, met name door zijn sublieme clinchtechnieken. Wie er wint mag je zelf bekijken'
  },
  {
    id: 'GbmdhnMPB3M',
    title: 'Muay Kard Chiek Toernooi Rome 2007',
    description: 'In deze video zie je het Muay Kard Chiek-toernooi van november 2007 in Rome, Italië. Muay Kard Chiek is een moderne variant van het Thaise bare-knuckle systeem. Er wordt gevochten zonder handschoenen. Bandages zijn wel toegestaan. Ellebogen en stoten naar het hoofd zijn verboden. De regels zijn vergelijkbaar met die van Kyokushin-karate, alleen is clinchen wel toegestaan'
  },
  {
    id: 'SGl9vOE_rj8',
    title: 'Marco de Cesaris - International Muay Boran Academy',
    description: 'Marco de Cesaris is de internationaal technisch directeur van de International Muay Boran Academy, waarbij de DMBF is aangesloten. Hij wordt zowel in Thailand als in de rest van de wereld erkend om zijn geweldige techniek en inspanningen om het Muay Boran te verbeteren en te promoten'
  }
]

const VideoGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  const handleVideoPlay = (videoId: string) => {
    setSelectedVideo(videoId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  const getSelectedVideoData = () => {
    return videosData.find(video => video.id === selectedVideo)
  }

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

  return (
    <motion.div
      ref={gridRef}
      style={{ opacity, scale }}
      className="relative w-full"
    >
      {/* Contenedor principal */}
      <div className="relative rounded-3xl bg-white/50 shadow-[0_0_45px_-5px_rgba(0,0,0,0.1)] 
                     backdrop-blur-sm border border-white/20">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="px-6 py-8">
            {/* Grid de videos */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20"
            >
              {videosData.map((video) => (
                <VideoCard
                  key={video.id}
                  videoId={video.id}
                  title={video.title}
                  description={video.description}
                  onPlay={() => handleVideoPlay(video.id)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Efectos sutiles */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                       from-gray-50/10 to-white/30 pointer-events-none" />
      </div>

      {/* Reproductor de video modal */}
      <VideoPlayer
        videoId={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={getSelectedVideoData()?.title}
        description={getSelectedVideoData()?.description}
      />
    </motion.div>
  )
}

export default VideoGrid