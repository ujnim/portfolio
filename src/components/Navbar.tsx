'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect } from 'react'

const TypewriterText = ({ text }: { text: string }) => {
    return (
        <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block whitespace-nowrap overflow-hidden"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="inline-block tracking-normal"
                    style={{ marginRight: char === ' ' ? '0.5em' : '0' }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    )
}

export default function Navbar() {
    const { translations: t, language, toggleLanguage } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showNickname, setShowNickname] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowNickname(prev => !prev)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const menuItems = [
        { title: t.nav.about, href: '#about' },
        { title: t.nav.skills, href: '#skills' },
        { title: t.nav.projects, href: '#projects' },
        { title: t.nav.contact, href: '#contact' }
    ]

    return (
        <motion.nav 
            className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-white text-xl font-bold mr-2">
                            Portfolio |
                        </span>
                        <div className="relative h-6">
                            <AnimatePresence mode="wait">
                                {showNickname ? (
                                    <motion.div
                                        key="nickname"
                                        className="absolute text-xl font-bold text-blue-400"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <TypewriterText text="MinJu" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="fullname"
                                        className="absolute text-xl font-bold text-blue-400"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <TypewriterText text={t.hero.greeting} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                            >
                                <Link 
                                    href={item.href}
                                    className="text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    {item.title}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.button
                            onClick={toggleLanguage}
                            className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {language === 'en' ? 'TH' : 'EN'}
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-4">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="px-4"
                                >
                                    <button
                                        onClick={() => {
                                            toggleLanguage()
                                            setIsMenuOpen(false)
                                        }}
                                        className="w-full py-2 text-center rounded-lg bg-gray-800 text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        {language === 'en' ? 'TH' : 'EN'}
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
} 