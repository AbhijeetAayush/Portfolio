'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Mail, Phone, MapPin, Code, Cloud, Layers } from 'lucide-react'

export default function About() {
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

  // Ultra premium multi-layer parallax with smooth spring physics
  const y = useTransform(smoothScrollProgress, [0, 1], [150, -150], { clamp: false })
  const opacity = useTransform(smoothScrollProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const parallaxSlow = useTransform(smoothScrollProgress, [0, 1], [0, -120])
  const parallaxMedium = useTransform(smoothScrollProgress, [0, 1], [0, 180])
  const parallaxFast = useTransform(smoothScrollProgress, [0, 1], [0, -250])

  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const stats = [
    { label: 'Years of Experience', value: '1+', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { label: 'Projects Completed', value: '10+', icon: Layers, color: 'from-purple-500 to-pink-500' },
    { label: 'Technologies Mastered', value: '20+', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { label: 'Satisfaction Rate', value: '100%', icon: Code, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      {/* Multi-layer parallax backgrounds */}
      <motion.div
        style={{ 
          y: parallaxSlow,
          x: useTransform(smoothScrollProgress, [0, 1], [0, -50]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 10]),
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/25 to-purple-200/25 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: parallaxMedium,
          x: useTransform(smoothScrollProgress, [0, 1], [0, 60]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, -15]),
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/25 to-primary-200/25 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: parallaxFast,
          x: useTransform(smoothScrollProgress, [0, 1], [0, 80]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.2]),
        }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/15 to-rose-200/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-10 items-start">
          {/* Left Column - Biography */}
          <motion.div
            ref={sectionRef}
            style={{ y, opacity }}
            className="space-y-6 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="glass-premium rounded-2xl p-6 premium-shadow hover:premium-shadow-lg transition-all duration-300"
            >
              <h2 className="text-sm uppercase tracking-widest text-primary-600 mb-4 font-semibold flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
                Biography
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Work for money and <span className="gradient-text font-semibold">code for love</span>! I'm Abhijeet, a Software Developer 
                specializing in backend engineering, API development, full-stack applications, 
                and cloud-native systems. With a strong foundation in data processing, 
                microservices, CI/CD, and object-oriented programming, I focus on building 
                scalable systems that improve performance and reduce costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="glass-premium rounded-2xl p-6 premium-shadow hover:premium-shadow-lg transition-all duration-300"
            >
              <h2 className="text-sm uppercase tracking-widest text-primary-600 mb-4 font-semibold flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
                Contact
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:text-primary-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>Pune, Maharashtra, India</span>
                </motion.a>
                <motion.a
                  href="mailto:abhijeetayush899@gmail.com"
                  className="flex items-center gap-3 group hover:text-primary-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-primary-500" />
                  <span>abhijeetayush899@gmail.com</span>
                </motion.a>
                <motion.a
                  href="tel:+918905190044"
                  className="flex items-center gap-3 group hover:text-primary-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-primary-500" />
                  <span>+91 8905190044</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="glass-premium rounded-2xl p-6 premium-shadow hover:premium-shadow-lg transition-all duration-300"
            >
              <h2 className="text-sm uppercase tracking-widest text-primary-600 mb-4 font-semibold flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
                Services
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {['Backend API Development', 'Full-Stack Web Applications', 'Cloud-Native Solutions', 'Microservices Architecture', 'DevOps & CI/CD Pipelines'].map((service, i) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Center Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, -80]),
                rotate: useTransform(scrollYProgress, [0, 1], [0, 8]),
              }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] group"
              whileHover={{ scale: 1.05 }}
            >
              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white premium-shadow-lg group-hover:premium-glow transition-all duration-500">
                <Image
                  src="/profile.png"
                  alt="Abhijeet Aayush"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Rotating decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-primary-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-20px] rounded-full border-2 border-dotted border-primary-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
            className="grid grid-cols-2 gap-6 lg:order-3"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                className="group relative glass-premium rounded-2xl p-6 premium-shadow hover:premium-shadow-lg transition-all duration-300 overflow-hidden"
              >
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Value */}
                  <motion.div
                    className="text-5xl font-bold gradient-text mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}