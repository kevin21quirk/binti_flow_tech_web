'use client'

import { motion } from 'framer-motion'
import { Smartphone, Activity, Shield, Bell, Cloud, Zap, TrendingUp, Users, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'Smart Biomarker Detection',
    description: 'Real-time monitoring of hemoglobin, pH levels, and cancer biomarkers through advanced sensor technology.',
    benefit: 'Early disease detection'
  },
  {
    icon: Shield,
    title: 'Leak Prevention System',
    description: 'Intelligent sensors detect saturation levels and send alerts before leaks occur.',
    benefit: 'Confidence & comfort'
  },
  {
    icon: Smartphone,
    title: 'Connected Mobile App',
    description: 'Track health metrics, cycle patterns, and receive personalised insights and recommendations.',
    benefit: 'Data-driven health'
  },
  {
    icon: Bell,
    title: 'Proactive Alerts',
    description: 'Instant notifications for health anomalies and pad changes, keeping you informed and protected.',
    benefit: 'Peace of mind'
  },
  {
    icon: Cloud,
    title: 'Secure Cloud Storage',
    description: 'HIPAA-compliant data storage with end-to-end encryption for your health records.',
    benefit: 'Privacy & security'
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Sub-second analysis with edge computing for instant health insights and alerts.',
    benefit: 'Immediate feedback'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'AI algorithms predict cycle patterns, fertility windows, and potential health issues.',
    benefit: 'Future planning'
  },
  {
    icon: Users,
    title: 'Healthcare Integration',
    description: 'Share data directly with your doctor for informed consultations and better care.',
    benefit: 'Better outcomes'
  },
  {
    icon: Sparkles,
    title: 'Personalised Insights',
    description: 'Machine learning adapts to your unique health profile for tailored recommendations.',
    benefit: 'Custom care'
  }
]

export default function SolutionSlide() {
  return (
    <div className="relative w-full min-h-full md:h-full flex flex-col overflow-y-auto md:overflow-hidden bg-gradient-to-br from-white via-rose-50/30 to-red-50/20">
      <div className="absolute top-16 left-20 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" />
      <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '5s' }} />
      <div className="absolute top-24 right-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '10s' }} />
      <div className="absolute top-28 right-24 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '15s' }} />
      <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '7s' }} />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '12s' }} />
      <div className="absolute top-1/2 left-20 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '17s' }} />
      <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '8s' }} />
      <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '13s' }} />
      <div className="absolute bottom-24 left-24 w-28 h-28 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-28 left-1/2 w-24 h-24 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '9s' }} />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '14s' }} />
      
      <div className="relative z-10 mx-auto px-3 md:px-8 lg:px-16 pt-10 md:pt-24 lg:pt-28 pb-20 md:pb-10 lg:pb-12 w-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8 lg:mb-10 flex-shrink-0"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-2.5 lg:mb-3 bg-gradient-to-br from-binti-purple to-binti-magenta bg-clip-text text-transparent">
            The Binti Solution
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">Smart menstrual pad + AI-powered health monitoring</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 flex-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-3 md:p-4 lg:p-6 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-2 md:p-2.5 lg:p-3 rounded-lg mb-2 md:mb-2.5 lg:mb-3">
                  <feature.icon className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 text-white" />
                </div>
                <h3 className="text-sm md:text-sm lg:text-base font-bold mb-1 md:mb-1.5 lg:mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-xs md:text-xs lg:text-sm text-gray-700 mb-2 md:mb-2.5 lg:mb-3 leading-relaxed flex-1">{feature.description}</p>
                <div className="inline-block bg-gradient-to-r from-binti-cyan/20 to-binti-purple/20 text-binti-purple px-2 md:px-2.5 lg:px-3 py-1 md:py-1.5 lg:py-2 rounded-lg font-semibold text-xs md:text-xs lg:text-sm">
                  ✓ {feature.benefit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 md:mt-6 lg:mt-8 mb-8 md:mb-12 lg:mb-16 text-center bg-gradient-to-r from-binti-purple to-binti-magenta text-white p-3 md:p-4 lg:p-5 rounded-xl"
        >
          <p className="text-base md:text-xl lg:text-2xl font-bold">
            The first integrated solution combining health diagnostics with leak prevention
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
