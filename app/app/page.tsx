'use client'

import { motion } from 'framer-motion'
import { Smartphone, Activity, Bell, Calendar, Heart, Shield, TrendingUp, Users } from 'lucide-react'

export default function AppPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Period Tracking',
      description: 'Accurate cycle tracking with AI-powered predictions based on your unique patterns and biomarker data.',
      color: 'from-binti-red to-purple-600'
    },
    {
      icon: Activity,
      title: 'Pain Management',
      description: 'Track pain levels, identify triggers, and receive personalised recommendations for relief.',
      color: 'from-binti-red to-pink-600'
    },
    {
      icon: Shield,
      title: 'Leak Prevention',
      description: 'Real-time alerts 10-15 minutes before saturation with 95% accuracy to prevent embarrassing moments.',
      color: 'from-gray-600 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Health Insights',
      description: 'Comprehensive analysis of pH, hemoglobin, glucose, and biomarkers for early disease detection.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI algorithms analyze your data to predict cycles, symptoms, and potential health concerns.',
      color: 'from-binti-red to-red-700'
    },
    {
      icon: Users,
      title: 'Healthcare Integration',
      description: 'Share your data securely with healthcare providers for better diagnosis and treatment.',
      color: 'from-gray-700 to-gray-900'
    }
  ]

  const techStack = [
    'Progressive Web App (PWA)',
    'Real-time Bluetooth Connectivity',
    'End-to-End Encryption',
    'Cloud Sync & Backup',
    'Offline Mode Support',
    'AI/ML Analytics Engine'
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-white">
                  Binti Health App
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your personal menstrual health companion. Track, analyze, and understand your cycle like never before with AI-powered insights and smart pad integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white">
                  Coming Soon
                </button>
                <button className="px-8 py-4 glass text-gray-700 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gray-100 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-0.5 bg-white"></div>
                          <div className="w-4 h-0.5 bg-white mt-1"></div>
                          <div className="w-4 h-0.5 bg-white mt-1"></div>
                        </div>
                        <span className="text-white font-bold text-lg">Binti.</span>
                        <span className="text-white/80 text-sm">Health</span>
                      </div>
                      <Bell className="w-5 h-5 text-white" />
                    </div>

                    {/* App Content */}
                    <div className="p-4 space-y-4 bg-gray-50 h-[600px] overflow-y-auto">
                      {/* Cycle Overview Card */}
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-3 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-white" />
                          <span className="text-white font-bold">Cycle Overview</span>
                        </div>
                        <div className="p-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg mb-3"></div>
                          <p className="text-sm text-gray-600 mb-3">Log your first period to see cycle predictions</p>
                          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                            <span className="text-lg">+</span> ADD PERIOD
                          </button>
                        </div>
                      </div>

                      {/* Today's Insights Card */}
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-white" />
                          <span className="text-white font-bold">Today's Insights</span>
                        </div>
                        <div className="p-4">
                          <div className="w-10 h-10 bg-gray-200 rounded-full mb-2"></div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">No insights yet</p>
                          <p className="text-xs text-gray-500">Track your health to see personalized insights</p>
                        </div>
                      </div>

                      {/* Quick Actions Card */}
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3 flex items-center gap-2">
                          <Activity className="w-5 h-5 text-white" />
                          <span className="text-white font-bold">Quick Actions</span>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-4 gap-3">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-xs text-gray-700 text-center">Track Period</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                                <Heart className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-xs text-gray-700 text-center">Log Pain</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Smartphone className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-xs text-gray-700 text-center">Connect Device</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-xs text-gray-700 text-center">Community</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Upcoming Card */}
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3 flex items-center gap-2">
                          <Bell className="w-5 h-5 text-white" />
                          <span className="text-white font-bold">Upcoming</span>
                        </div>
                        <div className="p-4">
                          <div className="w-10 h-10 bg-gray-200 rounded-lg mb-2"></div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">No upcoming events yet</p>
                          <p className="text-xs text-gray-500">Track your period to see predictions</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-6 h-6 text-purple-600">
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                        </div>
                        <span className="text-xs text-purple-600 font-semibold">Home</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Calendar className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400">Period</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <TrendingUp className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400">Insights</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Activity className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400">Leads</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Users className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400">Community</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Smartphone className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400">Connect</span>
                      </div>
                    </div>

                    {/* Floating Action Button */}
                    <div className="absolute bottom-20 right-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-white text-3xl font-light">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-white">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to take control of your menstrual health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass hover:bg-white/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Pad Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-white">
                  Smart Pad Integration
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our app seamlessly connects with the Binti Smart Pad via Bluetooth Low Energy, providing real-time data synchronization and analysis.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-Time Alerts</h4>
                    <p className="text-gray-600">Receive instant notifications about saturation levels and health anomalies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Biomarker Tracking</h4>
                    <p className="text-gray-600">Monitor pH, hemoglobin, glucose, and cancer biomarkers automatically.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Secure & Private</h4>
                    <p className="text-gray-600">All data is encrypted end-to-end and stored securely in the cloud.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl glass">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Technology Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-white"
                    >
                      <p className="text-sm font-medium text-gray-700">{tech}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be the First to Know
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Sign up for early access and exclusive updates about the Binti Health App launch
            </p>
            <button className="px-8 py-4 bg-white text-binti-red rounded-full font-semibold hover:shadow-2xl transition-all duration-300">
              Join Waitlist
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}




