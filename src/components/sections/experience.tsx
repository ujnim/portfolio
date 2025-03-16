"use client"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function ExperienceSection() {
    const [expandedProject, setExpandedProject] = useState<number | null>(0)
    const { translations: t } = useLanguage()
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

    const toggleProject = (index: number) => {
        setExpandedProject(expandedProject === index ? null : index)
    }

    const stats = [
        { number: "5+", label: t.experience.stats.years },
        { number: "10+", label: t.experience.stats.projects },
        { number: "15+", label: t.experience.stats.technologies },
    ]

    const experiences = [
        {
            period: t.experience.jobs[0]?.period,
            position: t.experience.jobs[0]?.position,
            company: "The Siam Cement Public Co., Ltd",
            description: t.experience.jobs[0]?.description,
            achievements: t.experience.jobs[0]?.achievements ?? [],
            projects: [
                {
                    name: t.experience.jobs[0]?.projects?.[0]?.name,
                    period: t.experience.jobs[0]?.projects?.[0]?.period,
                    description: t.experience.jobs[0]?.projects?.[0]?.description,
                    image: `${basePath}/images/sale-dashboard.png`,
                    tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Power Automate"],
                    highlights: t.experience.jobs[0]?.projects?.[0]?.highlights ?? [],
                },
                {
                    name: t.experience.jobs[0]?.projects?.[1]?.name,
                    period: t.experience.jobs[0]?.projects?.[1]?.period,
                    description: t.experience.jobs[0]?.projects?.[1]?.description,
                    image: `${basePath}/images/app.png`,
                    tech: ["SwiftUI"],
                    highlights: t.experience.jobs[0]?.projects?.[1]?.highlights ?? [],
                },
                {
                    name: t.experience.jobs[0]?.projects?.[2]?.name,
                    period: t.experience.jobs[0]?.projects?.[2]?.period,
                    description: t.experience.jobs[0]?.projects?.[2]?.description,
                    image: `${basePath}/images/admin-portal.png`,
                    tech: ["Next.js", "Redux", "Python", "PostgreSQL"],
                    highlights: t.experience.jobs[0]?.projects?.[2]?.highlights ?? [],
                },
                {
                    name: t.experience.jobs[0]?.projects?.[3]?.name,
                    period: t.experience.jobs[0]?.projects?.[3]?.period,
                    description: t.experience.jobs[0]?.projects?.[3]?.description,
                    image: `${basePath}/images/silverwell.png`,
                    tech: ["Laravel 8", "Vue.js", "MySQL", "LINE LIFF"],
                    highlights: t.experience.jobs[0]?.projects?.[3]?.highlights ?? [],
                },
                {
                    name: t.experience.jobs[0]?.projects?.[4]?.name,
                    period: t.experience.jobs[0]?.projects?.[4]?.period,
                    description: t.experience.jobs[0]?.projects?.[4]?.description,
                    image: `${basePath}/images/svc.png`,
                    tech: ["Laravel 7", "MySQL", "Line Notify"],
                    highlights: t.experience.jobs[0]?.projects?.[4]?.highlights ?? [],
                },
            ],
        },
        {
            period: t.experience.jobs[1]?.period,
            position: t.experience.jobs[1]?.position,
            company: "GetLinks Inc (THAILAND)",
            description: t.experience.jobs[1]?.description,
            achievements: t.experience.jobs[1]?.achievements ?? [],
            projects: [
                {
                    name: t.experience.jobs[1]?.projects?.[0]?.name,
                    period: t.experience.jobs[1]?.projects?.[0]?.period,
                    description: t.experience.jobs[1]?.projects?.[0]?.description,
                    image: `${basePath}/images/svc.png`,
                    tech: ["Laravel 7", "MySQL", "Line Notify"],
                    highlights: t.experience.jobs[1]?.projects?.[0]?.highlights ?? [],
                },
            ],
        },
        {
            period: t.experience.jobs[2]?.period,
            position: t.experience.jobs[2]?.position,
            company: "Biz Potential Co.,Ltd",
            description: t.experience.jobs[2]?.description,
            achievements: t.experience.jobs[2]?.achievements ?? [],
            projects: [
                {
                    name: t.experience.jobs[2]?.projects?.[0]?.name,
                    period: t.experience.jobs[2]?.projects?.[0]?.period,
                    description: t.experience.jobs[2]?.projects?.[0]?.description,
                    image: "https://organdonate.redcross.or.th/assets/images/seo/og_facebook.jpg",
                    tech: ["Biz Flow", "Oracle"],
                    highlights: t.experience.jobs[2]?.projects?.[0]?.highlights ?? [],
                },
                {
                    name: t.experience.jobs[2]?.projects?.[1]?.name,
                    period: t.experience.jobs[2]?.projects?.[1]?.period,
                    description: t.experience.jobs[2]?.projects?.[1]?.description,
                    image: `${basePath}/images/baac2.png`,
                    tech: ["Biz Flow", "MySQL"],
                    highlights: t.experience.jobs[2]?.projects?.[1]?.highlights ?? [],
                },
                {
                    name: t.experience.jobs[2]?.projects?.[2]?.name,
                    period: t.experience.jobs[2]?.projects?.[2]?.period,
                    description: t.experience.jobs[2]?.projects?.[2]?.description,
                    image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/453434692_912296510932612_3933742240281553757_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GhgVOKuEHC4Q7kNvgHgZ2ph&_nc_oc=Adjn_9zicLbOQQTwfzw41vQhhwtXmavHEKI7_POcOVYf2zl3322HX3KXrDGpopuEVGHupyT93c8fNsgW3NswzzCj&_nc_zt=23&_nc_ht=scontent.fbkk5-4.fna&_nc_gid=5xbDsAZvH-p47sDiOjJdqA&oh=00_AYHnsP6hM1w_5weNDGeLO7VcSUUVZ8AUNr32bpPQ2DlhvA&oe=67DB8386",
                    tech: ["Biz Flow", "Oracle"],
                    highlights: t.experience.jobs[2]?.projects?.[2]?.highlights ?? [],
                },
            ],
        },
        {
            period: t.experience.jobs[3]?.period,
            position: t.experience.jobs[3]?.position,
            company: "Technology Land Co., Ltd.",
            description: t.experience.jobs[3]?.description,
            achievements: t.experience.jobs[3]?.achievements ?? [],
        },
        {
            period: t.experience.jobs[4]?.period,
            position: t.experience.jobs[4]?.position,
            company: "PICO OK International Co., Ltd",
            description: t.experience.jobs[4]?.description,
            achievements: t.experience.jobs[4]?.achievements ?? [],
        },
        {
            period: t.experience.jobs[5]?.period,
            position: t.experience.jobs[5]?.position,
            company: "Magic Software (Thailand) Corp. Ltd",
            description: t.experience.jobs[5]?.description,
            achievements: t.experience.jobs[5]?.achievements ?? [],
        },
    ]

    return (
        <section className="mt-20">
            <motion.h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {t.experience.title}
            </motion.h2>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6 pl-4">
                {stats.map((stat, index) => (
                    <motion.div key={index} className="text-center p-3 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                        <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div key={index} className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-4 pb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
                            <div className="text-left">
                                <div className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-medium">{exp.period}</div>
                                <div className="font-medium text-base md:text-lg text-gray-800 dark:text-white mt-1">{exp.position}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">{exp.company}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">{exp.description}</div>
                                <ul className="mt-2 space-y-1">
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                            <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>

                                {/* Projects Section */}
                                {exp.projects && (
                                    <div className="mt-6">
                                        <button onClick={() => toggleProject(index)} className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {expandedProject === index ? <FaChevronUp /> : <FaChevronDown />}
                                            {t.experience.projectsLabel}
                                        </button>

                                        <motion.div
                                            className="mt-4 space-y-8 relative"
                                            initial={false}
                                            animate={{
                                                height: expandedProject === index ? "auto" : 0,
                                                opacity: expandedProject === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            {exp.projects.map((project, projectIndex) => (
                                                <motion.div key={projectIndex} className="relative pl-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: projectIndex * 0.1 }}>
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                                                        {/* Image Column */}
                                                        <div className="relative h-40 sm:h-48 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                                                            <Image src={project.image ?? ''} alt={project.name ?? ''} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 50vw" />
                                                        </div>

                                                        {/* Content Column */}
                                                        <div className="space-y-2">
                                                            <div className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">{project.name}</div>
                                                            <div className="text-xs md:text-sm text-blue-600 dark:text-blue-400">{project.period}</div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-400">{project.description}</div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.tech.map((tech, techIndex) => (
                                                                    <span key={techIndex} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <ul className="space-y-1">
                                                                {project.highlights.map((highlight, highlightIndex) => (
                                                                    <li key={highlightIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                                                        <span className="mr-2 text-gray-400">-</span>
                                                                        {highlight}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
