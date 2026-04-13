import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Target } from 'lucide-react'

const roadmap = [
  {
    phase: 'Current Status',
    status: 'completed',
    title: 'Early Stage Development',
    milestones: [
      'Mobile app developed and functional',
      'Device-to-app connectivity tested',
      'Team assembled',
      'Market research conducted'
    ]
  },
  {
    phase: 'Phase 1 (12-18 Months)',
    status: 'current',
    title: 'Investment & Validation',
    milestones: [
      'Secure £250,000 seed funding',
      'Partner with biotech labs for validation',
      'Complete biomarker testing',
      'Finalise device for 250-unit pilot'
    ]
  },
  {
    phase: 'Phase 2 (18-24 Months)',
    status: 'upcoming',
    title: 'Pilot & Regulatory',
    milestones: [
      'Launch 250-unit pilot programme',
      'Regulatory approvals (UK/CE)',
      'Establish licensing partnerships',
      'Manufacturing partnerships secured'
    ]
  },
  {
    phase: 'Phase 3 (2-3 Years)',
    status: 'upcoming',
    title: 'Market Launch',
    milestones: [
      'UK market launch',
      'Scale production and distribution',
      'Launch subscriptions and licensing',
      'Expand to Kenya and India'
    ]
  },
  {
    phase: 'Phase 4 (3-5 Years)',
    status: 'upcoming',
    title: 'Global Expansion',
    milestones: [
      'European market expansion',
      'Series A funding round',
      'B2B healthcare partnerships',
      'Additional product features'
    ]
  }
]

export default function RoadmapSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-binti-purple/5 to-binti-cyan/5" />
      
      <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          Roadmap to Success
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-binti-cyan via-binti-purple to-binti-magenta" />
          
          <div className="space-y-3 md:space-y-4">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative pl-20"
              >
                <div className={`absolute left-5 top-3 w-6 h-6 rounded-full flex items-center justify-center ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'current' ? 'bg-binti-purple' :
                  'bg-gray-300'
                }`}>
                  {item.status === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : item.status === 'current' ? (
                    <Target className="w-4 h-4 text-white" />
                  ) : (
                    <Circle className="w-4 h-4 text-white" />
                  )}
                </div>
                
                <div className={`bg-white rounded-xl border-2 p-3 md:p-4 ${
                  item.status === 'completed' ? 'border-green-200' :
                  item.status === 'current' ? 'border-binti-purple' :
                  'border-gray-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-xs md:text-sm font-semibold text-gray-500 mb-1">{item.phase}</div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-xs md:text-sm font-semibold ${
                      item.status === 'completed' ? 'bg-green-100 text-green-700' :
                      item.status === 'current' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {item.status === 'completed' ? 'Completed' :
                       item.status === 'current' ? 'In Progress' :
                       'Upcoming'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {item.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          item.status === 'completed' ? 'bg-green-500' :
                          item.status === 'current' ? 'bg-binti-purple' :
                          'bg-gray-400'
                        }`} />
                        <span>{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
