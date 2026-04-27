import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Download, ArrowRight, Code, Users, MessageCircle, Share, Music } from 'lucide-react'
import { useLanguageStore } from '../../store'
import { languages } from '../../data/languages'
import { socialLinks } from '../../data/sampleData'
import { Button } from '../ui/Button'

const typingTexts = [
  'Full Stack Developer | Software Engineer',
  'Building scalable digital solutions',
  'Transforming ideas into impactful software',
  'Crafting software that empowers communities'
]

export function Hero() {
  const { language } = useLanguageStore()
  const content = languages[language].hero
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait then delete
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [currentText, currentTextIndex, isDeleting])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-primary opacity-20" />
        <div className="absolute inset-0">
          {[
            { size: 280, left: '10%', top: '20%', delay: 0 },
            { size: 320, left: '70%', top: '60%', delay: 0.5 },
            { size: 240, left: '15%', top: '40%', delay: 1 },
            { size: 360, left: '80%', top: '30%', delay: 1.5 },
            { size: 220, left: '40%', top: '70%', delay: 2 },
            { size: 300, left: '25%', top: '50%', delay: 2.5 }
          ].map((bubble, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full gradient-primary opacity-30 blur-3xl"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: bubble.left,
                top: bubble.top,
              }}
              animate={{
                x: [0, bubble.size * 0.1, 0],
                y: [0, bubble.size * 0.1, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 3 + bubble.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-lg md:text-xl text-foreground/70 font-medium">
              {content.greeting}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg"
          >
            Haile Abebe Muleta
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md"
          >
            (HAMUBA)
          </motion.div>

          {/* Typing Effect */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-12"
          >
            <span className="text-primary">{currentText}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="gradient"
              size="lg"
              className="group relative overflow-hidden"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.cta.projects}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              variant="glass"
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                {content.cta.contact}
                <Mail className="h-4 w-4" />
              </span>
            </Button>

            <Button
              variant="neon"
              size="lg"
              className="group"
            >
              <span className="flex items-center gap-2">
                {content.cta.resume}
                <Download className="h-4 w-4" />
              </span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="text-foreground/70 group-hover:text-foreground transition-colors">
                  {getSocialIcon(link.platform)}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
