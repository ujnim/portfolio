'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
    {
        title: "SCG ERP System",
        description: "ระบบบริหารจัดการทรัพยากรองค์กรสำหรับ SCG พัฒนาด้วย Next.js, Node.js และ MongoDB",
        image: "/project1.jpg",
        tags: ["Next.js", "Node.js", "MongoDB"],
        link: "#"
    },
    {
        title: "Supply Chain Management",
        description: "ระบบจัดการห่วงโซ่อุปทานและการขนส่ง พร้อมระบบติดตามสถานะสินค้าแบบเรียลไทม์",
        image: "/project2.jpg",
        tags: ["React", "Express", "PostgreSQL"],
        link: "#"
    },
    {
        title: "Manufacturing Dashboard",
        description: "แดชบอร์ดแสดงข้อมูลการผลิตและประสิทธิภาพการทำงานของเครื่องจักรแบบเรียลไทม์",
        image: "/project3.jpg",
        tags: ["Next.js", "TypeScript", "Redis"],
        link: "#"
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function ProjectsSection() {
    return (
        <section className="py-10">
            <motion.h2 
                className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                ผลงานของฉัน
            </motion.h2>
            <motion.div 
                className="grid grid-cols-1 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
                        variants={item}
                        whileHover={{ y: -5 }}
                    >
                        <div className="relative h-48 bg-gray-50 dark:bg-gray-700">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-95 dark:opacity-80"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex}
                                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm px-4 py-1.5 rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <motion.a 
                                href={project.link}
                                className="inline-flex items-center bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 font-medium transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ดูรายละเอียด
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
} 