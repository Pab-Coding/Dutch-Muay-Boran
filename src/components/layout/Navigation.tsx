'use client'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null)

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'NIEUWS', path: '/nieuws' },
    { name: 'MUAY BORAN', path: '/muay-boran' },
    { name: 'MUAY THAI', path: '/muay-thai' },
    { 
      name: 'ORGANISATIE', 
      path: '/organisatie',
      submenu: [
        { name: 'Aangesloten sportscholen', path: '/organisatie/sportscholen' },
        { name: 'Visie / Missie', path: '/organisatie/visie-missie' },
        { name: 'Samenwerkingsverbanden', path: '/organisatie/samenwerkingsverbanden' }
      ]
    },
    {
      name: 'OPLEIDINGEN',
      path: '/opleidingen',
      submenu: [
        { name: 'Assistent Muay Thai Boran leraar', path: '/opleidingen/assistent-leraar' },
        { name: 'Zelfstandig Muay Thai Boran leraar', path: '/opleidingen/zelfstandig-leraar' },
        { name: 'Jury & Scheidsrechtercursus', path: '/opleidingen/jury-scheidsrechter' }
      ]
    },
    {
      name: 'EXAMENS',
      path: '/examens',
      submenu: [
        { name: 'Exameneisen', path: '/examens/exameneisen' }
      ]
    },
    { name: "VIDEO'S", path: '/videos' },
    { 
      name: 'CONTACT', 
      path: '/contact',
      submenu: [
        { name: 'Promoter informatie', path: '/contact/promoter' }
      ]
    }
  ]

  const handleMouseEnter = useCallback((itemName: string) => {
    setHoveredItem(itemName)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null)
    setHoveredSubItem(null)
  }, [])

  const handleSubItemEnter = useCallback((itemName: string) => {
    setHoveredSubItem(itemName)
  }, [])

  return (
    <nav className="bg-gradient-to-r from-red-900 from-45% via-red-800 via-50% to-blue-900 to-55% shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-12">
          <div className="hidden md:flex w-full justify-between px-4">
            {menuItems.map((item) => (
              <div 
                key={item.path} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Link 
                    href={item.path}
                    className="text-white hover:text-gray-200 px-3 py-2
                             text-sm tracking-wider font-bold
                             transition-all duration-200 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </motion.div>

                <AnimatePresence>
                  {item.submenu && hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-20 w-56 mt-1"
                    >
                      <div className="bg-gradient-to-b from-red-700 to-blue-800 p-[1px] rounded-sm">
                        <div className="bg-white/95 backdrop-blur-sm">
                          {item.submenu.map((subItem) => (
                            <motion.div
                              key={subItem.path}
                              whileHover={{ x: 2 }}
                              className="relative"
                              onMouseEnter={() => handleSubItemEnter(subItem.name)}
                              onMouseLeave={() => setHoveredSubItem(null)}
                            >
                              <Link
                                href={subItem.path}
                                className="block px-4 py-2.5 text-sm text-gray-700 
                                         hover:bg-gradient-to-r hover:from-red-700 hover:to-blue-800
                                         hover:text-white transition-all duration-200
                                         border-b border-gray-100 last:border-b-0"
                              >
                                {subItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation