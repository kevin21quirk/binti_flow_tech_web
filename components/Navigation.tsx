'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Home, Info, Smartphone, Mail, Globe, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)

  const aboutSubItems = [
    { name: 'Mission and Values', href: '/about/mission-values' },
    { name: 'Our Team', href: '/about/team' },
    { name: 'Our Story', href: '/about/story' },
    { name: 'Invest with us', href: '/investors' },
  ]

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', hasDropdown: true, icon: Info },
    { name: 'App', href: '/app', icon: Smartphone },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Binti International', href: 'https://bintiperiod.org', external: true, icon: Globe },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-4 -ml-4 sm:-ml-6 lg:-ml-8">
            <div className="text-4xl font-bold text-gray-900">
              Binti<span className="text-binti-red">.</span>
            </div>
            <div className="border-l-2 border-gray-300 h-12"></div>
            <div className="flex flex-col leading-tight -space-y-0.5">
              <div className="text-base text-gray-700">Flow<span className="text-binti-red">.</span></div>
              <div className="text-base text-gray-700">Tech<span className="text-binti-red">.</span></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-binti-red transition-colors duration-200 font-medium flex items-center gap-1"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  <AnimatePresence>
                    {aboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                      >
                        {aboutSubItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-binti-red transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-binti-red transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-binti-red transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-binti-red to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-80 bg-gradient-to-br from-white via-gray-50 to-binti-red/5 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6 pb-32 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return item.hasDropdown ? (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-binti-red hover:to-red-600 text-gray-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-binti-red/10 to-binti-red/20 group-hover:from-white/20 group-hover:to-white/30 flex items-center justify-center transition-all">
                          <Icon className="w-5 h-5 text-binti-red group-hover:text-white" />
                        </div>
                        <span className="font-semibold text-base flex-1">{item.name}</span>
                        <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                      </Link>
                      <div className="ml-4 mt-2 space-y-1 pl-10 border-l-2 border-gray-200">
                        {aboutSubItems.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + (subIndex + 1) * 0.05 }}
                          >
                            <Link
                              href={subItem.href}
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-binti-red hover:bg-white/50 rounded-lg transition-all"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : item.external ? (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-binti-red hover:to-red-600 text-gray-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-binti-red/10 to-binti-red/20 group-hover:from-white/20 group-hover:to-white/30 flex items-center justify-center transition-all">
                        <Icon className="w-5 h-5 text-binti-red group-hover:text-white" />
                      </div>
                      <span className="font-semibold text-base flex-1">{item.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                    </motion.a>
                  ) : (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-binti-red hover:to-red-600 text-gray-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-binti-red/10 to-binti-red/20 group-hover:from-white/20 group-hover:to-white/30 flex items-center justify-center transition-all">
                          <Icon className="w-5 h-5 text-binti-red group-hover:text-white" />
                        </div>
                        <span className="font-semibold text-base flex-1">{item.name}</span>
                        <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
              
              {/* Footer branding in menu */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    Binti<span className="text-binti-red">.</span>
                  </div>
                  <div className="text-sm text-gray-600">Flow. Tech.</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
