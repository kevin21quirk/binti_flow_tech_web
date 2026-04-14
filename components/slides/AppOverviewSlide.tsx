import { motion } from 'framer-motion'
import { Smartphone, Calendar, Heart, Shield, TrendingUp, Users, Wifi, Bell } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Period Tracking',
    description: 'Calendar-based tracking with history and predictions',
    color: 'from-binti-purple to-binti-magenta'
  },
  {
    icon: Heart,
    title: 'Pain Management',
    description: 'Track and analyse pain levels, locations, and remedies',
    color: 'from-binti-magenta to-pink-500'
  },
  {
    icon: Shield,
    title: 'Leak Prevention',
    description: 'Risk assessment and protection recommendations',
    color: 'from-binti-cyan to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'Health Insights',
    description: 'Visualise trends and get personalised health insights',
    color: 'from-purple-500 to-binti-purple'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with others and share experiences',
    color: 'from-pink-500 to-binti-magenta'
  },
  {
    icon: Wifi,
    title: 'Smart Pad Connection',
    description: 'Bluetooth integration with Binti smart menstrual pad',
    color: 'from-binti-cyan to-binti-purple'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Proactive alerts for health anomalies and pad changes',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Smartphone,
    title: 'PWA Technology',
    description: 'Cross-platform app with offline support',
    color: 'from-green-500 to-emerald-500'
  }
]

export default function AppOverviewSlide() {
  return (
    <div className="relative w-full min-h-full md:h-full flex flex-col overflow-y-auto md:overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-binti-purple/10 to-transparent" />
      
      <div className="relative z-10 mx-auto px-3 md:px-8 lg:px-12 pt-10 md:pt-24 lg:pt-28 pb-20 md:pb-20 lg:pb-24 w-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          Binti Health App
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8"
        >
          A comprehensive menstrual health tracking application with smart pad integration
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 md:p-6 mb-6 md:mb-8 border-2 border-blue-200"
        >
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Testing Technology Stack</h3>
          <p className="text-sm md:text-base text-gray-700">
            Currently built with PWA technology for cross-platform compatibility. Upon full validation and testing completion, 
            the platform will be packaged and deployed on <span className="font-semibold text-blue-600">AWS servers and services</span> for 
            scalable, enterprise-grade infrastructure with enhanced security and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-4 md:mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="bg-white rounded-xl border-2 border-gray-200 p-4 md:p-5 hover:shadow-lg transition-shadow"
              >
                <div className={`bg-gradient-to-r ${feature.color} p-2.5 rounded-lg mb-3 w-fit`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-snug">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-binti-purple/10 to-binti-cyan/10 rounded-xl p-5 md:p-6 border-2 border-binti-purple/20"
        >
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 text-sm md:text-base text-gray-700">
            <div>
              <span className="font-semibold text-binti-purple">Frontend:</span> Progressive Web App (PWA)
            </div>
            <div>
              <span className="font-semibold text-binti-magenta">Backend:</span> Node.js + Express API
            </div>
            <div>
              <span className="font-semibold text-binti-cyan">Database:</span> PostgreSQL (Neon.tech)
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
