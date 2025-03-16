'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { en } from '@/locales/en'
import { th } from '@/locales/th'

type Language = 'en' | 'th'
type Translations = typeof en

interface LanguageContextType {
    language: Language
    translations: Translations
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('th')
    const [translations, setTranslations] = useState<Translations>(th as Translations)

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language
        if (savedLang) {
            setLanguage(savedLang)
            setTranslations(savedLang === 'en' ? en : th)
        }
    }, [])

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'th' : 'en'
        setLanguage(newLang)
        setTranslations(newLang === 'en' ? en : th)
        localStorage.setItem('language', newLang)
    }

    return (
        <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
} 