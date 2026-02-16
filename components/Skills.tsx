'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, Cloud, Database, Layers, Sparkles
} from 'lucide-react'

export default function Skills() {
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

  // Ultra premium multi-layer parallax with smooth spring physics
  const y = useTransform(smoothScrollProgress, [0, 1], [200, -200], { clamp: false })
  const parallaxSlow = useTransform(smoothScrollProgress, [0, 1], [0, -150])
  const parallaxMedium = useTransform(smoothScrollProgress, [0, 1], [0, 220])
  const parallaxFast = useTransform(smoothScrollProgress, [0, 1], [0, -280])

  const [sectionRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        'AWS Lambda', 'API Gateway', 'Cognito', 'SQS', 'SNS', 
        'SES', 'IAM', 'CloudFormation', 'GitHub Actions', 
        'Docker', 'Step Functions', 'CloudWatch'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      title: 'Full Stack',
      icon: Layers,
      skills: [
        'React.js', 'Next.js', 'Node.js', 'Express.js', 
        'FastAPI', 'MongoDB', 'PostgreSQL', 'DynamoDB', 
        'Redis', 'RESTful APIs'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      title: 'Data & AI',
      icon: Database,
      skills: [
        'Snowflake', 'Airbyte', 'DBT', 'Temporal.io', 
        'Amazon Bedrock', 'LangChain', 'LiteLLM'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      {/* Ultra Premium Multi-Layer Parallax */}
      <motion.div
        style={{ 
          y: parallaxSlow,
          x: useTransform(smoothScrollProgress, [0, 1], [0, -90]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 25]),
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-200/35 to-purple-200/35 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: parallaxMedium,
          x: useTransform(smoothScrollProgress, [0, 1], [0, 110]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, -30]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.2]),
        }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/35 to-primary-200/35 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: parallaxFast,
          x: useTransform(smoothScrollProgress, [0, 1], [0, 70]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 40]),
        }}
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
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
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Technical Expertise</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-gray-900 dark:text-gray-100">Technical Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isHovered = hoveredIndex === index
            
            return (
              <motion.div
                key={category.title}
                style={{
                  y: useTransform(scrollYProgress, [0, 1], [
                    index % 2 === 0 ? 100 : -100,
                    index % 2 === 0 ? -100 : 100
                  ])
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1]
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="relative glass-premium rounded-2xl p-6 premium-shadow hover:premium-shadow-lg transition-all duration-300 overflow-hidden">
                  
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-6 premium-shadow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 group-hover:gradient-text transition-all duration-500">
                    {category.title}
                  </h3>
                  
                  {/* Skills grid */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: index * 0.15 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -4,
                          rotate: [0, -5, 5, 0]
                        }}
                            className="relative px-4 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 premium-shadow-sm group-hover:premium-shadow cursor-default overflow-hidden"
                      >
                        <span className="relative z-10">{skill}</span>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}