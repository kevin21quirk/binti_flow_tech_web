import { motion } from 'framer-motion'
import { Target, Rocket, Globe, Heart, Zap, Users, TrendingUp, Shield } from 'lucide-react'

const visionPoints = [
  {
    icon: Globe,
    title: 'Global Leadership',
    description: 'Become the world\'s leading platform for menstrual health monitoring and diagnostics'
  },
  {
    icon: Heart,
    title: 'Women\'s Empowerment',
    description: 'Empower women with real-time data and insights about their reproductive health'
  },
  {
    icon: Zap,
    title: 'Healthcare Revolution',
    description: 'Transform preventive healthcare through continuous, non-invasive health monitoring'
  }
]

const missionPoints = [
  {
    icon: Shield,
    title: 'Smart Protection',
    description: 'Deliver intelligent leak prevention with 95% accuracy and 10-15 minute advance warnings'
  },
  {
    icon: TrendingUp,
    title: 'Health Insights',
    description: 'Provide AI-powered health analytics detecting biomarkers, pH levels, and potential health issues'
  },
  {
    icon: Users,
    title: 'Accessible Technology',
    description: 'Make advanced health monitoring affordable and accessible to women globally, starting with UK, Kenya, and India'
  }
]

export default function VisionMissionSlide() {
  return (
    <div className="relative w-full min-h-full md:h-full flex flex-col overflow-y-auto md:overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-binti-magenta/20 to-transparent" />
      <div className="absolute top-16 left-16 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" />
      <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '4s' }} />
      <div className="absolute top-24 right-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '8s' }} />
      <div className="absolute top-28 right-20 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '12s' }} />
      <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '6s' }} />
      <div className="absolute top-1/2 left-20 w-32 h-32 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '10s' }} />
      <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '14s' }} />
      <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '16s' }} />
      <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '18s' }} />
      <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-24 left-24 w-28 h-28 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '7s' }} />
      <div className="absolute bottom-28 left-1/2 w-24 h-24 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '11s' }} />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '15s' }} />
      
      <div className="relative z-10 mx-auto px-3 md:px-8 lg:px-16 pt-10 md:pt-24 lg:pt-28 pb-20 md:pb-6 lg:pb-8 w-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 text-center bg-gradient-to-r from-binti-purple via-binti-magenta to-binti-cyan bg-clip-text text-transparent flex-shrink-0"
        >
          Vision & Mission
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-2 md:mb-3 lg:mb-4 bg-gradient-to-r from-binti-purple/10 to-transparent p-3 md:p-4 lg:p-6 rounded-2xl border-2 border-binti-purple/20"
        >
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4 lg:mb-6">
            <motion.div 
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-binti-purple to-binti-magenta p-2 md:p-3 lg:p-4 rounded-xl"
            >
              <Target className="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {visionPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="bg-white rounded-xl p-3 md:p-4 lg:p-6 border-2 border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-binti-purple/20 to-binti-magenta/20 p-2 md:p-2.5 lg:p-3 rounded-lg w-fit mb-2 md:mb-2.5 lg:mb-3">
                    <Icon className="w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8 text-binti-purple" />
                  </div>
                  <h4 className="text-sm md:text-sm lg:text-base font-bold text-gray-900 mb-1 md:mb-1.5 lg:mb-2">{point.title}</h4>
                  <p className="text-xs md:text-xs lg:text-sm text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mb-2 md:mb-3 lg:mb-4 bg-gradient-to-r from-binti-magenta/10 to-transparent p-3 md:p-4 lg:p-6 rounded-2xl border-2 border-binti-magenta/20"
        >
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4 lg:mb-6">
            <motion.div 
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-br from-binti-magenta to-binti-cyan p-2 md:p-3 lg:p-4 rounded-xl"
            >
              <Rocket className="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {missionPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.15 }}
                  className="bg-white rounded-xl p-3 md:p-4 lg:p-6 border-2 border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-binti-magenta/20 to-binti-cyan/20 p-2 md:p-2.5 lg:p-3 rounded-lg w-fit mb-2 md:mb-2.5 lg:mb-3">
                    <Icon className="w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8 text-binti-magenta" />
                  </div>
                  <h4 className="text-sm md:text-sm lg:text-base font-bold text-gray-900 mb-1 md:mb-1.5 lg:mb-2">{point.title}</h4>
                  <p className="text-xs md:text-xs lg:text-sm text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="mt-2 md:mt-3 lg:mt-4 bg-gradient-to-r from-binti-cyan/10 to-binti-purple/10 rounded-xl p-2 md:p-3 lg:p-4 border-2 border-binti-cyan/20 text-center"
        >
          <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">
            <span className="text-binti-purple">Pioneering Fem-Tech Innovation</span> to create a world where every woman has access to proactive, data-driven health monitoring
          </p>
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
