'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaDownload } from 'react-icons/fa'

export default function HeroSection() {
    const { translations: t } = useLanguage()
    
    return (
        <section className="text-center">
            <motion.div 
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mt-4 sm:mt-8">
                    <Image
                        src={process.env.NEXT_PUBLIC_IMAGE_PROFILE as string}
                        alt="MinJu Profile"
                        fill
                        className="rounded-full object-cover shadow-lg ring-4 ring-blue-100 dark:ring-blue-900"
                        priority
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
            >
                <motion.h1 
                    className="text-3xl font-bold text-gray-800 dark:text-white"
                >
                    <span className="text-blue-600 dark:text-blue-400">{t.hero.greeting}</span>
                </motion.h1>
                <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-300"
                >
                    {t.hero.role}
                </motion.p>
                <motion.p 
                    className="text-sm text-gray-500 dark:text-gray-400"
                >
                    {t.hero.company}
                </motion.p>
                <motion.div
                    className="flex justify-center gap-4 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.a
                        href="#experience"
                        className="content-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t.hero.cta.primary}
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="content-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t.hero.cta.secondary}
                    </motion.a>
                    <motion.a
                        href={`resume/resume.pdf`}
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload className="w-4 h-4" />
                        {t.hero.cta.resume}
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
} 