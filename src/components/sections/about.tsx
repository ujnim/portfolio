'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function AboutSection() {
    const { translations: t } = useLanguage()

    return (
        <section>
            <motion.h2 
                className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                 {t.about.title}
            </motion.h2>
            <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t.about.description1}
                    </p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t.about.description2}
                    </p>
                </div>
            </motion.div>
        </section>
    )
}