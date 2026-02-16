'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  GraduationCap, School, Building2, Briefcase, 
  Calendar, MapPin, Sparkles, Award, Rocket, Code2
} from 'lucide-react'

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
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
    threshold: 0.1,
    triggerOnce: true,
  })

  const journeyItems = [
    {
      type: 'education',
      title: 'ST JOSEPH\'S SCHOOL',
      subtitle: 'Primary & Secondary Education',
      period: '2006 - 2018',
      description: 'Completed my schooling till 10th grade, building the foundation of my academic journey',
      icon: School,
      gradient: 'from-blue-500 to-cyan-500',
      location: 'India',
      year: '2018',
    },
    {
      type: 'education',
      title: 'SKP VIDYA VIHAR',
      subtitle: 'Higher Secondary Education',
      period: '2018 - 2020',
      description: 'Pursued 10+2 education, focusing on science and mathematics, preparing for engineering',
      icon: GraduationCap,
      gradient: 'from-purple-500 to-pink-500',
      location: 'India',
      year: '2020',
    },
    {
      type: 'education',
      title: 'VISVESVARAYA TECHNOLOGICAL UNIVERSITY',
      subtitle: 'Bachelor of Engineering',
      period: '2021 - 2025',
      description: 'Pursuing BE in Computer Science and Engineering, mastering software development and system design',
      icon: Building2,
      gradient: 'from-green-500 to-emerald-500',
      location: 'Karnataka, India',
      year: '2025',
    },
    {
      type: 'work',
      title: 'TechnoWard Technologies',
      subtitle: 'Software Developer Intern',
      period: 'August 2024 - November 2024',
      description: 'Engineered responsive full-stack web applications with React.js frontend and Node.js/Express.js backend, collaborating in Agile environment using JIRA, Swagger, and Git',
      icon: Rocket,
      gradient: 'from-orange-500 to-red-500',
      location: 'Bengaluru, Karnataka',
      year: '2024',
    },
    {
      type: 'work',
      title: 'AntStack',
      subtitle: 'Backend Developer Intern',
      period: 'February 2025 - May 2025',
      description: 'Developed serverless, event-driven workflows and automated deployment pipelines',
      icon: Briefcase,
      gradient: 'from-indigo-500 to-purple-500',
      location: 'Bengaluru, Karnataka',
      year: '2025',
    },
    {
      type: 'work',
      title: 'DVIO Digital',
      subtitle: 'Software Engineer',
      period: 'July 2025 - Present',
      description: 'Building scalable backend systems, developing GenAI solutions, and optimizing high-performance applications',
      icon: Code2,
      gradient: 'from-primary-500 to-primary-600',
      location: 'Pune, Maharashtra',
      year: 'Present',
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-white dark:from-gray-900 via-gray-50/30 dark:via-gray-800/30 to-white dark:to-gray-900 overflow-hidden"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      {/* Ultra Premium Multi-Layer Parallax */}
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [0, -250]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, -120]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 35]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.25]),
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/30 via-purple-200/25 to-pink-200/30 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [0, 250]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, 140]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, -40]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.3]),
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/30 via-blue-200/25 to-primary-200/30 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass premium-shadow-sm mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
            </motion.div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">My Story</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl font-serif font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 dark:from-gray-100 via-gray-800 dark:via-gray-200 to-gray-900 dark:to-gray-100 bg-clip-text text-transparent">
              My Journey
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From student to engineer — a timeline of growth, learning, and achievement
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 via-primary-400 via-primary-500 to-primary-600 rounded-full hidden lg:block"
            style={{ originY: 0 }}
          >
            {/* Animated progress indicator */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              }}
            />
          </motion.div>

          {/* Journey Items - Compact Design */}
          <div className="space-y-12 lg:space-y-16">
            {journeyItems.map((item, index) => {
              const Icon = item.icon
              const isHovered = hoveredIndex === index
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.12 + 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="relative z-20 flex-shrink-0 lg:mt-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Year Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.12 + 0.7 }}
                      className={`absolute -top-6 left-1/2 transform -translate-x-1/2 px-2.5 py-1 rounded-lg bg-gradient-to-r ${item.gradient} text-white text-[10px] font-bold premium-shadow-sm whitespace-nowrap hidden lg:block`}
                    >
                      {item.year}
                    </motion.div>

                    {/* Icon Container */}
                    <motion.div
                      className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} premium-shadow-lg flex items-center justify-center group`}
                      animate={isHovered ? { 
                        scale: [1, 1.08, 1.05],
                        rotate: [0, 3, -3, 0]
                      } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-7 h-7 text-white relative z-10" />
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute -inset-3 rounded-xl bg-gradient-to-br ${item.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                      />
                    </motion.div>

                    {/* Connection line for mobile */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary-300 to-primary-400 lg:hidden" />
                  </motion.div>

                  {/* Compact Content Card */}
                  <motion.div
                    className={`flex-1 w-full lg:max-w-md order-1 ${
                      isEven ? 'lg:text-left' : 'lg:text-right'
                    }`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative glass-premium rounded-2xl p-5 premium-shadow hover:premium-shadow-lg transition-all duration-300 group">
                      {/* Compact Header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          {/* Badge */}
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r ${item.gradient} text-white text-[10px] font-bold uppercase tracking-wider mb-2.5 premium-shadow-sm`}>
                            {item.type === 'education' ? (
                              <>
                                <GraduationCap className="w-3 h-3" />
                                <span>Education</span>
                              </>
                            ) : (
                              <>
                                <Briefcase className="w-3 h-3" />
                                <span>Experience</span>
                              </>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:gradient-text transition-all duration-300 line-clamp-1">
                            {item.title}
                          </h3>

                          {/* Subtitle */}
                          <p className={`text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Meta Info - Compact */}
                      <div className={`flex flex-wrap items-center gap-3 mb-3 text-xs text-gray-500 dark:text-gray-400 ${
                        isEven ? 'lg:justify-start' : 'lg:justify-end'
                      }`}>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary-500" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-primary-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description - Compact */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: journeyItems.length * 0.12 + 1.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mt-16"
          >
            <motion.div
              className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 premium-shadow-lg flex items-center justify-center"
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Award className="w-8 h-8 text-white relative z-10" />
              
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-primary-400 opacity-50"
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}