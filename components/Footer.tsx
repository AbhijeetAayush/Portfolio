'use client'

import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-gray-900 dark:from-gray-950 via-gray-800 dark:via-gray-900 to-gray-900 dark:to-gray-950 text-gray-300 dark:text-gray-400 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center premium-shadow"
            >
              <span className="text-white font-bold text-lg">AA</span>
            </motion.div>
            <p className="flex items-center gap-2 text-sm md:text-base">
              © {currentYear} Abhijeet Aayush. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              {' '}and passion for code.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-dark premium-shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold">Available for new opportunities</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}