'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

interface NewsItem {
  id: number
  title: string
  date: string
  image: string
  excerpt: string
  slug: string
  category: string
}

interface NewsGridProps {
  news: NewsItem[]
}

const NewsGrid = ({ news }: NewsGridProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString('nl-NL', options)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
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

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center min-h-[300px]"
      >
        {news.length > 0 ? (
          <motion.div
            variants={cardVariants}
            onHoverStart={() => setHoveredCard(news[0].id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative w-full max-w-[800px]"
          >
            <Link href={`/${news[0].slug}`}>
              <motion.div
                className="relative bg-white rounded-xl overflow-hidden shadow-lg
                         transform transition-all duration-300
                         hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* Image Container */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={news[0].image}
                    alt={news[0].title}
                    fill
                    className="object-cover transform transition-transform duration-500
                             hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-blue-600
                               text-white text-sm font-medium rounded-full
                               shadow-lg"
                    >
                      {news[0].category}
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center space-x-2 text-gray-500 mb-3">
                    <CalendarIcon className="h-5 w-5" />
                    <span className="text-base">{formatDate(news[0].date)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700
                               bg-clip-text text-transparent">
                    {news[0].title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-5 text-base leading-relaxed">
                    {news[0].excerpt}
                  </p>

                  {/* Contact Button (anteriormente Read More) */}
                  <motion.div
                    animate={hoveredCard === news[0].id ? { x: 5 } : { x: 0 }}
                    className="inline-flex items-center space-x-2 px-5 py-2.5
                             bg-gradient-to-r from-red-600 to-blue-600
                             text-white font-medium rounded-lg
                             transform transition-all duration-300
                             hover:shadow-lg hover:from-red-500 hover:to-blue-500"
                  >
                    <span>Contact</span>
                    <ArrowRightIcon className="h-5 w-5 transition-transform
                                           group-hover:translate-x-2" />
                  </motion.div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={false}
                  animate={hoveredCard === news[0].id ? { opacity: 1 } : { opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-blue-600/5
                           pointer-events-none"
                />
              </motion.div>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            variants={cardVariants}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              Er zijn momenteel geen nieuwsberichten beschikbaar.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5" />
      </motion.div>

      {/* Bottom Decorative Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32
                   bg-gradient-to-t from-white via-white/50 to-transparent
                   pointer-events-none"
      />
    </section>
  )
}

export default NewsGrid