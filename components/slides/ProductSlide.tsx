import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cpu, Droplet, Battery, Waves, Bluetooth } from 'lucide-react'

export default function ProductSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-binti-cyan/10 to-transparent" />
      
      <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 flex-shrink-0"
        >
          Product Architecture
        </motion.h2>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="bg-gradient-to-br from-binti-purple/10 to-binti-magenta/10 p-3 rounded-xl border-2 border-binti-purple/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-binti-purple p-2 rounded-lg">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Microcontroller</h3>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Advanced processing unit that analyses sensor data in real-time, running AI algorithms for pattern recognition and anomaly detection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-binti-cyan/10 to-binti-purple/10 p-3 rounded-xl border-2 border-binti-cyan/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-binti-cyan p-2 rounded-lg">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Biosensor Array</h3>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Multi-parameter sensor detecting hemoglobin, pH, glucose, and cancer biomarkers with medical-grade accuracy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-binti-magenta/10 to-binti-cyan/10 p-3 rounded-xl border-2 border-binti-magenta/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-binti-magenta p-2 rounded-lg">
                  <Droplet className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Saturation Sensor</h3>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Monitors absorption and predicts leak risk with 95% accuracy, alerting 10-15 minutes before saturation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-3 rounded-xl border-2 border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <Battery className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Power System</h3>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Ultra-thin rechargeable battery: 8-12 hours continuous monitoring with wireless charging.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-3 rounded-xl border-2 border-blue-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                  <Bluetooth className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Bluetooth Connectivity</h3>
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                Bluetooth Low Energy 5.0 for seamless data sync with mobile app and cloud storage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-binti-purple/20 to-binti-cyan/20 rounded-2xl blur-2xl" />
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-gray-200">
                <div className="text-center mb-2">
                  <div className="text-sm font-semibold text-gray-800">Leakage Detection</div>
                  <div className="text-xs text-gray-500">Ribbon Sensor Technology</div>
                </div>
                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-gray-50">
                  <Image
                    src="/images/ribbon-sensor.png"
                    alt="Ribbon Sensor for Leakage Detection"
                    fill
                    style={{ objectFit: 'contain' }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
            
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-binti-cyan/20 to-binti-magenta/20 rounded-2xl blur-2xl" />
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-gray-200">
                <div className="text-center mb-2">
                  <div className="text-sm font-semibold text-gray-800">Smart Pad Design</div>
                  <div className="text-xs text-gray-500">Anatomically Optimised Components</div>
                </div>
                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-gray-50">
                  <Image
                    src="/images/device.png"
                    alt="Smart Pad Device with Components"
                    fill
                    style={{ objectFit: 'contain' }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </motion.div>
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
