'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useCallback } from 'react'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
 
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const getBreadcrumbItems = () => {
    if (pathname === '/') return []
    const pathSegments = pathname.split('/').filter(Boolean)
    return pathSegments
  }

  const breadcrumbItems = getBreadcrumbItems()

  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-2 text-sm text-gray-500"
        >
          <div className="flex items-center">
            <div className="text-gray-400">You are here:</div>
            <div className="flex items-center ml-1">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
             
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-gray-400 mx-1">›</div>
                  {index === breadcrumbItems.length - 1 ? (
                    <div className="text-gray-600">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </div>
                  ) : (
                    <Link
                      href={`/${breadcrumbItems.slice(0, index + 1).join('/')}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  )}
                </div>
              ))}
              <div className="text-gray-400 mx-1">›</div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Top
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Separador */}
        <div className="w-full h-[0.5px] bg-gray-200" />

        {/* Contenido */}
        <div className="py-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            <h3 className="text-gray-800 font-medium mb-2">Contact</h3>
            <div className="space-y-1">
              <a href="mailto:info@dmbf.nl"
                 className="block text-gray-600 hover:text-blue-600 transition-colors">
                info@dmbf.nl
              </a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 pt-2 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600">
              Copyright © {currentYear} Dutch Muay Boran Foundation (DMBF). Alle rechten voorbehouden.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer