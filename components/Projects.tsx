'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Sparkles, Brain, ArrowRight, Plane, Briefcase } from 'lucide-react'

export default function Projects() {
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
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'WOW Musics',
      description: 'A music streaming platform with AI-powered mashup generation, reducing API latency by 70% using async I/O, Redis caching, and composite indexing, while enabling sub-2-minute GPU-accelerated mashup creation via ensemble stem separation.',
      tech: ['TypeScript', 'Next.js', 'FastAPI', 'Supabase', 'AWS Lambda', 'Redis', 'Modal'],
      icon: Sparkles,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      link: 'https://wowaimusics.vercel.app/',
      github: 'https://github.com/AbhijeetAayush/wow.ai',
      hasLiveDemo: true,
      highlights: [
        '70% reduction in API latency',
        'Sub-2-minute GPU-accelerated mashup creation',
        '60% reduction in dashboard load time',
      ],
    },
    {
      title: 'InsightMate - MarTech Chatbot',
      description: 'AI chatbot that converts natural language into secure Snowflake SQL, leveraging MiniLM embeddings and Redis caching (60-80% hit rate). Reduced redundant LLM calls by 65% via embedding-based caching.',
      tech: ['FastAPI', 'Temporal', 'Snowflake', 'Redis', 'Supabase', 'LiteLLM', 'LangChain'],
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      link: '',
      github: 'https://github.com/AbhijeetAayush',
      hasLiveDemo: false,
      highlights: [
        '65% reduction in redundant LLM calls',
        '60-80% cache hit rate',
        'Cost-efficient production system',
      ],
    },
    {
      title: 'FLYTBASE - Drone Survey Management',
      description: 'Full-stack platform for managing drone fleets and survey missions across organizations. Features OAuth authentication, map-drawn survey areas, mission scheduling, real-time telemetry, and automated PDF reports with RBAC and Row-Level Security.',
      tech: ['TypeScript', 'Next.js 14', 'Python', 'AWS Lambda', 'API Gateway', 'Supabase', 'PostgreSQL', 'Redis', 'MapLibre', 'Mantine'],
      icon: Plane,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      link: '',
      github: 'https://github.com/AbhijeetAayush/Drone-Survey-Management-System',
      hasLiveDemo: false,
      highlights: [
        'Serverless architecture with AWS SAM',
        'Real-time mission control and telemetry',
        'Automated PDF report generation',
        'Multi-organization support with RBAC',
      ],
    },
    {
      title: 'AWS Leave Management System',
      description: 'Serverless leave management system built on AWS, enabling employees to request, track, and manage leave requests with automated approvals, notifications, and comprehensive reporting features.',
      tech: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'Cognito', 'SNS', 'CloudFormation'],
      icon: Briefcase,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      link: '',
      github: 'https://github.com/AbhijeetAayush/AWS-Leave_Management',
      hasLiveDemo: false,
      highlights: [
        'Fully serverless architecture',
        'Automated approval workflows',
        'Real-time notifications via SNS',
        'Scalable and cost-effective solution',
      ],
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      {/* Ultra Premium Multi-Layer Parallax */}
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [200, -200]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, -100]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 30]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.2]),
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-200/35 to-purple-200/35 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [-200, 200]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, 120]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, -35]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.25]),
        }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/35 to-primary-200/35 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [100, -100]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, 80]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 45]),
        }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"
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
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Portfolio Showcase</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-gray-900 dark:text-gray-100">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions that deliver measurable impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                style={{
                  y: useTransform(smoothScrollProgress, [0, 1], [
                    index % 2 === 0 ? 150 : -150,
                    index % 2 === 0 ? -150 : 150
                  ], { clamp: false }),
                  x: useTransform(smoothScrollProgress, [0, 1], [
                    index % 2 === 0 ? 40 : -40,
                    index % 2 === 0 ? -40 : 40
                  ]),
                  rotate: useTransform(smoothScrollProgress, [0, 1], [
                    index % 2 === 0 ? 1.5 : -1.5,
                    index % 2 === 0 ? -1.5 : 1.5
                  ]),
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="group relative"
              >
                <div className="relative glass-premium rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 premium-shadow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 w-fit`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:gradient-text transition-all duration-500">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-8 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="text-sm uppercase tracking-widest text-primary-600 mb-4 font-semibold">
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <motion.div
                              className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm uppercase tracking-widest text-primary-600 mb-4 font-semibold">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.05 }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            className="px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 premium-shadow-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className={`flex items-center gap-4 mt-auto pt-6 border-t border-gray-200 ${project.hasLiveDemo ? 'justify-between' : 'justify-start'}`}>
                      {project.hasLiveDemo && project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold text-sm premium-shadow hover:premium-glow transition-all duration-500 group/link`}
                          whileHover={{ x: 5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold text-sm group/github"
                        whileHover={{ x: 5 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
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