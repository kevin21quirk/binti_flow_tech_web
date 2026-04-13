import { motion } from 'framer-motion'
import { Mail, Globe, Phone } from 'lucide-react'

export default function ClosingSlide() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-binti-purple via-binti-magenta to-binti-cyan">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/10 blob" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 w-full px-12 py-8 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-4">
            Let&apos;s Transform<br />Women&apos;s Health Together
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Join us in creating a world where every woman has access to proactive, data-driven health monitoring
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-6 max-w-5xl mx-auto border-2 border-white/30"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 p-4 rounded-2xl mb-3">
                <Mail className="w-8 h-8" />
              </div>
              <div className="text-sm opacity-80 mb-1">Email</div>
              <div className="text-base font-semibold break-words">invest@bintiflowtech.com</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 p-4 rounded-2xl mb-3">
                <Phone className="w-8 h-8" />
              </div>
              <div className="text-sm opacity-80 mb-1">Phone</div>
              <div className="text-base font-semibold">+44 7359 969266</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 p-4 rounded-2xl mb-3">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-sm opacity-80 mb-1">Website</div>
              <div className="text-base font-semibold">bintiflowtech.com</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="text-5xl font-bold mb-2">Binti.</div>
          <div className="text-xl opacity-80">Flow. Tech.</div>
          <div className="text-sm opacity-70 mt-3">Pioneering the future of menstrual health</div>
        </motion.div>
      </div>
    </div>
  )
}
