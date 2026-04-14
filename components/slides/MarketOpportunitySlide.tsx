'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react'

const marketGrowth = [
  { year: '2024', value: 28.5 },
  { year: '2025', value: 32.8 },
  { year: '2026', value: 38.2 },
  { year: '2027', value: 44.9 },
  { year: '2028', value: 53.1 },
  { year: '2029', value: 63.2 },
]

const marketSegments = [
  { name: 'Menstrual Products', value: 45, color: '#EC4899' },
  { name: 'Health Monitoring', value: 35, color: '#A855F7' },
  { name: 'Fem-Tech Apps', value: 20, color: '#06B6D4' },
]

export default function MarketOpportunitySlide() {
  return (
    <div className="relative w-full min-h-full md:h-full flex flex-col overflow-y-auto md:overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-binti-purple/5 via-transparent to-binti-cyan/5" />
      
      <div className="relative z-10 mx-auto px-3 md:px-8 lg:px-12 pt-10 md:pt-24 lg:pt-28 pb-20 md:pb-20 lg:pb-24 w-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          Market Opportunity
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-4"
          >
            <h3 className="text-lg font-bold mb-3 text-gray-900">Global Fem-Tech Market Growth</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={marketGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '2px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`£${value}B`, 'Market Size']}
                />
                <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-2">CAGR: 17.3% (2024-2029)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-4"
          >
            <h3 className="text-lg font-bold mb-3 text-gray-900">Market Segmentation</h3>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={marketSegments}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {marketSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-binti-purple to-binti-magenta text-white rounded-xl p-4"
          >
            <Globe className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-2xl font-bold mb-1">£63.2B</div>
            <div className="text-sm opacity-90">Market Size by 2029</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-binti-cyan to-binti-purple text-white rounded-xl p-4"
          >
            <Users className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-2xl font-bold mb-1">1.9B</div>
            <div className="text-sm opacity-90">Women of menstrual age</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-binti-magenta to-pink-500 text-white rounded-xl p-4"
          >
            <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-2xl font-bold mb-1">17.3%</div>
            <div className="text-sm opacity-90">Annual Growth Rate</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-br from-purple-600 to-binti-purple text-white rounded-xl p-4"
          >
            <DollarSign className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-2xl font-bold mb-1">£8.2B</div>
            <div className="text-sm opacity-90">TAM (First 5 years)</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 bg-gradient-to-r from-gray-50 to-binti-purple/5 rounded-xl p-4 border-2 border-gray-200"
        >
          <h3 className="text-lg font-bold mb-2 text-gray-900">Target Markets</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-sm">
            <div>
              <div className="font-semibold text-binti-purple mb-1">Primary: UK & Europe</div>
              <div className="text-gray-600">150M women, high health awareness</div>
            </div>
            <div>
              <div className="font-semibold text-binti-purple mb-1">Secondary: North America</div>
              <div className="text-gray-600">85M women, premium market</div>
            </div>
            <div>
              <div className="font-semibold text-binti-purple mb-1">Expansion: Asia-Pacific</div>
              <div className="text-gray-600">800M+ women, fastest growth</div>
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
