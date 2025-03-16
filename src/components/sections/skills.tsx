"use client"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"

const skills = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Laravel", "Vue", "Material-UI", "Tailwind CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Elysia", "PHP", "Express", "MongoDB", "PostgreSQL", "Redis" , "MySQL" , "Oracle"],
    },
    {
        category: "Tools & Others",
        items: ["Git", "Docker", "Linux", "CI/CD", "AWS" , "GoCD" , "Gitlab CI/CD" , "Nginx"],
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
}

export default function SkillsSection() {
    const { translations: t } = useLanguage()

    return (
        <section>
            <motion.h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {t.skills.title}
            </motion.h2>
            <motion.div className="space-y-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                {skills.map((skillGroup, index) => (
                    <motion.div key={index} variants={item}>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                                <span key={skillIndex} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
