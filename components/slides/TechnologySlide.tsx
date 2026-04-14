import { motion } from 'framer-motion'
import { Microscope, Zap, Shield, Brain } from 'lucide-react'

const techFeatures = [
  {
    icon: Microscope,
    title: 'Biomarker Detection',
    specs: [
      'Hemoglobin: 7-15 g/dL range',
      'pH levels: 3.8-4.5 detection',
      'CA-125 & HE4 cancer markers',
      'Glucose monitoring'
    ],
    accuracy: '98.5%'
  },
  {
    icon: Brain,
    title: 'AI Analytics Engine',
    specs: [
      'Pattern recognition algorithms',
      'Predictive health modeling',
      'Personalised insights',
      'Anomaly detection'
    ],
    accuracy: '96.2%'
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    specs: [
      'Sub-second data analysis',
      'Bluetooth Low Energy 5.0',
      'Edge computing capability',
      'Cloud sync & backup'
    ],
    accuracy: '<500ms'
  },
  {
    icon: Shield,
    title: 'Medical-Grade Security',
    specs: [
      'HIPAA compliant',
      'End-to-end encryption',
      'Secure data storage',
      'Privacy-first design'
    ],
    accuracy: 'ISO 27001'
  }
]

export default function TechnologySlide() {
  return (
    <div className="relative w-full min-h-full md:h-full flex flex-col overflow-y-auto md:overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute top-16 left-20 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" />
      <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '6s' }} />
      <div className="absolute top-24 right-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '12s' }} />
      <div className="absolute top-28 right-20 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '9s' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '15s' }} />
      <div className="absolute top-1/2 left-20 w-32 h-32 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '7s' }} />
      <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '13s' }} />
      <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-24 left-24 w-28 h-28 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '8s' }} />
      <div className="absolute bottom-28 right-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '11s' }} />
      
      <div className="relative z-10 mx-auto px-3 md:px-8 lg:px-12 pt-10 md:pt-24 lg:pt-28 pb-20 md:pb-20 lg:pb-24 w-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 lg:mb-10 flex-shrink-0"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-2.5 lg:mb-3 text-gray-900">Technology Stack</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">Medical-grade sensors meet AI-powered analytics</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 flex-1">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl border-2 border-gray-200 p-3 md:p-4 lg:p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-2 md:gap-3 lg:gap-4 mb-2 md:mb-3 lg:mb-4">
                <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-2 md:p-2.5 lg:p-3 rounded-lg">
                  <feature.icon className="w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-1.5 lg:mb-2">{feature.title}</h3>
                  <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 md:px-2.5 lg:px-3 py-0.5 md:py-0.5 lg:py-1 rounded text-xs md:text-xs lg:text-sm font-semibold">
                    {feature.accuracy} accuracy
                  </div>
                </div>
              </div>
              
              <ul className="space-y-1 md:space-y-1.5 lg:space-y-2">
                {feature.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 md:gap-2 text-xs md:text-xs lg:text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 md:w-2 lg:w-2 md:h-2 lg:h-2 bg-binti-purple rounded-full" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border-2 border-blue-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">8-12hrs</div>
            <div className="text-sm text-gray-700 font-semibold">Battery Life</div>
            <div className="text-xs text-gray-600">Continuous monitoring</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 border-2 border-purple-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">0.5mm</div>
            <div className="text-sm text-gray-700 font-semibold">Sensor Thickness</div>
            <div className="text-xs text-gray-600">Ultra-thin & comfortable</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border-2 border-green-200">
            <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
            <div className="text-sm text-gray-700 font-semibold">Leak Prediction</div>
            <div className="text-xs text-gray-600">10-15 min advance warning</div>
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
