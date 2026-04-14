'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface SlideEnlargeWrapperProps {
  children: React.ReactNode
}

export default function SlideEnlargeWrapper({ children }: SlideEnlargeWrapperProps) {
  const [enlargedElement, setEnlargedElement] = useState<HTMLElement | null>(null)
  const [clonedHTML, setClonedHTML] = useState<string>('')
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    
    // Find the nearest clickable card element
    const card = target.closest(
      '[class*="rounded-xl"][class*="border"], [class*="rounded-2xl"][class*="border"], [class*="rounded-xl"][class*="bg-white"], [class*="rounded-xl"][class*="bg-gradient"], [class*="rounded-2xl"][class*="bg-gradient"], [class*="rounded-lg"][class*="border"], [class*="rounded-3xl"]'
    ) as HTMLElement | null

    if (card && wrapperRef.current?.contains(card)) {
      // Don't enlarge the entire slide container or very large sections
      const rect = card.getBoundingClientRect()
      if (rect.width > window.innerWidth * 0.8 || rect.height > window.innerHeight * 0.8) return
      
      e.stopPropagation()
      e.preventDefault()
      setEnlargedElement(card)
      setClonedHTML(card.outerHTML)
    }
  }, [])

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (wrapper) {
      wrapper.addEventListener('click', handleClick, true)
      return () => wrapper.removeEventListener('click', handleClick, true)
    }
  }, [handleClick])

  const handleClose = useCallback(() => {
    setEnlargedElement(null)
    setClonedHTML('')
  }, [])

  return (
    <>
      <div ref={wrapperRef} className="w-full h-full cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {enlargedElement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white rounded-2xl shadow-2xl p-10 min-w-[50vw] max-w-[85vw] max-h-[85vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              <div
                className="enlarged-content"
                style={{ fontSize: '2em', lineHeight: '1.7', padding: '1rem' }}
                dangerouslySetInnerHTML={{ __html: clonedHTML }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
