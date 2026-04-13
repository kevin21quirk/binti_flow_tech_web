import { motion } from 'framer-motion'

export default function FemTechSlide() {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-binti-magenta/10 to-transparent" />
      
      <div className="relative z-10 mx-auto px-12 py-8 w-full h-full flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-gray-900"
        >
          Profitable, Disruptive Fem-Tech
        </motion.h2>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-binti-purple/10 to-binti-magenta/10 p-5 rounded-xl border-2 border-binti-purple/20"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-semibold text-binti-purple">Market Size:</span>
              <span className="text-xl text-gray-700">$45B feminine hygiene, $60B fem-tech market by 2027.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-binti-cyan/10 to-binti-purple/10 p-5 rounded-xl border-2 border-binti-cyan/20"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-semibold text-binti-cyan">Innovation:</span>
              <span className="text-xl text-gray-700">First menstrual blood diagnostic platform.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-binti-magenta/10 to-binti-cyan/10 p-5 rounded-xl border-2 border-binti-magenta/20"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-semibold text-binti-magenta">Revenue:</span>
              <span className="text-xl text-gray-700">£1.5M–£4M/year by Year 3 from licensing and subscriptions.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-5 rounded-xl border-2 border-green-500/20"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-semibold text-green-600">Impact:</span>
              <span className="text-xl text-gray-700">Saves NHS £500M+, enhances market adoption.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-5 rounded-xl border-2 border-purple-500/20"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-semibold text-purple-600">ROI:</span>
              <span className="text-xl text-gray-700">20–30% profit margins with scalable licensing.</span>
            </div>
          </motion.div>
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
