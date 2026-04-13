'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Activity, Shield, Smartphone, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Activity,
      title: 'Smart Biomarker Detection',
      description: 'Real-time monitoring of pH, hemoglobin, glucose, and cancer biomarkers with medical-grade accuracy.',
      color: 'from-binti-red to-red-600'
    },
    {
      icon: Shield,
      title: 'Leak Prevention',
      description: 'Predictive alerts 10-15 minutes before saturation with 95% accuracy, preventing embarrassing moments.',
      color: 'from-binti-red to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Connected Health App',
      description: 'Seamless Bluetooth sync with our mobile app for comprehensive health insights and tracking.',
      color: 'from-gray-600 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms analyze patterns and provide personalised health recommendations.',
      color: 'from-gray-700 to-gray-500'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gray-900">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Pioneering Fem-Tech Innovation</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            REVOLUTIONISING<br />
            WOMEN&apos;S HEALTH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Intelligent menstrual monitoring with AI-powered diagnostics and biomarker detection
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/app"
              className="px-8 py-4 bg-binti-red text-white rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              LEARN MORE
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our smart pad combines advanced biosensors with AI to provide comprehensive menstrual health monitoring
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-lg hover-lift border border-gray-200"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-binti-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the Revolution
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of the future of women&apos;s health technology
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-binti-red rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

