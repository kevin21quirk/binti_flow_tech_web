'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const revenueProjection = [
  { year: 'Y1', revenue: 0.83, expenses: 0.80 },
  { year: 'Y2', revenue: 4.2, expenses: 3.1 },
  { year: 'Y3', revenue: 12.8, expenses: 6.5 },
  { year: 'Y4', revenue: 28.5, expenses: 12.2 },
  { year: 'Y5', revenue: 52.3, expenses: 19.8 },
]

const userGrowth = [
  { year: 'Y1', users: 2 },
  { year: 'Y2', users: 15 },
  { year: 'Y3', users: 48 },
  { year: 'Y4', users: 125 },
  { year: 'Y5', users: 280 },
]

export default function FinancialsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-50 to-white" />
      
      <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          Financial Projections
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 mb-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-4"
          >
            <h3 className="text-base font-bold mb-2 text-gray-900">Revenue & Expenses (£M)</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={revenueProjection}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '2px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`£${value}M`, '']}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#A855F7" name="Revenue" radius={[8, 8, 0, 0]} />
                <Bar dataKey="expenses" fill="#EC4899" name="Expenses" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl border-2 border-gray-200 p-3"
          >
            <h3 className="text-base font-bold mb-2 text-gray-900">User Growth (Thousands)</h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '2px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`${value}K users`, '']}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#06B6D4" 
                  strokeWidth={3}
                  dot={{ fill: '#06B6D4', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg p-2"
          >
            <div className="text-xs opacity-90 mb-0.5">Break-even</div>
            <div className="text-xl font-bold">Q3 2026</div>
            <div className="text-xs opacity-80">18mo post-launch</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-binti-purple to-binti-magenta text-white rounded-lg p-2"
          >
            <div className="text-xs opacity-90 mb-0.5">5-Year Revenue</div>
            <div className="text-xl font-bold">£98.3M</div>
            <div className="text-xs opacity-80">CAGR: 215%</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-binti-cyan to-blue-600 text-white rounded-lg p-2"
          >
            <div className="text-xs opacity-90 mb-0.5">Gross Margin</div>
            <div className="text-xl font-bold">70%</div>
            <div className="text-xs opacity-80">Industry leading</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-2"
          >
            <div className="text-xs opacity-90 mb-0.5">CAC / LTV</div>
            <div className="text-xl font-bold">1:7</div>
            <div className="text-xs opacity-80">Highly efficient</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-3 bg-gradient-to-r from-gray-50 to-binti-purple/5 rounded-lg p-3 border-2 border-gray-200"
        >
          <h3 className="text-base font-bold mb-2 text-gray-900">Key Assumptions</h3>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <div className="font-semibold text-binti-purple mb-1">Market Penetration</div>
              <div className="text-gray-600">0.5% UK market by Year 3</div>
            </div>
            <div>
              <div className="font-semibold text-binti-purple mb-1">Customer Retention</div>
              <div className="text-gray-600">85% annual retention rate</div>
            </div>
            <div>
              <div className="font-semibold text-binti-purple mb-1">Average Order Value</div>
              <div className="text-gray-600">£27.50 per transaction</div>
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
