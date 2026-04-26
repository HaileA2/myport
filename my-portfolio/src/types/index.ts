export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'frontend' | 'backend' | 'fullstack'
  featured: boolean
  createdAt: string
}

export interface Skill {
  id: string
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'tools'
  icon: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  type: 'work' | 'education' | 'achievement'
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  category: string
  readTime: number
}

export interface SocialLink {
  id: string
  platform: string
  url: string
  icon: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
  topics: string[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  image?: string
  credentialId?: string
  credentialUrl?: string
  category: 'academic' | 'professional' | 'achievement' | 'leadership'
  skills: string[]
}

export interface LanguageContent {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    blog: string
    contact: string
    dashboard: string
    certificates: string
  }
  hero: {
    greeting: string
    name: string
    subtitle: string
    description: string
    cta: {
      projects: string
      contact: string
      resume: string
    }
  }
  about: {
    title: string
    subtitle: string
    mission: string
  }
  skills: {
    title: string
    subtitle: string
    categories: {
      frontend: string
      backend: string
      tools: string
    }
  }
  projects: {
    title: string
    subtitle: string
    filters: {
      all: string
      frontend: string
      backend: string
      fullstack: string
    }
    viewProject: string
    viewCode: string
    liveDemo: string
  }
  experience: {
    title: string
    subtitle: string
  }
  certificates: {
    title: string
    subtitle: string
    categories: {
      academic: string
      professional: string
      achievement: string
      leadership: string
    }
    viewCertificate: string
    verifyCredential: string
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      message: string
      submit: string
      sending: string
    }
    success: string
    error: string
  }
  dashboard: {
    title: string
    stats: {
      projects: string
      stars: string
      forks: string
      experience: string
    }
  }
  common: {
    loading: string
    error: string
    close: string
    back: string
    next: string
    previous: string
  }
  navigation: {
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    certificates: string
    dashboard: string
    contact: string
  }
}

export type Language = 'en' | 'am' | 'om'
