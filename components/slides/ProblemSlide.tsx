import { motion } from 'framer-motion'
import { AlertCircle, Clock, DollarSign, TrendingDown, Users, Heart, ShieldAlert, Droplets, Activity } from 'lucide-react'

const problems = [
  {
    icon: AlertCircle,
    title: 'Leaking',
    description: 'Embarrassment and disruption for women globally.',
    stat: '73% of women',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Delayed Diagnoses',
    description: 'Slow detection of cancers, infections, or hormonal issues.',
    stat: '5-10 years average',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: DollarSign,
    title: 'Inefficient Testing',
    description: 'Traditional blood tests are costly (£50–£100/test) and slow.',
    stat: '£50-£100 per test',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: TrendingDown,
    title: 'Market Gap',
    description: 'No solution integrates health monitoring with leak prevention.',
    stat: '0 integrated solutions',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Limited Access',
    description: 'Women in developing regions lack affordable health monitoring tools.',
    stat: '2.3B women affected',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Health Anxiety',
    description: 'Uncertainty about menstrual health causes stress and worry.',
    stat: '68% experience anxiety',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: ShieldAlert,
    title: 'Lack of Prevention',
    description: 'No proactive tools to prevent health issues before they escalate.',
    stat: '90% reactive care',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Droplets,
    title: 'Data Loss',
    description: 'Menstrual blood contains valuable health data that is discarded.',
    stat: '100% data wasted',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Activity,
    title: 'Poor Tracking',
    description: 'Manual tracking is inaccurate and fails to capture real-time health changes.',
    stat: '45% tracking errors',
    color: 'from-emerald-500 to-green-500'
  }
]

export default function ProblemSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-[500px] h-full bg-gradient-to-r from-binti-purple/10 to-transparent" />
      
      <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          Critical Gaps in Women&apos;s Health
        </motion.h2>

        <div className="grid grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${problem.color} rounded-lg flex items-center justify-center mb-3`}>
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-base font-bold mb-1.5 text-gray-900">{problem.title}</h3>
              <p className="text-xs text-gray-700 mb-2 leading-snug">{problem.description}</p>
              
              <div className={`inline-block bg-gradient-to-r ${problem.color} text-white px-3 py-1.5 rounded-lg font-semibold text-xs`}>
                {problem.stat}
              </div>
            </motion.div>
          ))}
        </div>
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
