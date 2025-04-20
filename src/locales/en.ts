import { Translations } from "@/types/translations";
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

export const en: Translations = {
    nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact',
    },
    hero: {
        greeting: 'Sarawut Udomdetkhachonkit',
        role: 'Full Stack Developer',
        company: 'The Siam Cement Public Co., Ltd',
        cta: {
            primary: 'View Projects',
            secondary: 'Contact Me',
            resume: 'Resume'
        },
    },
    about: {
        title: 'About Me',
        description1: 'Hi, I\'m a Full Stack Developer at The Siam Cement Public Co., Ltd with expertise in developing web applications using React, Next.js, and Node.js',
        description2: 'I have experience in developing ERP systems and applications for large organizations, focusing on creating efficient and user-friendly solutions',
    },
    skills: {
        title: 'Skills & Expertise',
        categories: {
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Tools & Others',
        },
    },
    experience: {
        title: "Work Experience",
        stats: {
            years: "Years of Experience",
            projects: "Completed Projects",
            technologies: "Technologies Used",
        },
        projectsLabel: "Projects Involved",
        jobs: [
            {
                period: "Oct 2021 - Present",
                position: "Full Stack Developer",
                description: "Responsible for developing and enhancing ERP systems and supply chain management applications, focusing on creating efficient solutions that meet business requirements.",
                achievements: [
                    "Designed and developed a real-time production monitoring system to enhance decision-making efficiency",
                    "Improved system performance by 40% through database optimization and code refactoring",
                    "Developed an Executive Dashboard for management to analyze insights and track operational performance"
                ],
                projects: [
                    {
                        name: "ESA Dashboard",
                        period: "Mar 2025 - Present",
                        description: "Developed a real-time technician tracking system for the installation team",
                        highlights: [
                            "Developed an interactive real-time dashboard for technician tracking through IoT devices"
                        ],
                        tech: ["Next.js", "Node.js", "Postgres", "Tailwind CSS" , "WebSocket"],
                        image: `${basePath}/images/Onnex_Logo.jpg`,
                    },
                    {
                        name: "Home Automation Dashboard",
                        period: "Feb 2025 - Feb 2025",
                        description: "Developed a real-time sales analytics and monitoring system for the Home Automation team",
                        highlights: [
                            "Developed an interactive real-time sales data dashboard",
                            "Created an automated Excel data import system to streamline workflows"
                        ],
                        tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Power Automate"],
                        image: `${basePath}/images/Onnex_Logo.jpg`,
                    },
                    {
                        name: "Sale Performance Dashboard",
                        period: "Jan 2025 - Jan 2025",
                        description: "Developed a real-time sales performance analytics and monitoring system for the Sales team",
                        highlights: [
                            "Developed an interactive real-time sales data dashboard",
                            "Created an automated data import system from Excel to streamline workflows"
                        ],
                        tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Power Automate"],
                        image: `${basePath}/images/Onnex_Logo.jpg`,
                    },
                    {
                        name: "Smart Living+",
                        period: "Aug 2023 - Dec 2024",
                        description: "Developed an application for controlling and monitoring smart home devices",
                        highlights: [
                            "Developed a smart air purifier (AAQ) control system for residential use",
                            "Designed and developed user-friendly UI/UX for device control"
                        ],
                        tech: ["SwiftUI"],
                        image: `${basePath}/images/app.png`,
                    },
                    {
                        name: "Admin Portal",
                        period: "Jan 2023 - Jul 2023",
                        description: "Developed analytics system and user management for Smart Living+",
                        highlights: [
                            "Developed interactive analytics dashboard for user behavior analysis",
                            "Built real-time home energy consumption monitoring system",
                            "Developed RESTful APIs for IoT device data integration"
                        ],
                        image: `${basePath}/images/wedo.png`,
                        tech: ["Next.js", "Redux", "Python", "PostgreSQL"],
                    },
                    {
                        name: "LINE LIFF (DoCare)",
                        period: "Jun 2023 - Mar 2025",
                        description: "Developed LINE LIFF application for healthcare system",
                        highlights: [
                            "Developed real-time health data recording and monitoring system",
                            "Created emergency alert system and family member management",
                            "Implemented automated LINE notification system"
                        ],
                        image: `${basePath}/images/docare3.png`,
                        tech: ["Laravel 8", "Vue.js", "MySQL", "LINE LIFF"],
                    },
                    {
                        name: "DoCare",
                        period: "May 2021 - Mar 2025",
                        description: "Developed comprehensive CRM system for patient care management",
                        highlights: [
                            "Developed comprehensive patient registration and management system",
                            "Created medical device management system",
                            "Developed API Gateway for medical IoT device integration"
                        ],
                        image: `${basePath}/images/docare2.png`,
                        tech: ["Laravel 7", "MySQL", "Line Notify"],
                    }
                ]
            },
            {
                period: "May 2021 - Sep 2021",
                position: "Full Stack Developer",
                description: "Collaborated on the DoCare project for SCG, focusing on CRM system development and platform integrations",
                achievements: [
                    "Developed a multi-tenant CRM system",
                    "Implemented automated LINE notifications using Webhooks",
                    "Developed systems following Microservices Architecture"
                ],
                projects: [
                    {
                        name: "DoCare",
                        period: "May 2021 - Sep 2021",
                        description: "Developed comprehensive patient data management system",
                        highlights: [
                            "Developed multi-branch patient registration system",
                            "Created real-time medical device management system",
                            "Developed RESTful APIs for IoT device data integration"
                        ],
                        image: `${basePath}/images/docare2.png`,
                        tech: ["Laravel 7", "MySQL", "Line Notify"],
                    }
                ]
            },
            {
                period: "May 2020 - Apr 2021",
                position: "PHP Developer",
                description: "Developed web applications using Biz Flow Framework for large organizations, focusing on complex systems requiring high accuracy",
                achievements: [
                    "Developed systems using Biz Flow Framework with PHP and Bootstrap",
                    "Actively participated in system testing and efficient bug resolution"
                ],
                projects: [
                    {
                        name: "Organ Donation System (Thai Red Cross)",
                        period: "Feb 2021 - May 2021",
                        description: "Developed organ donation management system for Thai Red Cross",
                        highlights: [
                            "Developed automated donor-recipient matching system",
                            "Created real-time donation status tracking system"
                        ],
                        image: "https://organdonate.redcross.or.th/assets/images/seo/og_facebook.jpg",
                        tech: ["Biz Flow", "Oracle"],
                    },
                    {
                        name: "Document Management System - BAAC",
                        period: "Aug 2020 - Jan 2021",
                        description: "Developed digital document management system for Bank for Agriculture and Agricultural Cooperatives",
                        highlights: [
                            "Developed multi-branch digital document management system",
                            "Created real-time document status tracking system",
                            "Developed electronic signature system and approval workflow management"
                        ],
                        image: `${basePath}/images/baac2.png`,
                        tech: ["Biz Flow", "MySQL"],
                    },
                    {
                        name: "Stem Cell Donation System (Thai Red Cross)",
                        period: "May 2020 - Jul 2020",
                        description: "Developed stem cell donation management system for Thai Red Cross",
                        highlights: [
                            "Developed automated stem cell donor-recipient matching system",
                            "Created real-time donation status tracking system",
                            "Implemented automated email notification system"
                        ],
                        image: "https://stemcellthai.redcross.or.th/wp-content/uploads/2021/05/cropped-cropped-Stem-cell-logo-removebg.png",
                        tech: ["Biz Flow", "Oracle"],
                    }
                ]
            },
            {
                period: "Jan 2019 - Mar 2020",
                position: "Junior Developer",
                description: "Started career as a Junior Developer, focusing on CRM system development and learning new technologies",
                achievements: [
                    "Developed web applications using HTML, CSS, Angular, and Yii2",
                    "Participated in system testing and quality improvement",
                    "Managed Gsuite system for internal organization communication",
                    "Learned and developed Mail Server systems",
                    "Developed email backup system using Yii2"
                ]
            },
            {
                period: "Aug 2019 - Dec 2019",
                position: "PHP Developer Intern",
                description: "Interned as a PHP Developer, focusing on WordPress website development",
                achievements: [
                    "Developed WordPress websites following company development standards",
                    "Developed custom plugins for membership system and data management",
                    "Created order notification system using LINE Notify",
                    "Developed websites for various affiliate companies according to diverse requirements"
                ]
            },
            {
                period: "Apr 2019 - Jul 2019",
                position: "Java Developer Intern",
                description: "Interned as a Java Developer, focusing on script development for banking systems",
                achievements: [
                    "Developed automation scripts using Java",
                    "Created web scrapers for automated website data extraction"
                ]
            }
        ]
    },
    projects: {
        title: 'My Projects',
        viewDetails: 'View Details',
    },
    contact: {
        title: 'Contact Me',
        description: 'Interested in working together? Let\'s talk!',
        cta: 'Send Email'
    },
} 