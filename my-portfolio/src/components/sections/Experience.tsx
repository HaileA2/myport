import React from 'react'
import { motion } from 'framer-motion'
import { useLanguageStore } from '../../store'
import { languages } from '../../data/languages'
import { experience } from '../../data/sampleData'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function Experience() {
  const { language } = useLanguageStore()
  const content = languages[language].experience

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼'
      case 'education':
        return '🎓'
      case 'achievement':
        return '🏆'
      default:
        return '📌'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'gradient'
      case 'education':
        return 'neon'
      case 'achievement':
        return 'gradient'
      default:
        return 'gradient'
    }
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-white/5"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Timeline Items */}
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10">
                  <motion.div
                    className={`w-full h-full rounded-full ${getTypeColor(item.type)} bg-clip-text text-transparent`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card variant="glass" className="p-6 hover:scale-105 transition-transform duration-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">
                            {getTypeIcon(item.type)}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {item.title}
                            </h3>
                            <p className="text-foreground/70">
                              {item.company}
                            </p>
                          </div>
                        </div>
                        <Badge variant="glass" size="sm">
                          {item.period}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/80 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Type Badge */}
                      <div className="flex justify-start">
                        <Badge variant={getTypeColor(item.type)}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card variant="gradient" className="p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {experience.filter(e => e.type === 'work').length}
                </div>
                <div className="text-white/80">Years of Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {experience.filter(e => e.type === 'education').length}
                </div>
                <div className="text-white/80">Education Milestones</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {experience.filter(e => e.type === 'achievement').length}
                </div>
                <div className="text-white/80">Achievements</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
