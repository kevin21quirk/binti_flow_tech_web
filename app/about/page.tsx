'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, Heart, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Women-Centric',
      description: 'Every decision we make prioritizes the health, dignity, and empowerment of women worldwide.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of technology to create solutions that were previously impossible.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Medical-grade accuracy and reliability in every product we develop.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making advanced health technology available and affordable for all women.'
    }
  ]

  const team = [
    {
      name: 'Manjit K Gill MBE',
      role: 'Founder & CEO',
      description: 'MBE for services to women\'s health. Women\'s health advocate with industry recognition and strategic vision for Fem-Tech innovation and leadership.'
    },
    {
      name: 'Kevin Quirk',
      role: 'CTO',
      description: 'Technical architecture and development specialist with expertise in full-stack development, IoT integration, and mobile app development.'
    },
    {
      name: 'Mark St. Courtney',
      role: 'Legal Counsel',
      description: 'Legal advisory and compliance expert providing regulatory guidance, IP protection, and contract negotiation.'
    },
    {
      name: 'Professor Meera Tiwari',
      role: 'Principle Investigator',
      description: 'Academic research and biomedical validation leader with expertise in research leadership, clinical validation, and academic partnerships.'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gray-900">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Binti hero about.png" 
            alt="Binti Flow Tech" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              ABOUT BINTI FLOW TECH
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We&apos;re on a mission to revolutionise women&apos;s health through intelligent technology and compassionate innovation
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
              className="relative p-8 rounded-2xl glass"
            >
              <div className="w-16 h-16 rounded-xl bg-white">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To empower women globally with accessible, intelligent menstrual health monitoring technology that provides early disease detection and personalized health insights.
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
              className="relative p-8 rounded-2xl glass"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-700 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-binti-red">
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
                className="text-center p-6 rounded-2xl glass hover:bg-white/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-binti-red">
              World-Class Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Led by experienced innovators in healthcare, technology, and social impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass hover:bg-white/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-binti-red font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charity Link */}
      <section className="py-20 bg-binti-red">
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supporting Global Impact
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Learn about our charitable work through Binti International, providing menstrual health education and products to communities in need
            </p>
            <a
              href="https://bintiperiod.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-binti-red rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Visit Binti International
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}



