'use client'

import { useEffect } from 'react'
import { useThemeStore, useUIStore } from '../src/store'
import { Navigation } from '../src/components/layout/Navigation'
import { Hero } from '../src/components/sections/Hero'
import { About } from '../src/components/sections/About'
import { Skills } from '../src/components/sections/Skills'
import { Projects } from '../src/components/sections/Projects'
import { Experience } from '../src/components/sections/Experience'
import { Certificates } from '../src/components/sections/Certificates'
import { Contact } from '../src/components/sections/Contact'
import { Dashboard } from '../src/components/sections/Dashboard'
import { ToastContainer } from '../src/components/ui/Toast'

export default function Home() {
  const { theme } = useThemeStore()
  const { setScrollProgress } = useUIStore()

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark')
    } else if (theme === 'light') {
      root.setAttribute('data-theme', 'light')
    } else {
      root.removeAttribute('data-theme')
    }

    // Handle scroll progress
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (scrollTop / docHeight) * 100
      setScrollProgress(Math.min(scrollProgress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [theme, setScrollProgress])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Dashboard />
      <Contact />
      <ToastContainer />
    </div>
  )
}
