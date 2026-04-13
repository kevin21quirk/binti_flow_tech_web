'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Shield, Zap, Globe, ArrowRight, Lock, Sparkles, TrendingUp, Mail } from 'lucide-react'
import InvestmentLogin from '@/components/InvestmentLogin'

export default function InvestorsPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const highlights = [
    {
      icon: Heart,
      title: 'Life-Saving Technology',
      description: 'Early detection of serious health conditions including cervical cancer, endometriosis, and STIs',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: '1.9 billion women worldwide could benefit from this revolutionary health monitoring solution',
    },
    {
      icon: Zap,
      title: 'First-of-Its-Kind',
      description: 'Pioneering AI-powered biomarker detection integrated into everyday menstrual products',
    },
    {
      icon: Shield,
      title: 'Proven Team',
      description: 'Led by award-winning founder with MBE for services to women\'s health',
    }
  ]

  const impactPoints = [
    {
      title: 'Revolutionary Health Monitoring',
      description: 'Our smart pad technology combines advanced biosensors with AI analytics to detect biomarkers in menstrual blood, providing early warnings for serious health conditions that often go undetected until it\'s too late.'
    },
    {
      title: 'Massive Market Opportunity',
      description: 'The global fem-tech market is projected to reach £32 billion, yet menstrual health technology remains vastly underserved. We\'re positioned to capture a significant share of this rapidly growing market.'
    },
    {
      title: 'Social Impact at Scale',
      description: 'Every purchase supports Binti International, our charity partner providing menstrual health products to underserved communities. Profit with purpose - making a difference while building a successful business.'
    },
    {
      title: 'Proprietary Technology',
      description: 'Our patented biosensor technology and AI algorithms create significant barriers to entry, positioning us as the clear market leader in smart menstrual health monitoring.'
    }
  ]

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Animated background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-binti-red/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-binti-red/10 rounded-full blur-3xl"
        />
        
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-binti-red/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-binti-red/30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-binti-red" />
              </motion.div>
              <span className="text-sm font-semibold text-white">Investment Opportunity</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Invest in Technology<br />That <span className="text-binti-red">Saves Lives</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Be part of a revolutionary fem-tech innovation that combines AI-powered diagnostics with everyday menstrual products to detect life-threatening conditions early.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg text-white/80 max-w-3xl mx-auto"
            >
              Join us in transforming women&apos;s health while capturing a significant share of the £32 billion global fem-tech market.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A unique opportunity to invest in breakthrough technology addressing a massive underserved market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center p-6 rounded-2xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl bg-binti-red flex items-center justify-center mx-auto mb-4"
                >
                  <highlight.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-black">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              The Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed insights into our revolutionary technology and market potential
            </p>
          </motion.div>

          <div className="space-y-8">
            {impactPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-binti-red/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-black">{point.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-binti-red/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-binti-red/10 rounded-full blur-3xl"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 bg-binti-red/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-binti-red/30"
            >
              <TrendingUp className="w-5 h-5 text-binti-red" />
              <span className="text-sm font-semibold text-white">Investment Opportunity</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of the Revolution
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join us in transforming women&apos;s health globally. Access our comprehensive investment proposal to learn about our vision, technology, market opportunity, and growth strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Access Investment Proposal Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100 relative overflow-hidden group cursor-pointer"
              onClick={() => setIsLoginOpen(true)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-binti-red/10 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-binti-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Access Investment Proposal
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  View our detailed pitch deck with market analysis, financial projections, technology roadmap, and investment terms.
                </p>
                <div className="flex items-center gap-2 text-binti-red font-semibold group-hover:gap-4 transition-all">
                  <span>Login to Access</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Contact Us Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 shadow-2xl border-2 border-gray-700 relative overflow-hidden group cursor-pointer"
              onClick={() => window.location.href = '/contact'}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-binti-red/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Learn More
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Have questions about the investment opportunity? Get in touch with our team to discuss partnership possibilities.
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 text-sm">
              Investment opportunities are available to accredited investors only. Please contact us for access credentials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Login Modal */}
      <InvestmentLogin isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </main>
  )
}




