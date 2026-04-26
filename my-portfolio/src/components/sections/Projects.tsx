import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code, X } from 'lucide-react'
import { useLanguageStore } from '../../store'
import { languages } from '../../data/languages'
import { projects } from '../../data/sampleData'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack'

export function Projects() {
  const { language } = useLanguageStore()
  const content = languages[language].projects
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filters = [
    { key: 'all' as const, label: content.filters.all },
    { key: 'frontend' as const, label: content.filters.frontend },
    { key: 'backend' as const, label: content.filters.backend },
    { key: 'fullstack' as const, label: content.filters.fullstack }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const regularProjects = filteredProjects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 relative">
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

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-lg p-1 flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'gradient-primary text-white'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={`featured-${project.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card variant="elevated" className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                    {/* Project Image */}
                    <div className="h-48 gradient-primary flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="text-4xl font-bold text-white z-10">
                        {project.title.charAt(0)}
                      </div>
                      
                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="flex gap-2">
                          <Button
                            variant="glass"
                            size="sm"
                            onClick={() => setSelectedProject(project)}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground/70 text-sm line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="glass" size="sm">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 3 && (
                          <Badge variant="glass" size="sm">
                            +{project.techStack.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        {project.liveUrl && (
                          <Button
                            variant="gradient"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            {content.liveDemo}
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Code className="h-4 w-4 mr-1" />
                            {content.viewCode}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={`regular-${project.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="group"
                >
                  <Card variant="glass" className="p-6 hover:scale-105 transition-transform duration-300">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground/70 text-sm line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 2).map((tech) => (
                          <Badge key={tech} variant="glass" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Code className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-white/20 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Project Header */}
                  <div className="h-64 gradient-primary flex items-center justify-center relative">
                    <div className="text-6xl font-bold text-white">
                      {selectedProject.title.charAt(0)}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {selectedProject.title}
                      </h2>
                      <p className="text-foreground/80 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <Badge key={tech} variant="gradient">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      {selectedProject.liveUrl && (
                        <Button
                          variant="gradient"
                          size="lg"
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          {content.liveDemo}
                        </Button>
                      )}
                      {selectedProject.githubUrl && (
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                        >
                          <Code className="h-5 w-5 mr-2" />
                          {content.viewCode}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
