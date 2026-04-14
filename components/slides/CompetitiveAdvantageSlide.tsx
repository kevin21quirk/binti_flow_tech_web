import { motion } from 'framer-motion'
import { Shield, Zap, Award, TrendingUp } from 'lucide-react'

const advantages = [
  {
    icon: Shield,
    title: 'First-Mover Advantage',
    description: 'Only integrated solution combining health diagnostics with leak prevention',
    metrics: ['No direct competitors', '18-month lead time', 'Unique technology']
  },
  {
    icon: Zap,
    title: 'Superior Technology',
    description: 'Medical-grade sensors with AI-powered analytics',
    metrics: ['98.5% accuracy', 'Real-time processing', 'FDA pathway clear']
  },
  {
    icon: Award,
    title: 'Strong IP Portfolio',
    description: 'Proprietary biosensor technology and algorithms',
    metrics: ['Trade secrets', 'Exclusive partnerships', 'Proprietary algorithms']
  },
  {
    icon: TrendingUp,
    title: 'Market Validation',
    description: 'Strong demand signals and pre-orders',
    metrics: ['500+ waitlist', '87% purchase intent', 'B2B interest']
  }
]

export default function CompetitiveAdvantageSlide() {
  return (
    <div className="relative w-full min-h-full md:h-full flex flex-col overflow-y-auto md:overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-binti-cyan/10 to-transparent" />
      <div className="absolute top-16 left-20 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" />
      <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '7s' }} />
      <div className="absolute top-24 right-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '14s' }} />
      <div className="absolute top-28 right-20 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '10s' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '17s' }} />
      <div className="absolute top-1/2 left-20 w-32 h-32 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '8s' }} />
      <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '15s' }} />
      <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-24 left-24 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '9s' }} />
      <div className="absolute bottom-28 right-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '12s' }} />
      
      <div className="relative z-10 mx-auto px-3 md:px-8 lg:px-12 pt-10 md:pt-24 lg:pt-28 pb-20 md:pb-20 lg:pb-24 w-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          Competitive Advantage
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 lg:mb-8 flex-1">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-4 md:p-6 lg:p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-3 md:gap-4 lg:gap-5 mb-3 md:mb-4 lg:mb-6">
                <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-2 md:p-3 lg:p-4 rounded-xl">
                  <advantage.icon className="w-6 h-6 md:w-7 lg:w-9 md:h-7 lg:h-9 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-2.5 lg:mb-3">{advantage.title}</h3>
                  <p className="text-sm md:text-sm lg:text-base text-gray-700 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-2.5 lg:space-y-3 mt-3 md:mt-4 lg:mt-6">
                {advantage.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 lg:w-2 md:h-2 lg:h-2 bg-binti-purple rounded-full" />
                    <span className="text-sm md:text-sm lg:text-base text-gray-600">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 bg-gradient-to-r from-binti-purple to-binti-magenta text-white rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-sm opacity-90">Direct Competitors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">18mo</div>
              <div className="text-sm opacity-90">Technology Lead</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">£8.2B</div>
              <div className="text-sm opacity-90">Addressable Market</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-3">
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">Binti.</div>
          <div className="text-xs text-gray-600">Flow. Tech.</div>
        </div>
      </div>
    </div>
  )
}
