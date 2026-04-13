'use client'

import { motion } from 'framer-motion'

export default function Team() {
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
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Binti hero about.png" 
            alt="Our Team" 
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
              OUR TEAM
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Led by experienced innovators in healthcare, technology, and social impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2 text-black">{member.name}</h3>
                <p className="text-binti-red font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
