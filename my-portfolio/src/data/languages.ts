import { LanguageContent } from '../types'

export const languages: Record<string, LanguageContent> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      blog: 'Blog',
      certificates: 'Certificates',
      contact: 'Contact',
      dashboard: 'Dashboard'
    },
    navigation: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      certificates: 'Certificates',
      dashboard: 'Dashboard',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Haile',
      subtitle: 'Full Stack Developer',
      description: 'Crafting exceptional digital experiences with modern web technologies. Passionate about creating innovative solutions that make a difference.',
      cta: {
        projects: 'View Projects',
        contact: 'Get In Touch',
        resume: 'Download Resume'
      }
    },
    about: {
      title: 'About Me',
      subtitle: 'My Journey',
      mission: 'I\'m a passionate full-stack developer dedicated to building exceptional web applications that solve real-world problems. With expertise in modern technologies and a keen eye for design, I transform ideas into powerful digital solutions.'
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies I work with',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools & Technologies'
      }
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Some of my recent work',
      filters: {
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        fullstack: 'Full Stack'
      },
      viewProject: 'View Project',
      viewCode: 'View Code',
      liveDemo: 'Live Demo'
    },
    experience: {
      title: "My Journey",
      subtitle: "The path that shaped me into who I am today"
    },
    certificates: {
      title: "Certificates & Achievements",
      subtitle: "My certifications and accomplishments that showcase my expertise and dedication",
      categories: {
        academic: "Academic",
        professional: "Professional",
        achievement: "Achievements",
        leadership: "Leadership"
      },
      viewCertificate: "View Certificate",
      verifyCredential: "Verify Credential"
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s create something amazing together',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...'
      },
      success: 'Message sent successfully! I\'ll get back to you soon.',
      error: 'Failed to send message. Please try again.'
    },
    dashboard: {
      title: 'Developer Dashboard',
      stats: {
        projects: 'Projects',
        stars: 'GitHub Stars',
        forks: 'Forks',
        experience: 'Years Experience'
      }
    },
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous'
    }
  },
  am: {
    nav: {
      home: 'ቤት',
      about: 'ስለ እኔ',
      skills: 'ክህሎቶች',
      projects: 'ፕሮጀክቶች',
      experience: 'ልምድ',
      blog: 'ብሎግ',
      certificates: 'ምስክኞች',
      contact: 'ይድረሱኝ',
      dashboard: 'ዳሽቦርድ'
    },
    navigation: {
      home: 'ቤት',
      about: 'ስለ እኔ',
      skills: 'ክህሎቶች',
      projects: 'ፕሮጀክቶች',
      experience: 'ልምድ',
      certificates: 'ምስክኞች',
      dashboard: 'ዳሽቦርድ',
      contact: 'ይድረሱኝ'
    },
    hero: {
      greeting: 'ሰላም፣ እኔ',
      name: 'ሃይለ',
      subtitle: 'ፈሊጣማ ዴቨሎፐር',
      description: 'በዘመናዊ የድር ቴክኖሎጂዎች የተለዩ ዲጂታል ተሞክሮችን በመፍጠር ላይ፣ እውነተኛ ዓለምን የሚፈቱ አዲስ መፍትሄዎችን በመፍጠር ተሳትፋለሁ።',
      cta: {
        projects: 'ፕሮጀክቶችን ይመልከቱ',
        contact: 'ይድረሱኝ',
        resume: 'ሲቪ አውርድ'
      }
    },
    about: {
      title: 'ስለ እኔ',
      subtitle: 'የእኔ ጉዞ',
      mission: 'እኔ በመልካም የድር መተግበሪያዎች ልማት ላይ የተሰማራ ፈሊጣማ ዴቨሎፐር ነኝ። በዘመናዊ ቴክኖሎጂዎች እና በመልካም ዲዛይን አድርጎ ሃሳቦችን ወደ ኃይለኛ ዲጂታል መፍትሄዎች እቀይራለሁ።'
    },
    skills: {
      title: 'ቴክኒካል ክህሎቶች',
      subtitle: 'ከሚሰሩበት ቴክኖሎጂዎች',
      categories: {
        frontend: 'ፍሮንትኤንድ',
        backend: 'ባክኤንድ',
        tools: 'ተሳላፊዎች እና ቴክኖሎጂዎች'
      }
    },
    projects: {
      title: 'የተመረጡ ፕሮጀክቶች',
      subtitle: 'አንዳንድ የቅርቡ ስራ እኔ',
      filters: {
        all: 'ሁሉም',
        frontend: 'ፍሮንትኤንድ',
        backend: 'ባክኤንድ',
        fullstack: 'ፈሊጣማ'
      },
      viewProject: 'ፕሮጀክትን ይመልከቱ',
      viewCode: 'ኮድን ይመልከቱ',
      liveDemo: 'ቀጥታ እይታ'
    },
    experience: {
      title: 'የእኔ ጉዞ',
      subtitle: 'ልምድ እና እድገት'
    },
    certificates: {
      title: 'ምስክኞች እና ልዩ ልዩ ስራዎች',
      subtitle: 'እኔን ባህሪ እና ትጉህ ለማሳየት የሆኑ ምስክኞች እና ልዩ ልዩ ስራዎች እኔ',
      categories: {
        academic: 'አካዳሚክ',
        professional: 'ፕሮፌሽናል',
        achievement: 'ልዩ ልዩ ስራዎች',
        leadership: 'ሊደርሺፕ'
      },
      viewCertificate: 'ምስክክን ይመልከቱ',
      verifyCredential: 'እውቅናን ያረጋግጡ'
    },
    contact: {
      title: 'ይድረሱኝ',
      subtitle: 'አንድንዴ በጣም አስደናቂ ነገር እንፍጠር',
      form: {
        name: 'ስምዎ',
        email: 'ኢሜይልዎ',
        message: 'መልእክትዎ',
        submit: 'መልእክት ላክ',
        sending: 'በመላክ ላይ...'
      },
      success: 'መልእክት ተሳክቶ ተላከ! በቅርቡ እመለሳለሁ።',
      error: 'መልእክት መላክ አልተሳካም። እባክዎ ተመልሰው ይሞክሩ።'
    },
    dashboard: {
      title: 'ዴቨሎፐር ዳሽቦርድ',
      stats: {
        projects: 'ፕሮጀክቶች',
        stars: 'ጊትሃብ ኮከቦች',
        forks: 'ኮፎች',
        experience: 'ዓመታት ልምድ'
      }
    },
    common: {
      loading: 'በመጫን ላይ...',
      error: 'ነገር ተሳልሏል',
      close: 'ዝጋ',
      back: 'ተመለስ',
      next: 'ይቀጉ',
      previous: 'ቀደም'
    }
  },
  om: {
    nav: {
      home: 'Mana',
      about: 'Isaan kiyya',
      skills: 'Gaaffiiwwan',
      projects: 'Piroojiikotot',
      experience: 'Hubaannee',
      blog: 'Blogii',
      certificates: 'Gabaabaa',
      contact: 'Himaa',
      dashboard: 'Dashiibordii'
    },
    navigation: {
      home: 'Mana',
      about: 'Isaan kiyya',
      skills: 'Gaaffiiwwan',
      projects: 'Piroojiikotot',
      experience: 'Hubaannee',
      certificates: 'Gabaabaa',
      dashboard: 'Dashiibordii',
      contact: 'Himaa'
    },
    hero: {
      greeting: 'Akam, ani',
      name: 'Haile',
      subtitle: 'Full Stack Developer',
      description: 'Karaa interneetii haaraaatiin addatti addaa ta\'e kaabaan dijiitaalaa uumuudhaan, sagaleen dhugaan adda addaa qabduuf haaraatti mijatuuf gargaara.',
      cta: {
        projects: 'Piroojiikotot ilaalu',
        contact: 'Himaa',
        resume: 'CV daraabuu'
      }
    },
    about: {
      title: 'Isaan kiyya',
      subtitle: 'Gamaa kiyya',
      mission: 'Ani developer full-stack kan namaa taphatu kan interneetii haaraaatiin hojjechuu danda\'u qabu, bu\'uura dhugaa adda addaa fayyadamuun haaraa kan uumuuf gargaara.'
    },
    skills: {
      title: 'Gaaffiiwwan tekniikaa',
      subtitle: 'Teknooloojiiwwan hojjadhu',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Gargaarsotaa fi teknooloojiiwwan'
      }
    },
    projects: {
      title: 'Piroojiikotot beekamoo',
      subtitle: 'Hojii kiyya dhiyoo ta\'e muraasa',
      filters: {
        all: 'Hunda',
        frontend: 'Frontend',
        backend: 'Backend',
        fullstack: 'Full Stack'
      },
      viewProject: 'Piroojiikii ilaalu',
      viewCode: 'Koodii ilaalu',
      liveDemo: 'Jalaqaba ilaalu'
    },
    experience: {
      title: 'Gamaa kiyya',
      subtitle: 'Hubaannee fi guutuu'
    },
    certificates: {
      title: 'Gabaabaa fi milkaa\'ina',
      subtitle: 'Gabaabaa fi milkaa\'ina kiyya kan beekumsa fi gorfaa kiyya agarsiisu',
      categories: {
        academic: 'Barnoota',
        professional: 'Pirofeeshinaal',
        achievement: 'Milkaa\'ina',
        leadership: 'Hojjettoota'
      },
      viewCertificate: 'Gabaabaa ilaalu',
      verifyCredential: 'Gabaabaa mirkaneessuu'
    },
    contact: {
      title: 'Himaa',
      subtitle: 'Waliin walitti fidee haaraa uufnu',
      form: {
        name: 'Maqaakee',
        email: 'Iimeeliikee',
        message: 'Ergaa keessan',
        submit: 'Ergaa erguu',
        sending: 'Ergamuu jira...'
      },
      success: 'Ergaan guutuu! Yeroo dhiqaa gargaara.',
      error: 'Ergaan hin guutamne. Fayyadamaa deebii\'iin yaalu.'
    },
    dashboard: {
      title: 'Dashiibordii developer',
      stats: {
        projects: 'Piroojiikotot',
        stars: 'GitHub kootti',
        forks: 'Forkotot',
        experience: 'Waggoota hubaannee'
      }
    },
    common: {
      loading: 'Ergamuu jira...',
      error: 'Dogoggorri itti dhufe',
      close: 'Cufu',
      back: 'Deebii\'u',
      next: 'Fulduu',
      previous: 'Duraa'
    }
  }
}
