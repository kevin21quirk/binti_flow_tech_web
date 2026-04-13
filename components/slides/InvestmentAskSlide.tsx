'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, Rocket, PoundSterling } from 'lucide-react'

const useOfFunds = [
  { category: 'Hardware & Device Development', percentage: 24, amount: '£60,000', color: 'from-binti-purple to-purple-600' },
  { category: 'Biomarker R&D Partnership', percentage: 38, amount: '£95,000', color: 'from-binti-magenta to-pink-600' },
  { category: 'Software Infrastructure', percentage: 9, amount: '£22,500', color: 'from-binti-cyan to-blue-600' },
  { category: 'Operations & Legal', percentage: 10, amount: '£25,000', color: 'from-green-500 to-emerald-600' },
  { category: 'Testing, Logistics & Pilot', percentage: 9, amount: '£22,500', color: 'from-orange-500 to-red-500' },
  { category: 'Contingency Fund', percentage: 10, amount: '£25,000', color: 'from-purple-600 to-indigo-600' },
]

const milestones = [
  'Partner with biomedical labs for biomarker validation',
  'Complete device calibration and sensor tuning',
  'Launch beta testing in UK, Kenya, and India',
  'Achieve App Store & Google Play approval',
  'Reach £832,950 revenue by end of Year 1'
]

export default function InvestmentAskSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-gradient-to-br from-white via-binti-purple/5 to-binti-cyan/5">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-binti-purple/20 to-binti-cyan/20 blob" />
      
      <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 w-full h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8 lg:mb-10 flex-shrink-0"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-binti-purple to-binti-magenta bg-clip-text text-transparent">
            Investment Opportunity
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">Join us in revolutionising women&apos;s health</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-binti-purple to-binti-magenta text-white rounded-xl p-3 mb-3 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Rocket className="w-5 h-5" />
            <div className="text-xs font-semibold">Seed Round</div>
          </div>
          <div className="text-3xl font-bold mb-1">£250,000</div>
          <div className="text-xs opacity-90 mb-1.5">Total investment required (GBP)</div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-semibold">
            Equity negotiable based on partnership terms
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-sm font-bold mb-2 text-gray-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-binti-purple" />
              Use of Funds
            </h3>
            <div className="space-y-1.5">
              {useOfFunds.map((item, index) => (
                <div key={index} className="bg-white rounded-lg border-2 border-gray-200 p-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-xs text-gray-900">{item.category}</span>
                    <span className="text-sm font-bold text-binti-purple">{item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{item.percentage}% of total</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-sm font-bold mb-2 text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-binti-magenta" />
              12-Month Milestones
            </h3>
            <div className="bg-white rounded-lg border-2 border-gray-200 p-2 mb-2">
              <ul className="space-y-1.5">
                {milestones.map((milestone, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-1 rounded-full mt-0.5">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-xs text-gray-700 leading-snug">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 p-2">
              <div className="flex items-center gap-2 mb-1">
                <PoundSterling className="w-4 h-4 text-green-600" />
                <h4 className="text-sm font-bold text-gray-900">Expected Returns</h4>
              </div>
              <div className="space-y-1 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Year 1 Revenue Target:</span>
                  <span className="font-bold text-green-600">£832,950</span>
                </div>
                <div className="flex justify-between">
                  <span>Year 1 Net Profit:</span>
                  <span className="font-bold text-green-600">£33,250</span>
                </div>
                <div className="flex justify-between">
                  <span>5-Year Revenue:</span>
                  <span className="font-bold text-green-600">£98.3M</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200 p-2">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-bold text-gray-900">Investment Terms</h4>
              </div>
              <div className="space-y-1 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Equity Offered:</span>
                  <span className="font-bold text-blue-600">15-20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Pre-Money Valuation:</span>
                  <span className="font-bold text-blue-600">£1.0M - £1.4M</span>
                </div>
                <div className="flex justify-between">
                  <span>Use of Funds:</span>
                  <span className="font-bold text-blue-600">18-Month Runway</span>
                </div>
              </div>
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
