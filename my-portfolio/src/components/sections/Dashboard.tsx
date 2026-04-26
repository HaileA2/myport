import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguageStore } from '../../store'
import { languages } from '../../data/languages'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

interface DashboardStats {
  totalProjects: number
  githubStars: number
  githubForks: number
  yearsExperience: number
  totalCommits: number
  repositories: number
  followers: number
  following: number
}

export function Dashboard() {
  const { language } = useLanguageStore()
  const content = languages[language].dashboard
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 6,
    githubStars: 5,
    githubForks: 10,
    yearsExperience: 4,
    totalCommits: 300,
    repositories: 26,
    followers: 10,
    following: 10
  })
  const [isLoading, setIsLoading] = useState(false)

  const AnimatedCounter = ({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      if (isVisible && !isLoading) {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(timer)
      }
    }, [isVisible, value, isLoading])

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsVisible(true)}
        className="text-center space-y-2"
      >
        <div className="text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
          {count}{suffix}
        </div>
        <div className="text-foreground/70 text-sm">
          {label}
        </div>
      </motion.div>
    )
  }

  const mainStats = [
    { value: stats.totalProjects, label: content.stats.projects, suffix: '+' },
    { value: stats.githubStars, label: content.stats.stars, suffix: '⭐' },
    { value: stats.githubForks, label: content.stats.forks, suffix: '' },
    { value: stats.yearsExperience, label: content.stats.experience, suffix: '+' }
  ]

  const secondaryStats = [
    { value: stats.totalCommits, label: 'Total Commits', suffix: '+' },
    { value: stats.repositories, label: 'Repositories', suffix: '' },
    { value: stats.followers, label: 'GitHub Followers', suffix: '' },
    { value: stats.following, label: 'Following', suffix: '' }
  ]

  return (
    <section id="dashboard" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg mb-4">
            {content.title}
          </h2>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {mainStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="p-6 text-center hover:scale-105 transition-transform duration-300">
                <AnimatedCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Secondary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card variant="gradient" className="p-8">
            <div className="grid md:grid-cols-4 gap-8">
              {secondaryStats.map((stat, index) => (
                <AnimatedCounter key={`secondary-${stat.label}`} value={stat.value} label={stat.label} suffix={stat.suffix} />
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <Card variant="glass" className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Development Activity</h3>
            
            {/* Simple Activity Visualization */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Projects Completed</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-sm font-medium">{stats.totalProjects}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Code Quality</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full gradient-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                  <span className="text-sm font-medium">92%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Client Satisfaction</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                  <span className="text-sm font-medium">95%</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <Card variant="glass" className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h3>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="p-4 rounded-lg bg-background/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded gradient-primary flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📚</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">HAMUBA Books</div>
                    <div className="text-xs text-foreground/70">Personal Development</div>
                  </div>
                </div>
                <Badge variant="glass" size="sm">
                  2024-2025
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="p-4 rounded-lg bg-background/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded gradient-primary flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🌾</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">FarmConnect</div>
                    <div className="text-xs text-foreground/70">Agricultural Platform</div>
                  </div>
                </div>
                <Badge variant="glass" size="sm">
                  2024-2025
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="p-4 rounded-lg bg-background/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded gradient-primary flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🛒</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Malifuu E-Commerce</div>
                    <div className="text-xs text-foreground/70">Marketplace Platform</div>
                  </div>
                </div>
                <Badge variant="glass" size="sm">
                  2024-2025
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="p-4 rounded-lg bg-background/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded gradient-primary flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🤖</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Agentic AI Training</div>
                    <div className="text-xs text-foreground/70">AI/ML Development</div>
                  </div>
                </div>
                <Badge variant="glass" size="sm">
                  2024-2025
                </Badge>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
