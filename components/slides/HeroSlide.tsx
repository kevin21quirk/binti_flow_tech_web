import { motion } from 'framer-motion'

export default function HeroSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start overflow-hidden bg-white pt-20">
      <div className="absolute top-12 left-16 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" />
      <div className="absolute top-24 left-1/4 w-32 h-32 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '3s' }} />
      <div className="absolute top-16 left-1/2 w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '6s' }} />
      <div className="absolute top-20 right-1/3 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '9s' }} />
      <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '12s' }} />
      <div className="absolute top-1/3 left-20 w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '15s' }} />
      <div className="absolute top-1/3 left-2/5 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '5s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '8s' }} />
      <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '11s' }} />
      <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '14s' }} />
      <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '17s' }} />
      <div className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-24 left-2/5 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 blob" style={{ animationDelay: '7s' }} />
      <div className="absolute bottom-28 right-1/3 w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 blob" style={{ animationDelay: '10s' }} />
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-red-700 to-red-900 blob" style={{ animationDelay: '13s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-11/12 md:w-4/5 lg:w-3/4 mx-auto px-4 md:px-0"
      >
        <div className="bg-gradient-to-r from-red-500 to-red-800 p-8 md:p-12 lg:p-20 rounded-3xl shadow-2xl">
          <div className="text-center">
            <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4">Binti.</div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-white/90">Flow. Tech.</div>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-xl md:text-2xl lg:text-4xl text-gray-700 max-w-6xl mx-auto leading-relaxed text-center mt-8 px-6 md:px-8"
      >
        Revolutionising women&apos;s health through intelligent menstrual monitoring and AI-powered diagnostics.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 right-12 flex items-center gap-3"
      >
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">Binti.</div>
          <div className="text-sm text-gray-600">Flow. Tech.</div>
        </div>
      </motion.div>
    </div>
  )
}
