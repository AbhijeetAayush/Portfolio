'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, TrendingUp, Sparkles, ArrowRight } from 'lucide-react'

export default function Experience() {
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

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'DVIO Digital',
      location: 'Pune, Maharashtra',
      period: 'July 2025 - Present',
      icon: Briefcase,
      gradient: 'from-blue-500 to-cyan-500',
      achievements: [
        'Developed an agentic GenAI chatbot with tool-calling, ranking logic, and context management, reducing hallucinations by 30% and errors by 35%',
        'Built scalable backend systems for high-volume MarTech platform, orchestrating reliable multi-source data flows',
        'Designed fault-tolerant ETL pipelines using Temporal workflows, cutting failures by 50% and raising throughput by 40%',
        'Optimized dashboard performance with TanStack Query, significantly reducing API calls and page load times',
      ],
      tech: ['FastAPI', 'Snowflake', 'Amazon Bedrock', 'LiteLLM', 'LangChain', 'Redis', 'MySQL', 'Airbyte', 'Temporal'],
    },
    {
      title: 'Backend Developer Intern',
      company: 'AntStack',
      location: 'Bengaluru, Karnataka',
      period: 'February 2025 - May 2025',
      icon: Briefcase,
      gradient: 'from-purple-500 to-pink-500',
      achievements: [
        'Devised serverless, event-driven workflows achieving 45% improvement in operational efficiency',
        'Automated deployment and service orchestration, increasing deployment throughput by 60%',
        'Built Slack integration for real-time notifications, improving workflow visibility across teams',
      ],
      tech: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'S3', 'Cognito', 'CloudFormation', 'GitHub Actions'],
    },
    {
      title: 'Software Developer Intern',
      company: 'TechnoWard Technologies',
      location: 'Bengaluru, Karnataka',
      period: 'August 2024 - November 2024',
      icon: Briefcase,
      gradient: 'from-orange-500 to-red-500',
      achievements: [
        'Engineered a responsive full-stack web application integrating React.js for the frontend with secure, scalable REST APIs built on Node.js, Express.js, and MongoDB for efficient data handling',
        'Collaborated in an Agile environment using JIRA for task tracking, Swagger for API documentation, and Git for version control to streamline team workflows and ensure high-quality deliverables',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JIRA', 'Swagger', 'Git'],
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
          y: useTransform(smoothScrollProgress, [0, 1], [150, -150]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, -80]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 20]),
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.15]),
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/25 to-purple-200/25 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ 
          y: useTransform(smoothScrollProgress, [0, 1], [-120, 120]),
          x: useTransform(smoothScrollProgress, [0, 1], [0, 100]),
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, -25]),
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl -z-10"
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
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Professional Journey</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-gray-900 dark:text-gray-100">Work Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building scalable systems and delivering impactful solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <ExperienceCard
                key={`${exp.company}-${index}`}
                exp={exp}
                index={index}
                Icon={Icon}
                smoothScrollProgress={smoothScrollProgress}
                inView={inView}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

type ExperienceType = {
  title: string
  company: string
  location: string
  period: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  achievements: string[]
  tech: string[]
}

function ExperienceCard({ exp, index, Icon, smoothScrollProgress, inView }: {
  exp: ExperienceType
  index: number
  Icon: React.ComponentType<{ className?: string }>
  smoothScrollProgress: any
  inView: boolean
}) {
  const isEven = index % 2 === 0
  const yTransform = useTransform(
    smoothScrollProgress,
    [0, 1],
    [isEven ? 80 : -80, isEven ? -80 : 80],
    { clamp: false }
  )
  const xTransform = useTransform(
    smoothScrollProgress,
    [0, 1],
    [isEven ? 30 : -30, isEven ? -30 : 30]
  )
  const rotateTransform = useTransform(
    smoothScrollProgress,
    [0, 1],
    [isEven ? 1 : -1, isEven ? -1 : 1]
  )
  
  return (
    <motion.div
      style={{
        y: yTransform,
        x: xTransform,
        rotate: rotateTransform,
      }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="group relative"
    >
      <div className="relative glass-premium rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-300 overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div className="flex items-start space-x-5 mb-6 md:mb-0">
              <motion.div
                className={`p-4 bg-gradient-to-br ${exp.gradient} rounded-2xl premium-shadow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:gradient-text transition-all duration-500">
                  {exp.title}
                </h3>
                <p className={`text-2xl font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-3`}>
                  {exp.company}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm uppercase tracking-widest text-primary-600 mb-4 font-semibold flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 group/item"
                >
                  <motion.div
                    className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${exp.gradient} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}
                  />
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors">
                    {achievement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-primary-600 mb-4 font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`px-4 py-2 bg-gradient-to-br ${exp.gradient} text-white rounded-xl text-xs font-semibold premium-shadow-sm hover:premium-shadow transition-all duration-300 cursor-default`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Glow effect */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-br ${exp.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
        />
      </div>
    </motion.div>
  )
}