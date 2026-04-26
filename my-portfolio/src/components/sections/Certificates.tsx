import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, BookOpen, Users, Trophy, X } from 'lucide-react'
import { useLanguageStore } from '../../store'
import { languages } from '../../data/languages'
import { certificates } from '../../data/sampleData'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

type CertificateCategory = 'all' | 'academic' | 'professional' | 'achievement' | 'leadership'

export function Certificates() {
  const { language } = useLanguageStore()
  const content = languages[language].certificates
  const [activeFilter, setActiveFilter] = useState<CertificateCategory>('all')
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null)

  const filters = [
    { key: 'all' as const, label: content.categories.academic },
    { key: 'academic' as const, label: content.categories.academic },
    { key: 'professional' as const, label: content.categories.professional },
    { key: 'achievement' as const, label: content.categories.achievement },
    { key: 'leadership' as const, label: content.categories.leadership }
  ]

  const filteredCertificates = certificates.filter(cert => 
    activeFilter === 'all' || cert.category === activeFilter
  )

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <BookOpen className="h-5 w-5" />
      case 'professional':
        return <Award className="h-5 w-5" />
      case 'achievement':
        return <Trophy className="h-5 w-5" />
      case 'leadership':
        return <Users className="h-5 w-5" />
      default:
        return <Award className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'gradient-primary'
      case 'professional':
        return 'gradient-accent'
      case 'achievement':
        return 'gradient-primary'
      case 'leadership':
        return 'gradient-accent'
      default:
        return 'gradient-primary'
    }
  }

  const getCategoryVariant = (category: string) => {
    switch (category) {
      case 'academic':
        return 'gradient'
      case 'professional':
        return 'neon'
      case 'achievement':
        return 'gradient'
      case 'leadership':
        return 'neon'
      default:
        return 'gradient'
    }
  }

  return (
    <section id="certificates" className="py-20 relative">
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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card variant="glass" className="p-6 hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${getCategoryColor(certificate.category)} flex items-center justify-center text-white`}>
                        {getCategoryIcon(certificate.category)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {certificate.title}
                        </h3>
                        <p className="text-foreground/70 text-sm">
                          {certificate.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Image */}
                  {certificate.image && (
                    <div className="relative group cursor-pointer" onClick={() => setSelectedCertificate(certificate)}>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-background/50">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                            <ExternalLink className="h-4 w-4 text-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-foreground/80 text-sm line-clamp-3">
                    {certificate.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-foreground/60 text-sm">
                    <span>{certificate.date}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="glass" size="sm">
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 3 && (
                      <Badge variant="glass" size="sm">
                        +{certificate.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCertificate(certificate)}
                      className="group/btn"
                    >
                      {content.viewCertificate}
                      <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCertificate(null)}
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
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-white/20 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Certificate Header */}
                  <div className="h-32 gradient-primary flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                        {getCategoryIcon(selectedCertificate.category)}
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {selectedCertificate.title}
                      </h2>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Issued By</h3>
                          <p className="text-foreground/80">{selectedCertificate.issuer}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Date Issued</h3>
                          <p className="text-foreground/80">{selectedCertificate.date}</p>
                        </div>
                        {selectedCertificate.credentialId && (
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">Credential ID</h3>
                            <p className="text-foreground/80 font-mono">{selectedCertificate.credentialId}</p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Category</h3>
                          <Badge variant={getCategoryVariant(selectedCertificate.category)}>
                            {selectedCertificate.category.charAt(0).toUpperCase() + selectedCertificate.category.slice(1)}
                          </Badge>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Skills Demonstrated</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedCertificate.skills.map((skill) => (
                              <Badge key={skill} variant="glass">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Description</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {selectedCertificate.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      {selectedCertificate.credentialUrl && (
                        <Button
                          variant="gradient"
                          size="lg"
                          onClick={() => window.open(selectedCertificate.credentialUrl, '_blank')}
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          {content.verifyCredential}
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setSelectedCertificate(null)}
                      >
                        Close
                      </Button>
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
