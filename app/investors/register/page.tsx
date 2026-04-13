'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Lock, Mail, User, Building, Phone, Shield, ArrowRight } from 'lucide-react'

export default function InvestorRegister() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    investorType: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send data to backend and create secure account
    console.log('Investor registration:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <main className="min-h-screen pt-20 bg-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Shield className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-4 text-black"
          >
            Registration Received
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            Thank you for your interest in Binti Flow Tech. Our team will review your registration and send you secure access credentials to view our comprehensive investment pitch within 24 hours.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600"
          >
            Please check your email (including spam folder) for further instructions.
          </motion.p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-900">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-binti-red/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-binti-red/30">
              <Lock className="w-5 h-5 text-binti-red" />
              <span className="text-sm font-semibold text-white">Secure Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Investor Registration
            </h1>
            <p className="text-xl text-white/90">
              Register to gain secure access to our comprehensive investment pitch deck
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-binti-red rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">Confidential Registration</h2>
                <p className="text-sm text-gray-600">All information is kept strictly confidential</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all bg-gray-50"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all bg-gray-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all bg-gray-50"
                      placeholder="+44 7XXX XXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all bg-gray-50"
                      placeholder="Company name (optional)"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="investorType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Investor Type *
                </label>
                <select
                  id="investorType"
                  name="investorType"
                  value={formData.investorType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all bg-gray-50"
                >
                  <option value="">Select investor type</option>
                  <option value="angel">Angel Investor</option>
                  <option value="vc">Venture Capital</option>
                  <option value="private-equity">Private Equity</option>
                  <option value="family-office">Family Office</option>
                  <option value="corporate">Corporate Investor</option>
                  <option value="individual">Individual Investor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all resize-none bg-gray-50"
                  placeholder="Tell us about your investment interests and any questions you have..."
                />
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-binti-red mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-900 mb-2">Privacy & Security</p>
                    <p>Your information is encrypted and stored securely. We will only use your details to provide access to our investment materials and communicate about this opportunity. We never share investor information with third parties.</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-5 bg-binti-red text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">Submit Registration</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
