'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Shield, Lightbulb } from 'lucide-react'

export default function MissionValues() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach women\'s health with empathy and understanding, recognizing the dignity of every individual.'
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Your health data belongs to you. We maintain the highest standards of data security and privacy.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of technology to provide better health solutions.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Quality healthcare technology should be available to all women, regardless of location or income.'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Binti hero about.png" 
            alt="Mission and Values" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              MISSION & VALUES
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="w-16 h-16 rounded-xl bg-binti-red flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To empower women globally with accessible, intelligent menstrual health monitoring technology that provides early disease detection and personalised health insights.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe every woman deserves access to advanced health technology that respects her dignity while providing life-saving early warnings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-700 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-black">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A world where menstrual health is no longer stigmatised, where women have complete control over their health data, and where early detection saves lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where our technology becomes the standard of care in women&apos;s health monitoring worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-binti-red flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
