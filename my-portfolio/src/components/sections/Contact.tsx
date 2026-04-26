import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Code, Users, MessageCircle, Share, Music } from 'lucide-react'
import { useLanguageStore, useNotificationStore } from '../../store'
import { languages } from '../../data/languages'
import { socialLinks } from '../../data/sampleData'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

export function Contact() {
  const { language } = useLanguageStore()
  const { addNotification } = useNotificationStore()
  const content = languages[language].contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      addNotification({
        type: 'error',
        message: 'Please fill in all fields'
      })
      return
    }

    if (!formData.email.includes('@')) {
      addNotification({
        type: 'error',
        message: 'Please enter a valid email address'
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success
      addNotification({
        type: 'success',
        message: content.success
      })
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      addNotification({
        type: 'error',
        message: content.error
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getSocialIcon = (platform: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'GitHub': <Code className="h-5 w-5" />,
      'LinkedIn': <Users className="h-5 w-5" />,
      'Telegram': <MessageCircle className="h-5 w-5" />,
      'Facebook': <Share className="h-5 w-5" />,
      'TikTok': <Music className="h-5 w-5" />,
      'Email': <Mail className="h-5 w-5" />
    }
    return iconMap[platform] || <Mail className="h-5 w-5" />
  }

  return (
    <section id="contact" className="py-20 relative">
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
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card variant="glass" className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let&apos;s Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-foreground/70">hailea536@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-foreground/70">+251 993386210</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-foreground/70">Haramaya, Ethiopia</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-medium text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      {getSocialIcon(link.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="glass" className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {content.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder={content.form.name}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {content.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder={content.form.email}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {content.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder={content.form.message}
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {content.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {content.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
