import React from 'react'
import { Globe } from 'lucide-react'
import { useLanguageStore } from '../../store'
import { Button } from './Button'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
  { code: 'om', name: 'Afaan Oromo', flag: '🇪🇹' }
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore()
  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.flag} {currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
      </Button>
      
      <div className="absolute top-full right-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="glass rounded-lg p-1 min-w-[120px]">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(lang.code as 'en' | 'am' | 'om')}
              className={`w-full justify-start gap-2 ${
                language === lang.code ? 'bg-primary/20 text-primary' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span className="hidden sm:inline">{lang.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
