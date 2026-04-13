'use client'

import { motion } from 'framer-motion'

export default function Story() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Binti hero about.png" 
            alt="Our Story" 
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
              OUR STORY
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How Binti Flow Tech came to be
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-xl">
                Binti Flow Tech was born from a simple yet powerful observation: women&apos;s health technology has been overlooked for far too long.
              </p>
              
              <p>
                Through the work of Binti International, a charity dedicated to providing menstrual health products to women in need, a groundbreaking realization emerged: menstrual blood could be the key to solving critical health challenges. While distributing essential menstrual products to underserved communities, the charity recognized that this natural biological process held untapped potential for early disease detection and health monitoring.
              </p>

              <p>
                The journey began with a question: What if we could harness the diagnostic potential of menstrual blood to create a smart, affordable device that not only tracks menstrual cycles but also detects early warning signs of serious health conditions? This question led to years of research, development, and collaboration with leading medical professionals and technology experts.
              </p>

              <p>
                Today, Binti Flow Tech stands at the intersection of compassion and innovation. Our smart pad technology combines advanced biosensors with AI-powered analytics to provide women with unprecedented insights into their health. But beyond the technology, we&apos;re driven by a deeper mission: to ensure that every woman, regardless of where she lives or her economic circumstances, has access to life-saving health monitoring.
              </p>

              <p>
                Our connection to Binti International remains strong. A portion of every purchase goes directly to supporting menstrual health initiatives in underserved communities around the world. We believe that technology and charity can work hand in hand to create lasting change.
              </p>

              <p className="text-xl font-semibold text-black">
                This is just the beginning of our story. Join us as we revolutionise women&apos;s health, one smart pad at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
