import { motion } from 'framer-motion'

export default function LeadershipSlide() {
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
          Leadership Team
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-binti-purple/10 to-binti-magenta/10 p-4 rounded-xl border-2 border-binti-purple/20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Manjit K Gill MBE: Founder & CEO</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-binti-cyan/10 to-binti-purple/10 p-4 rounded-xl border-2 border-binti-cyan/20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Mark St. Courtney: Legal Counsel</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-binti-magenta/10 to-binti-cyan/10 p-4 rounded-xl border-2 border-binti-magenta/20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Kevin Quirk: CTO</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border-2 border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Professor Meera Tiwari: Principle Investigator</h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-binti-purple/5 rounded-xl p-6 border-2 border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">Future Hires:</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tech specialists, sales team for global rollout CFO, CMO, COO, <span className="text-binti-magenta font-semibold">other titles</span>
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
