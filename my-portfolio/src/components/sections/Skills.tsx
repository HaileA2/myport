import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguageStore } from '../../store'
import { languages } from '../../data/languages'
import { skills } from '../../data/sampleData'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function Skills() {
  const { language } = useLanguageStore()
  const content = languages[language].skills
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'tools'>('frontend')

  const categories = [
    { key: 'frontend' as const, label: content.categories.frontend },
    { key: 'backend' as const, label: content.categories.backend },
    { key: 'tools' as const, label: content.categories.tools }
  ]

  const filteredSkills = skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 relative">
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
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-lg p-1 flex gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'gradient-primary text-white'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    </div>
                    <Badge variant="gradient" size="sm">
                      {skill.level}%
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full gradient-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                    
                    {/* Skill Level Indicators */}
                    <div className="flex justify-between text-xs text-foreground/50">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Expert</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="flex justify-center">
                    <Badge variant="glass" size="sm">
                      {categories.find(cat => cat.key === skill.category)?.label}
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
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
                  {skills.filter(s => s.category === 'frontend').length}
                </div>
                <div className="text-white/80">Frontend Technologies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {skills.filter(s => s.category === 'backend').length}
                </div>
                <div className="text-white/80">Backend Technologies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {skills.filter(s => s.category === 'tools').length}
                </div>
                <div className="text-white/80">Tools & DevOps</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
