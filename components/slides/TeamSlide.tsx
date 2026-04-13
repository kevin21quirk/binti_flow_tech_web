import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react'

const team = [
  {
    role: 'Founder & CEO',
    name: 'Manjit K Gill MBE',
    expertise: 'Fem-Tech Innovation & Leadership',
    background: 'MBE for services to women\'s health',
    achievements: ['Women\'s health advocate', 'Industry recognition', 'Strategic vision']
  },
  {
    role: 'CTO',
    name: 'Kevin Quirk',
    expertise: 'Technology & Product Development',
    background: 'Technical architecture and development',
    achievements: ['Full-stack development', 'IoT integration', 'Mobile app expertise']
  },
  {
    role: 'Legal Counsel',
    name: 'Mark St. Courtney',
    expertise: 'Legal & Regulatory',
    background: 'Legal advisory and compliance',
    achievements: ['Regulatory guidance', 'IP protection', 'Contract negotiation']
  },
  {
    role: 'Principle Investigator',
    name: 'Professor Meera Tiwari',
    expertise: 'Research & Development',
    background: 'Academic research and biomedical validation',
    achievements: ['Research leadership', 'Clinical validation', 'Academic partnerships']
  }
]

const advisors = [
  'Biomedical research partners',
  'Healthcare industry advisors',
  'Technology sector mentors',
  'Retail distribution experts'
]

export default function TeamSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-binti-cyan/5 to-binti-purple/5" />
      
      <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          World-Class Team
        </motion.h2>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl border-2 border-gray-200 p-3 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-2 rounded-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">{member.name}</h3>
                  <div className="text-xs font-semibold text-binti-purple mb-1">{member.role}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{member.background}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                {member.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <Award className="w-3 h-3 text-binti-magenta" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-binti-purple/5 rounded-xl p-3 border-2 border-gray-200"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gradient-to-br from-binti-cyan to-binti-purple p-1.5 rounded-lg">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Advisory Board</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {advisors.map((advisor, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-700">
                <div className="w-2 h-2 bg-binti-purple rounded-full" />
                <span>{advisor}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-4 grid grid-cols-2 gap-3"
        >
          <div className="bg-gradient-to-br from-binti-purple to-binti-magenta text-white rounded-xl p-3 text-center">
            <div className="text-3xl font-bold mb-1">50+</div>
            <div className="text-sm opacity-90">Years Combined Experience</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-3 text-center">
            <div className="text-3xl font-bold mb-1">4</div>
            <div className="text-sm opacity-90">Core Team Members</div>
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
