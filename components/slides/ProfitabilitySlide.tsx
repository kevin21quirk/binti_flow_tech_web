import { motion } from 'framer-motion'

export default function ProfitabilitySlide() {
  return (
    <div className="relative w-full min-h-full md:h-full flex items-center overflow-y-auto md:overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-[600px] h-full bg-gradient-to-r from-binti-magenta/10 to-transparent" />
      
      <div className="relative z-10 mx-auto px-4 md:px-12 py-8 w-full flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900"
        >
          Path to Profitability
        </motion.h2>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-binti-purple/10 to-binti-magenta/10 p-6 rounded-2xl border-2 border-binti-purple/30"
          >
            <h3 className="text-3xl font-bold text-binti-purple mb-4">Phase 1 <span className="text-gray-600">(12–18 Months):</span></h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <div className="bg-binti-purple p-1.5 rounded-full mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>Validate biomarkers with labs.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-binti-purple p-1.5 rounded-full mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>Finalise device and app for 250-unit pilot.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-binti-purple p-1.5 rounded-full mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
<span>Establish licensing partnerships and distribution channels.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-binti-cyan/10 to-binti-purple/10 p-6 rounded-2xl border-2 border-binti-cyan/30"
          >
            <h3 className="text-3xl font-bold text-binti-cyan mb-4">Phase 2 <span className="text-gray-600">(2–3 Years):</span></h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <div className="bg-binti-cyan p-1.5 rounded-full mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>Scale production and global distribution.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-binti-cyan p-1.5 rounded-full mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>Launch subscriptions and licensing royalties.</span>
              </li>
            </ul>
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
