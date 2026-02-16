'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Ultra smooth spring-based parallax transforms
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  })

  // Ultra premium multi-layer parallax transforms with smooth spring physics
  const y = useTransform(smoothScrollProgress, [0, 1], [0, 400], { clamp: false })
  const opacity = useTransform(smoothScrollProgress, [0, 0.5], [1, 0])
  const scale = useTransform(smoothScrollProgress, [0, 0.5], [1, 0.92])
  const rotate = useTransform(smoothScrollProgress, [0, 1], [0, 5])
  
  // Multi-speed parallax for depth with ultra smooth spring physics
  const parallaxSlow = useTransform(smoothScrollProgress, [0, 1], [0, 200])
  const parallaxMedium = useTransform(smoothScrollProgress, [0, 1], [0, 300])
  const parallaxFast = useTransform(smoothScrollProgress, [0, 1], [0, 500])
  const parallaxReverse = useTransform(smoothScrollProgress, [0, 1], [0, -250])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh bg-white dark:bg-gray-900"
    >
      {/* Ultra Premium Multi-Layer Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1 - Slowest parallax (furthest back) */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-400/40 via-primary-500/30 to-primary-600/40 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            y: parallaxSlow,
            x: useTransform(smoothScrollProgress, [0, 1], [0, mousePosition.x * 0.3]),
            rotate: useTransform(smoothScrollProgress, [0, 1], [0, 10]),
          }}
        />
        
        {/* Layer 2 - Medium parallax */}
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/35 via-pink-500/25 to-primary-400/35 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            y: parallaxReverse,
            x: useTransform(smoothScrollProgress, [0, 1], [0, -mousePosition.x * 0.4]),
            rotate: useTransform(smoothScrollProgress, [0, 1], [0, -15]),
          }}
        />
        
        {/* Layer 3 - Fast parallax (closest) */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-primary-400/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            y: parallaxMedium,
            x: useTransform(smoothScrollProgress, [0, 1], [0, mousePosition.x * 0.5]),
            rotate: useTransform(smoothScrollProgress, [0, 1], [0, 360]),
          }}
        />
        
        {/* Layer 4 - Ultra fast parallax for depth */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-emerald-400/20 via-teal-500/15 to-cyan-400/20 rounded-full blur-3xl"
          style={{
            y: parallaxFast,
            x: useTransform(smoothScrollProgress, [0, 1], [0, mousePosition.x * 0.6]),
            rotate: useTransform(smoothScrollProgress, [0, 1], [0, -20]),
            scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.2]),
          }}
        />
        
        {/* Layer 5 - Reverse parallax for dynamic effect */}
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-violet-400/20 via-fuchsia-500/15 to-pink-400/20 rounded-full blur-3xl"
          style={{
            y: parallaxReverse,
            x: useTransform(smoothScrollProgress, [0, 1], [0, -mousePosition.x * 0.5]),
            rotate: useTransform(smoothScrollProgress, [0, 1], [0, 25]),
            scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.15]),
          }}
        />
      </div>

      {/* Ultra Premium Floating Particles with Parallax */}
      {[...Array(30)].map((_, i) => {
        const particleSpeed = 0.1 + (i % 3) * 0.15
        const particleY = useTransform(scrollYProgress, [0, 1], [0, -200 * particleSpeed])
        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary-400/50 rounded-full backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            y: particleY,
            x: useTransform(smoothScrollProgress, [0, 1], [0, (Math.random() * 100 - 50) * particleSpeed]),
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.3, 2, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        )
      })}

      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [0, 150]),
          opacity,
          scale,
          rotate,
        }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-7xl md:text-9xl font-serif font-bold mb-8"
        >
          <span className="block bg-gradient-to-r from-gray-900 dark:from-gray-100 via-gray-800 dark:via-gray-200 to-gray-900 dark:to-gray-100 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Abhijeet
          </span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="block gradient-text"
          >
            Aayush
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-4 font-light tracking-tight"
        >
          Software Developer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting scalable backend systems, full-stack applications, and cloud-native solutions 
          with precision and passion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <motion.a
            href="#about"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full overflow-hidden premium-shadow hover:premium-glow transition-all duration-500"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Explore My Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 shimmer" />
          </motion.a>
          
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available for hire</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-12 border-2 border-primary-400/50 dark:border-primary-500/50 rounded-full flex justify-center p-1.5 backdrop-blur-sm glass"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}