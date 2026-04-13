'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Send, Sparkles, MessageCircle, Rocket } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'invest@bintiflowtech.com',
      link: 'mailto:invest@bintiflowtech.com',
      color: 'from-binti-red to-red-700'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+44 7359 969266',
      link: 'tel:+447359969266',
      color: 'from-gray-700 to-gray-900'
    }
  ]

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-binti-red/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-binti-red/10 rounded-full blur-3xl"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-binti-red/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-binti-red/30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-binti-red" />
              </motion.div>
              <span className="text-sm font-semibold text-white">Let's Connect</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-7xl font-bold mb-6 text-white"
            >
              Get in <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-binti-red"
              >
                Touch
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Have questions about our technology or interested in partnering with us? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100 relative overflow-hidden"
            >
              {/* Animated corner accent */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-binti-red/20 rounded-full blur-2xl"
              />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-binti-red rounded-xl flex items-center justify-center"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-black">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all bg-gray-50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all bg-gray-50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all bg-gray-50"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press & Media</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all resize-none bg-gray-50"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(228, 2, 5, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="relative w-full px-8 py-5 bg-binti-red text-white rounded-xl font-bold text-lg overflow-hidden flex items-center justify-center gap-3 group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-5 h-5 relative z-10" />
                  </motion.div>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-6"
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background accent */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-binti-red/10 rounded-full blur-2xl"
                />
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-black rounded-xl flex items-center justify-center"
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-black">Contact Us</h2>
                </div>
                <p className="text-gray-600 mb-8 text-lg relative z-10">
                  Reach out to us through any of these channels. We typically respond within 24 hours.
                </p>

                <div className="space-y-4 relative z-10">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      <div className="p-6 rounded-xl bg-gray-900 hover:bg-black transition-all duration-300 border-2 border-gray-800 relative overflow-hidden group">
                        <motion.div
                          className="absolute inset-0 bg-binti-red/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="flex items-center gap-4 relative z-10">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-14 h-14 rounded-xl bg-binti-red flex items-center justify-center"
                          >
                            <info.icon className="w-7 h-7 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-400 mb-1">{info.title}</h3>
                            <a
                              href={info.link}
                              className="text-white font-bold text-lg hover:text-binti-red transition-colors"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}




