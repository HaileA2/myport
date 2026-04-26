import React from 'react'
import { motion } from 'framer-motion'
import { useLanguageStore } from '../../store'
import { languages } from '../../data/languages'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

export function About() {
  const { language } = useLanguageStore()
  const content = languages[language].about

  return (
    <section id="about" className="py-20 relative">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card variant="glass" className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-64 h-64 mx-auto rounded-full gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-background overflow-hidden">
                    <img 
                      src="/images/profile/profile.jpg" 
                      alt="Haile Abebe Muleta" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full gradient-primary opacity-30 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-foreground">
                  {content.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed">
                  I am a Software Engineering student at Haramaya University with a strong passion for building real-world applications. 
                  My journey into technology began in 2022 when I joined university, and since then, I have continuously developed my skills 
                  through hands-on projects and real-world experience.
                </p>
                
                <p className="text-foreground/80 leading-relaxed mt-4">
                  I aim to build impactful software solutions that solve real-world problems, especially in Ethiopia, while growing as a 
                  full-stack developer and future personal development trainer. My goal is to empower communities through technology and knowledge.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full gradient-primary" />
                    <span className="text-foreground/70">Full Stack Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full gradient-primary" />
                    <span className="text-foreground/70">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full gradient-primary" />
                    <span className="text-foreground/70">Problem Solving</span>
                  </div>
                </div>

                <Button
                  variant="gradient"
                  className="group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
