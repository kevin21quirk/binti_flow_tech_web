'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, Repeat, Building2 } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const revenueStreams = [
  { name: 'Product Sales', value: 60, color: '#A855F7' },
  { name: 'Subscriptions', value: 25, color: '#EC4899' },
  { name: 'B2B Partnerships', value: 15, color: '#06B6D4' },
]

const pricingTiers = [
  {
    icon: Users,
    name: 'Consumer Direct',
    price: '£29.99',
    description: 'Smart pad + app subscription',
    features: ['10 pads per month', 'Health monitoring', 'Leak alerts', 'Data insights']
  },
  {
    icon: Repeat,
    name: 'Subscription',
    price: '£24.99/mo',
    description: 'Monthly delivery + premium features',
    features: ['15 pads per month', 'Advanced analytics', 'Priority support', 'Free shipping']
  },
  {
    icon: Building2,
    name: 'B2B/Healthcare',
    price: 'Custom',
    description: 'Bulk orders + integration',
    features: ['Volume discounts', 'API access', 'White labeling', 'Clinical support']
  }
]

export default function BusinessModelSlide() {
  return (
    <div className="relative w-full min-h-full md:h-full flex flex-col overflow-y-auto md:overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white" />
      
      <div className="relative z-10 mx-auto px-3 md:px-8 lg:px-12 pt-10 md:pt-24 lg:pt-28 pb-20 md:pb-20 lg:pb-24 w-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          Business Model
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Revenue Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={revenueStreams}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {revenueStreams.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Unit Economics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Average Selling Price</span>
                <span className="text-2xl font-bold text-binti-purple">£27.50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Cost of Goods Sold</span>
                <span className="text-2xl font-bold text-gray-600">£8.25</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">Gross Margin</span>
                <span className="text-3xl font-bold text-green-600">70%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Customer LTV</span>
                <span className="text-2xl font-bold text-binti-magenta">£420</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 p-5 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-2 rounded-lg">
                  <tier.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{tier.name}</h4>
                  <div className="text-2xl font-bold text-binti-purple">{tier.price}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{tier.description}</p>
              <ul className="space-y-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <div className="w-1 h-1 bg-binti-purple rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
