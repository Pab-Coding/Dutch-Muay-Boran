'use client'
import { useState, useCallback, memo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const MENU_ITEMS = [
  { name: 'HOME', path: '/' },
  { name: 'INSCHRIJVEN', path: '/opleidingen/inschrijven' },
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
      { name: 'Trainer / Coach niveau 3', path: '/opleidingen/trainer-niveau-3' },
      { name: 'Leraar niveau 4 & 5', path: '/opleidingen/leraar-niveau-4&5' }
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
  { name: 'CONTACT', path: '/contact' }
]

const Navigation = () => {
  const router = useRouter()
  // For desktop hover dropdowns
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  // For mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // For mobile submenu toggling
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const handleMouseEnter = useCallback((itemName: string) => {
    setHoveredItem(itemName)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const toggleMobileSubmenu = useCallback((itemName: string) => {
    setMobileExpanded(prev => (prev === itemName ? null : itemName))
  }, [])

  // Manage body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <nav className="relative h-16 shadow-lg z-50">
      {/* Full-width Banner Background */}
      <Image
        src="/images/banner-principal.webp"
        alt="Banner Principal"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay for improved contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Navigation Content */}
      <div className="relative z-10 container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full items-center justify-center">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.path}
              className="relative mx-2"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <Link
                  href={item.path}
                  className="text-white hover:text-gray-200 px-2 py-2 text-sm tracking-wider font-bold transition-all duration-200 ease-in-out whitespace-nowrap"
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
                    className="absolute z-20 w-56 mt-1 shadow-lg"
                  >
                    <div className="bg-gradient-to-r from-red-200 to-blue-200 p-[1px] rounded-sm">
                      <div className="bg-white">
                        {item.submenu.map((subItem) => (
                          <motion.div
                            key={subItem.path}
                            whileHover={{ x: 2 }}
                            className="relative group"
                          >
                            <Link
                              href={subItem.path}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:via-white hover:to-blue-50 transition-all duration-300 border-b border-gray-50 last:border-b-0 relative"
                            >
                              <span className="relative">
                                {subItem.name}
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-300 to-blue-300 group-hover:w-full transition-all duration-300" />
                              </span>
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

        {/* Mobile Hamburger Button placed on the right */}
        <div className="md:hidden flex justify-end w-full">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/60 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-16 right-0 bottom-0 w-80 overflow-y-auto z-50 shadow-xl"
            >
            <div className="bg-gradient-to-r from-red-200 to-blue-200 p-[1px] h-full">
              <div className="relative flex flex-col h-full bg-gradient-to-r from-red-100/80 via-white/90 to-blue-100/80">
                
                {MENU_ITEMS.map((item) => (
                  <div key={item.path} className="border-t border-white/10 relative group">
                    <div className="flex justify-between items-center px-4 py-3">
                      <Link
                        href={item.path}
                        className="text-sm tracking-wider font-bold transition-all duration-200 ease-in-out relative group-hover:opacity-90"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
                          {item.name}
                        </span>
                        {/* Hover effect line */}
                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="text-gray-700 focus:outline-none hover:opacity-80 transition-opacity duration-200"
                        >
                          {mobileExpanded === item.name ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                        </button>
                      )}
                    </div>
                    {item.submenu && mobileExpanded === item.name && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="bg-gradient-to-r from-red-200 to-blue-200 p-[1px]">
                            <div className="flex flex-col bg-gradient-to-r from-red-100/85 via-white/95 to-blue-100/85">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  href={subItem.path}
                                  className="block px-8 py-3 text-sm hover:bg-gradient-to-r hover:from-red-100/50 hover:via-white/80 hover:to-blue-100/50 transition-all duration-300 relative group/item"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <span className="relative">
                                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
                                      {subItem.name}
                                    </span>
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-500 to-blue-500 group-hover/item:w-full transition-all duration-300" />
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default memo(Navigation)
