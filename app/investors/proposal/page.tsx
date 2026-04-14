'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import SlideEnlargeWrapper from '@/components/ClickToEnlarge'
import HeroSlide from '@/components/slides/HeroSlide'
import VisionMissionSlide from '@/components/slides/VisionMissionSlide'
import ProblemSlide from '@/components/slides/ProblemSlide'
import SolutionSlide from '@/components/slides/SolutionSlide'
import ProductSlide from '@/components/slides/ProductSlide'
import MarketOpportunitySlide from '@/components/slides/MarketOpportunitySlide'
import BusinessModelSlide from '@/components/slides/BusinessModelSlide'
import CompetitiveAdvantageSlide from '@/components/slides/CompetitiveAdvantageSlide'
import TechnologySlide from '@/components/slides/TechnologySlide'
import RoadmapSlide from '@/components/slides/RoadmapSlide'
import FinancialsSlide from '@/components/slides/FinancialsSlide'
import TeamSlide from '@/components/slides/TeamSlide'
import LeadershipSlide from '@/components/slides/LeadershipSlide'
import ProfitabilitySlide from '@/components/slides/ProfitabilitySlide'
import FemTechSlide from '@/components/slides/FemTechSlide'
import AppOverviewSlide from '@/components/slides/AppOverviewSlide'
import AppFeaturesSlide from '@/components/slides/AppFeaturesSlide'
import InvestmentAskSlide from '@/components/slides/InvestmentAskSlide'
import ClosingSlide from '@/components/slides/ClosingSlide'

const slides = [
  HeroSlide,
  VisionMissionSlide,
  ProblemSlide,
  SolutionSlide,
  ProductSlide,
  TechnologySlide,
  MarketOpportunitySlide,
  CompetitiveAdvantageSlide,
  BusinessModelSlide,
  RoadmapSlide,
  FinancialsSlide,
  TeamSlide,
  LeadershipSlide,
  ProfitabilitySlide,
  FemTechSlide,
  AppOverviewSlide,
  AppFeaturesSlide,
  InvestmentAskSlide,
  ClosingSlide,
]

export default function InvestmentProposal() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push('/about/story')
    }
  }, [isAuthenticated, user, router])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  if (!isAuthenticated || !user) {
    return null
  }

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <main className="fixed inset-0 w-full h-screen bg-white z-[9999] flex flex-col">
      {/* Desktop: scale down to fit. Mobile: allow scrolling */}
      <div className="flex-1 overflow-y-auto md:overflow-hidden">
        <div className="w-full min-h-full md:h-full md:w-[133.33%] md:h-[133.33%] md:origin-top-left md:scale-[0.75]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full min-h-full md:h-full"
            >
              <SlideEnlargeWrapper>
                <CurrentSlideComponent />
              </SlideEnlargeWrapper>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-1 md:gap-2 flex-wrap justify-center max-w-[90vw]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-binti-purple w-4 md:w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-2 right-2 md:top-8 md:right-8 z-50 text-xs md:text-sm text-gray-500">
        {currentSlide + 1} / {slides.length}
      </div>
    </main>
  )
}
