'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const contactInfo = [
    {
        icon: FaEnvelope,
        label: "อีเมล",
        value: "exzoqynnn.sarawut@hotmail.com",
        link: "mailto:exzoqynnn.sarawut@hotmail.com"
    },
]

const socialLinks = [
    {
        icon: FaGithub,
        label: "GitHub",
        link: "https://github.com/ujnim"
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        link: "#"
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
}

export default function ContactSection() {
    const { translations: t } = useLanguage()

    return (
        <section>
            <motion.h2 
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t.contact.title}
            </motion.h2>
            <motion.div
                className="space-y-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.link}
                            className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            variants={item}
                        >
                            <contact.icon className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                            <span className="text-base md:text-lg">{contact.value}</span>
                        </motion.a>
                    ))}
                </div>
                <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            variants={item}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <social.icon className="w-7 h-7 md:w-8 md:h-8" />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    )
} 