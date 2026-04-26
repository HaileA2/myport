import { Project, Skill, Experience, BlogPost, SocialLink, Certificate } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'FarmConnect',
    description: 'Flagship project connecting Ethiopian farmers with markets, providing real-time pricing, logistics coordination, and agricultural insights to empower local farming communities.',
    image: '/images/projects/farmconnect.jpg',
    techStack: ['NestJS', 'Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
    liveUrl: 'https://farmconnect.et',
    githubUrl: 'https://github.com/haile/farmconnect',
    category: 'fullstack',
    featured: true,
    createdAt: '2025-06-15'
  },
  {
    id: '7',
    title: 'Belight E-Commerce',
    description: 'E-commerce platform with advanced features including real-time inventory management, AI-powered recommendations, and analytics dashboard.',
    image: '/images/projects/belight-ecommerce.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB', 'OpenAI'],
    liveUrl: 'https://belight.et',
    githubUrl: 'https://github.com/belight-eCommerce',
    category: 'fullstack',
    featured: false,
    createdAt: '2024-11-10'
  },
  {
    id: '8',
    title: 'Malifuu E-Commerce',
    description: 'A comprehensive Ethiopian marketplace platform designed to connect local buyers and sellers efficiently, featuring secure payments and inventory management.',
    image: '/images/projects/malifuu.jpg',
    techStack: ['NestJS', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Stripe'],
    liveUrl: 'https://malifuu.et',
    githubUrl: 'https://github.com/belight-eCommerce',
    category: 'fullstack',
    featured: true,
    createdAt: '2024-12-20'
  },
  {
    id: '9',
    title: 'HAMUBA Books',
    description: 'Personal development library and knowledge management system featuring book recommendations, reading progress tracking, and study resources.',
    image: '/images/projects/hamuba-books.jpg',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://hamuba-books.et',
    githubUrl: 'https://github.com/haile/hamuba-books',
    category: 'fullstack',
    featured: false,
    createdAt: '2024-09-15'
  },
  {
    id: '10',
    title: 'Rentify',
    description: 'Property rental platform developed during internship, featuring tenant screening, payment processing, and maintenance request management.',
    image: '/images/projects/rentify.jpg',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    liveUrl: '',
    githubUrl: 'https://github.com/haile/rentify',
    category: 'fullstack',
    featured: false,
    createdAt: '2025-03-15'
  },
  {
    id: '3',
    title: 'Student Management System',
    description: 'My first real project - a comprehensive system for managing student records, course enrollment, and academic performance tracking for universities.',
    image: '/images/projects/student-system.jpg',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/haile/student-management',
    category: 'fullstack',
    featured: false,
    createdAt: '2024-08-10'
  }
]

export const skills: Skill[] = [
  // Frontend Skills
  { id: '1', name: 'HTML', level: 95, category: 'frontend', icon: 'html' },
  { id: '2', name: 'CSS', level: 90, category: 'frontend', icon: 'css' },
  { id: '3', name: 'Tailwind CSS', level: 88, category: 'frontend', icon: 'tailwind' },
  { id: '4', name: 'React', level: 85, category: 'frontend', icon: 'react' },
  { id: '5', name: 'Next.js', level: 82, category: 'frontend', icon: 'nextjs' },
  { id: '6', name: 'JavaScript', level: 90, category: 'frontend', icon: 'javascript' },
  { id: '7', name: 'TypeScript', level: 78, category: 'frontend', icon: 'typescript' },
  
  // Backend Skills
  { id: '8', name: 'Node.js', level: 80, category: 'backend', icon: 'nodejs' },
  { id: '9', name: 'NestJS', level: 75, category: 'backend', icon: 'nestjs' },
  { id: '10', name: 'PHP', level: 70, category: 'backend', icon: 'php' },
  { id: '11', name: 'Express.js', level: 82, category: 'backend', icon: 'express' },
  { id: '12', name: 'REST APIs', level: 85, category: 'backend', icon: 'api' },
  
  // Tools & Technologies
  { id: '13', name: 'Git', level: 88, category: 'tools', icon: 'git' },
  { id: '14', name: 'Docker', level: 65, category: 'tools', icon: 'docker' },
  { id: '15', name: 'Figma', level: 75, category: 'tools', icon: 'figma' },
  { id: '16', name: 'VS Code', level: 95, category: 'tools', icon: 'vscode' },
  { id: '17', name: 'Postman', level: 85, category: 'tools', icon: 'postman' },
  { id: '18', name: 'Vercel', level: 80, category: 'tools', icon: 'vercel' }
]

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Software Engineering Student',
    company: 'Haramaya University',
    period: '2023 - Present',
    description: 'Pursuing Bachelor\'s degree in Software Engineering, focusing on full-stack development and real-world applications.',
    type: 'education'
  },
  {
    id: '2',
    title: 'Full Stack Developer Intern',
    company: 'Rentify',
    period: '2025',
    description: 'Developed property rental platform features including tenant screening, payment processing, and maintenance management systems.',
    type: 'work'
  },
  {
    id: '3',
    title: 'Full Stack Developer Intern',
    company: 'FarmConnect',
    period: '2025',
    description: 'Built flagship agricultural marketplace connecting Ethiopian farmers with markets, implementing real-time pricing and logistics features.',
    type: 'work'
  },
  {
    id: '4',
    title: 'Joined Haramaya University',
    company: 'Haramaya University',
    period: '2022',
    description: 'Started my journey into technology and software engineering, marking the beginning of my transformation into a developer.',
    type: 'education'
  },
  {
    id: '5',
    title: 'Vice President of Charity Club',
    company: 'Haramaya University',
    period: '2023 - Present',
    description: 'Leading charity initiatives, organizing community service events, and coordinating social impact projects that benefit local communities.',
    type: 'achievement'
  },
  {
    id: '6',
    title: 'President at SSA',
    company: 'Haramaya University',
    period: '2023 - Present',
    description: 'Leading Student Services Association, overseeing student welfare programs, and driving campus development initiatives.',
    type: 'achievement'
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My Web Development Journey: From University to Real Projects',
    excerpt: 'How I transformed from a Software Engineering student to building real-world applications like FarmConnect and Malifuu.',
    content: `# My Web Development Journey: From University to Real Projects

Three years ago, I joined Haramaya University as a curious student with a passion for technology. Today, I'm building impactful software solutions that serve Ethiopian communities. This is my story.

## The Beginning: 2022

When I first stepped into Haramaya University, I had no idea what software engineering truly meant. I was just another student excited about technology but unsure where to start.

## First Steps into Coding

My first real project was a Student Management System. Looking back, it wasn't perfect, but it taught me invaluable lessons about database design, user authentication, and most importantly - how to turn ideas into working code.

## The Breakthrough: Internships in 2025

This year changed everything. I had the opportunity to work with two amazing companies:

### Rentify
I learned how to build scalable rental platforms, implementing features like tenant screening and payment processing.

### FarmConnect
This became my flagship project - connecting Ethiopian farmers with markets. This wasn't just code; it was about making a real impact.

## Lessons Learned

1. **Theory vs Practice**: University gives you foundations, but real projects teach you how to build.
2. **Community Matters**: Being part of the Charity Club and SSA taught me that technology should serve people.
3. **Continuous Growth**: Every project taught me something new.

## Looking Forward

I'm just getting started. My goal is to keep building solutions that empower Ethiopian communities through technology.

## Advice for Fellow Students

- Start building projects early
- Don't be afraid to fail
- Join communities and collaborate
- Always think about the impact you want to make

The journey is long, but every line of code brings you closer to your goals.`,
    date: '2025-08-15',
    tags: ['Web Development', 'Personal Journey', 'Ethiopia', 'Student Life'],
    category: 'Personal Development',
    readTime: 8
  },
  {
    id: '2',
    title: 'Building FarmConnect: Connecting Ethiopian Farmers with Markets',
    excerpt: 'The complete story behind my flagship project - from idea to implementation, challenges faced, and lessons learned.',
    content: `# Building FarmConnect: Connecting Ethiopian Farmers with Markets

FarmConnect started as a simple idea: What if we could use technology to help Ethiopian farmers get better prices for their produce? This is the story of how that idea became a reality.

## The Problem

Ethiopian farmers face numerous challenges:
- Limited market access
- Lack of price information
- Complex logistics
- Middlemen taking large cuts

## The Solution

FarmConnect aims to solve these problems by:
- Providing real-time market prices
- Connecting farmers directly with buyers
- Offering logistics coordination
- Sharing agricultural insights

## Technical Architecture

### Frontend
- **Next.js** for the dashboard and user interfaces
- **Tailwind CSS** for responsive design
- **TypeScript** for type safety

### Backend
- **NestJS** for robust API development
- **PostgreSQL** for data management
- **REST APIs** for mobile app integration

## Challenges Faced

### 1. Market Research
Understanding the real needs of farmers required extensive field visits and conversations.

### 2. Technical Challenges
- Building offline capabilities for rural areas
- Designing interfaces for users with limited tech experience
- Ensuring data security and privacy

### 3. Logistics Integration
Coordinating with transport providers and building efficient routing systems.

## Key Features

### Real-Time Pricing
Using data from various markets to provide up-to-date price information.

### Direct Messaging
Farmers can communicate directly with buyers, eliminating middlemen.

### Logistics Coordination
Integrated transport booking and tracking system.

## Impact

Since launch, FarmConnect has:
- Connected 500+ farmers with markets
- Increased farmer incomes by 15-20%
- Reduced post-harvest losses by 30%

## Lessons Learned

1. **User-Centered Design**: Always start with understanding your users.
2. **Iterative Development**: Build, test, learn, repeat.
3. **Community Trust**: Building trust takes time but is essential.

## Future Plans

- Mobile app for farmers
- AI-powered crop recommendations
- Expansion to more regions

## Call to Action

If you're interested in contributing to FarmConnect or learning more about our mission, please reach out!

Together, we can use technology to transform Ethiopian agriculture.`,
    date: '2025-07-20',
    tags: ['FarmConnect', 'Full Stack', 'Ethiopia', 'Social Impact'],
    category: 'Project Showcase',
    readTime: 10
  },
  {
    id: '3',
    title: 'Challenges in Learning to Code: A Student\'s Perspective',
    excerpt: 'Real talk about the struggles, setbacks, and breakthrough moments in my coding journey as a university student.',
    content: `# Challenges in Learning to Code: A Student's Perspective

Let's be honest - learning to code is hard. As a Software Engineering student at Haramaya University, I've faced numerous challenges. But here's what I've learned.

## The Initial Overwhelm

When I first started, I was overwhelmed by:
- So many programming languages
- Complex algorithms and data structures
- Imposter syndrome hitting hard
- Wondering if I was "cut out for this"

## Academic vs Real-World Skills

### University taught me:
- Theoretical concepts
- Algorithm analysis
- Mathematical foundations
- Perfect code scenarios

### Real world required:
- Debugging skills
- Working with legacy code
- Meeting deadlines
- Communication with clients

## My Biggest Challenges

### 1. Time Management
Balancing coursework, personal projects, and internships was tough. I learned to:
- Use time blocking techniques
- Prioritize important tasks
- Say no to non-essential commitments

### 2. Technical Burnout
There were times I wanted to quit. What helped:
- Taking breaks when needed
- Working on projects I was passionate about
- Finding a supportive community

### 3. Imposter Syndrome
Even after building projects, I sometimes felt like I wasn't good enough. I learned to:
- Celebrate small wins
- Focus on progress, not perfection
- Remember that everyone starts somewhere

## Breakthrough Moments

### First Working Project
When my Student Management System finally worked, everything changed. It proved I could actually build things.

### First Internship
Getting paid to write code was validation that my skills had real value.

### Community Recognition
When classmates started asking for help with their projects, I realized I had knowledge to share.

## Strategies That Worked

### 1. Project-Based Learning
Instead of just studying theory, I:
- Built something every month
- Contributed to open source
- Took on freelance projects

### 2. Study Groups
Working with peers helped me:
- Stay motivated
- Learn different perspectives
- Teach others (which deepened my understanding)

### 3. Mentorship
Finding mentors (both formal and informal) provided:
- Guidance when I was stuck
- Career advice
- Networking opportunities

## Advice for Fellow Students

### For Beginners:
- Start with one language and master it
- Build projects, not just tutorials
- Don't compare your journey to others

### For Intermediate Learners:
- Contribute to open source
- Teach what you've learned
- Start building a portfolio

### For Advanced Students:
- Mentor others
- Focus on system design
- Learn business skills

## The Reality Check

Coding isn't magic. It's:
- Problem-solving
- Persistence
- Continuous learning
- Collaboration

## Looking Forward

I'm still learning every day. The challenges don't stop, but now I have strategies to handle them.

## Final Thoughts

If you're struggling with learning to code:
- You're not alone
- It's normal to feel overwhelmed
- Progress takes time
- Your breakthrough moment is coming

Keep coding. Keep learning. Keep growing.

The world needs your unique perspective and skills.`,
    date: '2025-06-10',
    tags: ['Learning', 'Challenges', 'Student Life', 'Personal Growth'],
    category: 'Personal Development',
    readTime: 12
  },
  {
    id: '4',
    title: 'Tech in Ethiopia: Opportunities and Challenges',
    excerpt: 'Exploring the growing tech ecosystem in Ethiopia and how students can contribute to digital transformation.',
    content: `# Tech in Ethiopia: Opportunities and Challenges

As a Software Engineering student in Ethiopia, I've witnessed incredible changes in our tech ecosystem. Here's my perspective on where we are and where we're going.

## Current State of Tech in Ethiopia

### Growing Ecosystem
- More startups emerging each year
- Increased investment in tech education
- Government support for digital initiatives
- Growing developer community

### Key Sectors
- **FinTech**: Mobile banking and digital payments
- **AgriTech**: Solutions for farmers (like FarmConnect!)
- **EdTech**: Educational platforms and tools
- **HealthTech**: Healthcare management systems

## Opportunities for Students

### 1. Real-World Impact
Unlike in developed markets, Ethiopian students can:
- Solve actual community problems
- See immediate impact of their work
- Build solutions for underserved markets

### 2. Less Competition
- Fewer developers means more opportunities
- Early adopters have advantage
- Room for innovation in many sectors

### 3. Growing Demand
- Companies need local talent
- Government digitization projects
- International companies entering Ethiopian market

## Challenges We Face

### 1. Limited Resources
- Access to cutting-edge tools and technologies
- High-speed internet connectivity issues
- Limited mentorship opportunities

### 2. Infrastructure Gaps
- Unreliable electricity in some areas
- Limited access to modern hardware
- Network connectivity challenges

### 3. Education System
- Theory-heavy curriculum
- Limited practical experience
- Outdated teaching methods in some cases

## How I'm Contributing

### FarmConnect Project
My flagship project addresses:
- Market access for farmers
- Real-time pricing information
- Logistics coordination
- Agricultural insights

### Community Involvement
Through Charity Club and SSA:
- Teaching coding to younger students
- Organizing tech workshops
- Building solutions for community needs

### Knowledge Sharing
- Writing about my experiences
- Contributing to open source
- Mentoring junior students

## Success Stories

### Local Startups Making Waves
- **YayPay**: Digital payment solutions
- **Girum**: Logistics and delivery services
- **EdnaTech**: Educational platforms

### Developer Success Stories
- Ethiopian developers working internationally
- Local startups getting global recognition
- Growing freelance community

## Skills in High Demand

### Technical Skills
- **Web Development**: React, Node.js, Python
- **Mobile Development**: React Native, Flutter
- **Data Science**: Python, R, Machine Learning
- **Cloud Computing**: AWS, Azure, Google Cloud

### Soft Skills
- Problem-solving mindset
- Communication skills
- Adaptability
- Business understanding

## Resources for Ethiopian Students

### Online Learning
- FreeCodeCamp (free, comprehensive)
- Coursera (some free courses)
- YouTube tutorials
- GitHub Learning Lab

### Local Communities
- Addis Dev Meetups
- University tech clubs
- Online developer groups
- Hackathons and competitions

### Government Initiatives
- Digital Ethiopia strategy
- Innovation hubs
- Startup incubators
- Tech scholarship programs

## Future Outlook

### Emerging Trends
- AI and Machine Learning adoption
- Increased mobile penetration
- Growing startup ecosystem
- International investment

### Career Opportunities
- Local software companies
- International remote work
- Freelance opportunities
- Entrepreneurship

## Advice for Fellow Students

### 1. Build Real Projects
Theory is important, but practical experience matters more.

### 2. Network Actively
Connect with other developers, attend meetups, join online communities.

### 3. Stay Updated
Tech moves fast - follow industry trends, learn new technologies.

### 4. Think Locally
Identify problems in your community and build solutions.

### 5. Give Back
Once you learn something, teach others. Help grow the ecosystem.

## My Vision for Ethiopian Tech

I imagine an Ethiopia where:
- Every student has access to quality tech education
- Local solutions solve local problems
- Ethiopian developers compete globally
- Technology drives economic growth

## Call to Action

To my fellow Ethiopian students:
- Start building today
- Join communities
- Share your knowledge
- Believe in your potential

Together, we can build a thriving tech ecosystem in Ethiopia.

The future is bright, and we're the ones who will build it.`,
    date: '2025-05-15',
    tags: ['Ethiopia', 'Tech Ecosystem', 'Opportunities', 'Digital Transformation'],
    category: 'Industry Insights',
    readTime: 15
  }
]

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    issuer: 'Haramaya University',
    date: '2024-12-15',
    description: 'Completed comprehensive full-stack web development program covering modern technologies and best practices.',
    image: '/images/certificates/cert_1.jpg',
    credentialId: 'HU-FSWD-2024-001',
    category: 'academic',
    skills: ['React', 'Node.js', 'TypeScript', 'Database Design']
  },
  {
    id: '2',
    title: 'Leadership Excellence Award',
    issuer: 'Haramaya University Student Services',
    date: '2024-11-20',
    description: 'Recognized for outstanding leadership as President of SSA and Vice President of Charity Club.',
    image: '/images/certificates/certi_2.jpg',
    category: 'leadership',
    skills: ['Leadership', 'Community Service', 'Event Management']
  },
  {
    id: '3',
    title: 'Software Engineering Excellence',
    issuer: 'Computer Science Department',
    date: '2024-06-10',
    description: 'Awarded for exceptional performance in software engineering coursework and project development.',
    image: '/images/certificates/cert-3.jpg',
    category: 'academic',
    skills: ['Software Engineering', 'Algorithm Design', 'System Architecture']
  },
  {
    id: '4',
    title: 'Community Impact Champion',
    issuer: 'Charity Club Haramaya',
    date: '2024-09-05',
    description: 'Recognized for significant contributions to community service initiatives and charity work.',
    image: '/images/certificates/cert-4.jpg',
    category: 'achievement',
    skills: ['Community Service', 'Project Management', 'Team Leadership']
  },
  {
    id: '5',
    title: 'Innovation Challenge Winner',
    issuer: 'Haramaya Tech Hub',
    date: '2024-03-15',
    description: 'Won first place in university innovation challenge for FarmConnect project concept.',
    image: '/images/certificates/cert-5.jpg',
    category: 'achievement',
    skills: ['Innovation', 'Problem Solving', 'Presentation']
  },
  {
    id: '6',
    title: 'Web Development Professional',
    issuer: 'Tech Academy Ethiopia',
    date: '2023-08-20',
    description: 'Professional certification in modern web development technologies and frameworks.',
    credentialUrl: 'https://verify.techacademy.et/WD-2023-0847',
    category: 'professional',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
  },
  {
    id: '7',
    title: 'RUFORUM Certificate',
    issuer: 'Regional Universities Forum for Capacity Building in Agriculture',
    date: '2024-10-15',
    description: 'Certificate of participation and achievement in RUFORUM agricultural innovation program.',
    image: '/images/certificates/ruforum.jpg',
    category: 'academic',
    skills: ['Agricultural Innovation', 'Research', 'Capacity Building']
  },
  {
    id: '8',
    title: 'DINE Certificate',
    issuer: 'Digital Innovation and Entrepreneurship',
    date: '2024-08-30',
    description: 'Certification in digital innovation and entrepreneurship skills development program.',
    image: '/images/certificates/dine.jpg',
    category: 'professional',
    skills: ['Digital Innovation', 'Entrepreneurship', 'Technology Business']
  },
  {
    id: '9',
    title: 'Charity Leadership Certificate',
    issuer: 'Ethiopian Charity Foundation',
    date: '2024-07-20',
    description: 'Recognition for outstanding contributions to charity and community service initiatives.',
    image: '/images/certificates/charity.jpg',
    category: 'leadership',
    skills: ['Charity Work', 'Community Leadership', 'Social Impact']
  }
]

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/HaileA2',
    icon: 'github'
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/haile-abebe-muleta-23493131a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: 'linkedin'
  },
  {
    id: '3',
    platform: 'Telegram',
    url: 'https://t.me/factsooradhu',
    icon: 'telegram'
  },
  {
    id: '4',
    platform: 'Facebook',
    url: 'https://web.facebook.com/profile.php?id=61573336066700',
    icon: 'facebook'
  },
  {
    id: '5',
    platform: 'TikTok',
    url: 'https://www.tiktok.com/@tech_hamuba?lang=en',
    icon: 'tiktok'
  },
  {
    id: '6',
    platform: 'Email',
    url: 'mailto:hailea536@gmail.com',
    icon: 'email'
  }
]
