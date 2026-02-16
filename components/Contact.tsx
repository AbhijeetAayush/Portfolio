'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Sparkles } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Ultra smooth spring-based parallax
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  })

  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhijeetayush899@gmail.com',
      href: 'mailto:abhijeetayush899@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8905190044',
      href: 'tel:+918905190044',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AbhijeetAayush', label: 'GitHub', gradient: 'from-gray-700 to-gray-900' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhijeet-aayush-6bb69a228/', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-700' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-6 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      {/* Ultra Premium Multi-Layer Parallax */}
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [180, -180]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, -110]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 28]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.18]),
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-cyan-200/30 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [-180, 180]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, 130]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, -32]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.22]),
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [120, -120]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, 90]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 50]),
        }}
        className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Let's Connect</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-gray-900 dark:text-gray-100">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            style={{
              y: useTransform(smoothScrollProgress, [0, 1], [50, -50]),
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <div className="glass-premium rounded-2xl p-6 premium-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-white dark:from-gray-800 to-gray-50/50 dark:to-gray-700/50 hover:premium-shadow transition-all duration-500 overflow-hidden"
                    >
                      <motion.div
                        className={`p-3 bg-gradient-to-br ${info.gradient} rounded-xl premium-shadow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-1">
                          {info.label}
                        </p>
                        <p className="text-gray-900 dark:text-gray-100 font-semibold group-hover:gradient-text transition-all duration-500">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="glass-premium rounded-2xl p-6 premium-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Social Links
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.15, y: -5, rotate: [0, -5, 5, 0] }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative p-4 bg-gradient-to-br ${social.gradient} rounded-2xl premium-shadow hover:premium-glow transition-all duration-500 group`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            style={{
              y: useTransform(smoothScrollProgress, [0, 1], [-50, 50]),
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <form onSubmit={handleSubmit} className="glass-premium rounded-2xl p-8 premium-shadow space-y-5">
              <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
                      focusedField === 'name' ? 'border-primary-500 premium-shadow' : 'border-gray-200 dark:border-gray-700'
                    }`}
                  whileFocus={{ scale: 1.01 }}
                  placeholder="Your name"
                />
              </div>
              
              <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
                      focusedField === 'email' ? 'border-primary-500 premium-shadow' : 'border-gray-200 dark:border-gray-700'
                    }`}
                  whileFocus={{ scale: 1.01 }}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-500 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
                      focusedField === 'message' ? 'border-primary-500 premium-shadow' : 'border-gray-200 dark:border-gray-700'
                    }`}
                  whileFocus={{ scale: 1.01 }}
                  placeholder="Your message..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 premium-shadow hover:premium-glow transition-all duration-500 group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}