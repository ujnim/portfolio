import { Translations } from "@/types/translations";
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''
export const th: Translations = {
    nav: {
        home: "หน้าแรก",
        about: "เกี่ยวกับ",
        skills: "ทักษะ",
        experience: "ประสบการณ์",
        projects: "โปรเจค",
        contact: "ติดต่อ"
    },
    hero: {
        greeting: 'ศราวุฒิ อุดมเดชขจรกิจ',
        role: 'Full Stack Developer',
        company: 'The Siam Cement Public Co., Ltd',
        cta: {
            primary: 'ดูผลงาน',
            secondary: 'ติดต่อฉัน',
            resume: 'Resume'
        }
    },
    about: {
        title: 'เกี่ยวกับฉัน',
        description1: 'ฉันเป็นนักพัฒนาเว็บแอปพลิเคชันที่มีประสบการณ์ในการสร้างแอปพลิเคชันที่ทันสมัย',
        description2: 'ภารกิจของฉันคือการสร้างโซลูชันที่สวยงาม มีประสิทธิภาพ และใช้งานง่าย เพื่อแก้ปัญหาในโลกจริง'
    },
    skills: {
        title: 'ทักษะและความสามารถ',
        categories: {
            frontend: 'ฟรอนต์เอนด์',
            backend: 'แบ็คเอนด์',
            tools: 'เครื่องมือ'
        }
    },
    experience: {
        title: "ประสบการณ์การทำงาน",
        stats: {
            years: "ปีประสบการณ์",
            projects: "โปรเจคที่สำเร็จ",
            technologies: "เทคโนโลยีที่ใช้"
        },
        projectsLabel: "โปรเจคที่เกี่ยวข้อง",
        jobs: [
            {
                period: "ต.ค. 2564 - ปัจจุบัน",
                position: "Full Stack Developer",
                description: "รับผิดชอบในการพัฒนาและปรับปรุงระบบ ERP และแอปพลิเคชันการจัดการห่วงโซ่อุปทาน โดยมุ่งเน้นการสร้างโซลูชันที่มีประสิทธิภาพตามความต้องการทางธุรกิจ",
                achievements: [
                    "ออกแบบและพัฒนาระบบติดตามการผลิตแบบเรียลไทม์เพื่อเพิ่มประสิทธิภาพในการตัดสินใจ",
                    "ปรับปรุงประสิทธิภาพระบบเพิ่มขึ้น 40% ผ่านการปรับแต่งฐานข้อมูลและปรับปรุงโค้ด",
                    "พัฒนา Executive Dashboard สำหรับผู้บริหารในการวิเคราะห์ข้อมูลเชิงลึกและติดตามประสิทธิภาพการดำเนินงาน"
                ],
                projects: [
                    {
                        name: "ESA Dashboard",
                        period: "มี.ค. 2568 - ปัจจุบัน",
                        description: "พัฒนาระบบติดตามการทำงานของช่างแบบเรียลไทม์สำหรับทีมติดตั้ง",
                        highlights: [
                            "พัฒนาแดชบอร์ดติดตามการทำงานของช่างแบบโต้ตอบเรียลไทม์ผ่านอุปกรณ์ IoT"
                        ],
                        tech: ["Next.js", "Node.js", "Postgres", "Tailwind CSS", "WebSocket"],
                        image: `${basePath}/images/Onnex_Logo.jpg`,
                    },
                    {
                        name: "Home Automation Dashboard",
                        period: "ก.พ. 2568 - ก.พ. 2568",
                        description: "พัฒนาระบบวิเคราะห์และติดตามผลการขายแบบเรียลไทม์สำหรับทีม Home Automation",
                        highlights: [
                            "พัฒนาแดชบอร์ดข้อมูลการขายแบบโต้ตอบเรียลไทม์",
                            "สร้างระบบนำเข้าข้อมูลอัตโนมัติจาก Excel เพื่อปรับปรุงขั้นตอนการทำงาน"
                        ],
                        tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Power Automate"],
                        image: `${basePath}/images/Onnex_Logo.jpg`,
                    },
                    {
                        name: "Sale Performance Dashboard",
                        period: "ม.ค. 2568 - ม.ค. 2568",
                        description: "พัฒนาระบบวิเคราะห์และติดตามผลการขายแบบเรียลไทม์สำหรับทีมขาย",
                        highlights: [
                            "พัฒนาแดชบอร์ดข้อมูลการขายแบบโต้ตอบเรียลไทม์",
                            "สร้างระบบนำเข้าข้อมูลอัตโนมัติจาก Excel เพื่อปรับปรุงขั้นตอนการทำงาน"
                        ],
                        tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Power Automate"],
                        image: `${basePath}/images/Onnex_Logo.jpg`,
                    },
                    {
                        name: "Smart Living+",
                        period: "ส.ค. 2566 - ธ.ค. 2567",
                        description: "พัฒนาแอปพลิเคชันสำหรับควบคุมและติดตามอุปกรณ์สมาร์ทโฮม",
                        highlights: [
                            "พัฒนาระบบควบคุมเครื่องฟอกอากาศอัจฉริยะ (AAQ) สำหรับที่พักอาศัย",
                            "ออกแบบและพัฒนา UI/UX ที่ใช้งานง่ายสำหรับการควบคุมอุปกรณ์"
                        ],
                        tech: ["SwiftUI"],
                        image: `${basePath}/images/app.png`,
                    },
                    {
                        name: "Admin Portal",
                        period: "ม.ค. 2566 - ก.ค. 2566",
                        description: "พัฒนาระบบวิเคราะห์และจัดการผู้ใช้สำหรับ Smart Living+",
                        highlights: [
                            "พัฒนาแดชบอร์ดวิเคราะห์แบบโต้ตอบสำหรับวิเคราะห์พฤติกรรมผู้ใช้",
                            "สร้างระบบติดตามการใช้พลังงานในบ้านแบบเรียลไทม์",
                            "พัฒนา RESTful APIs สำหรับการรวมข้อมูลอุปกรณ์ IoT"
                        ],
                        image: `${basePath}/images/wedo.png`,
                        tech: ["Next.js", "Redux", "Python", "PostgreSQL"],
                    },
                    {
                        name: "LINE LIFF (DoCare)",
                        period: "มิ.ย. 2566 - มี.ค. 2568",
                        description: "พัฒนาแอปพลิเคชัน LINE LIFF สำหรับระบบดูแลสุขภาพ",
                        highlights: [
                            "พัฒนาระบบบันทึกและติดตามข้อมูลสุขภาพแบบเรียลไทม์",
                            "สร้างระบบแจ้งเตือนฉุกเฉินและจัดการสมาชิกในครอบครัว",
                            "พัฒนาระบบแจ้งเตือนผ่าน LINE แบบอัตโนมัติ"
                        ],
                        image: `${basePath}/images/docare3.png`,
                        tech: ["Laravel 8", "Vue.js", "MySQL", "LINE LIFF"],
                    },
                    {
                        name: "DoCare",
                        period: "พ.ค. 2564 - มี.ค. 2568",
                        description: "พัฒนาระบบ CRM สำหรับการจัดการดูแลผู้ป่วย",
                        highlights: [
                            "พัฒนาระบบลงทะเบียนและจัดการผู้ป่วยแบบครบวงจร",
                            "สร้างระบบจัดการอุปกรณ์ทางการแพทย์",
                            "พัฒนา API Gateway สำหรับการเชื่อมต่ออุปกรณ์ IoT ทางการแพทย์"
                        ],
                        image: `${basePath}/images/docare2.png`,
                        tech: ["Laravel 7", "MySQL", "Line Notify"],
                    }
                ]
            },
            {
                period: "พ.ค. 2564 - ก.ย. 2564",
                position: "Full Stack Developer",
                description: "ร่วมพัฒนาโปรเจค DoCare สำหรับ SCG โดยมุ่งเน้นการพัฒนาระบบ CRM และการเชื่อมต่อแพลตฟอร์ม",
                achievements: [
                    "พัฒนาระบบ CRM แบบ multi-tenant",
                    "พัฒนาระบบแจ้งเตือนอัตโนมัติผ่าน LINE ด้วย Webhooks",
                    "พัฒนาระบบตามสถาปัตยกรรมแบบ Microservices"
                ],
                projects: [
                    {
                        name: "DoCare",
                        period: "พ.ค. 2564 - ก.ย. 2564",
                        description: "พัฒนาระบบจัดการข้อมูลผู้ป่วยแบบครบวงจร",
                        highlights: [
                            "พัฒนาระบบลงทะเบียนผู้ป่วยแบบหลายสาขา",
                            "สร้างระบบจัดการอุปกรณ์ทางการแพทย์แบบเรียลไทม์",
                            "พัฒนา RESTful APIs สำหรับการเชื่อมต่อข้อมูลอุปกรณ์ IoT"
                        ],
                        image: `${basePath}/images/docare2.png`,
                        tech: ["Laravel 7", "MySQL", "Line Notify"],
                    }
                ]
            },
            {
                period: "พ.ค. 2563 - เม.ย. 2564",
                position: "PHP Developer",
                description: "พัฒนาเว็บแอปพลิเคชันด้วย Biz Flow Framework สำหรับองค์กรขนาดใหญ่ โดยมุ่งเน้นระบบที่ซับซ้อนและต้องการความแม่นยำสูง",
                achievements: [
                    "พัฒนาระบบด้วย Biz Flow Framework โดยใช้ PHP และ Bootstrap",
                    "มีส่วนร่วมในการทดสอบระบบและแก้ไขข้อผิดพลาดอย่างมีประสิทธิภาพ"
                ],
                projects: [
                    {
                        name: "ระบบบริจาคอวัยวะ (สภากาชาดไทย)",
                        period: "ก.พ. 2564 - พ.ค. 2564",
                        description: "พัฒนาระบบจัดการการบริจาคอวัยวะสำหรับสภากาชาดไทย",
                        highlights: [
                            "พัฒนาระบบจับคู่ผู้บริจาคและผู้รับบริจาคแบบอัตโนมัติ",
                            "สร้างระบบติดตามสถานะการบริจาคแบบเรียลไทม์"
                        ],
                        image: "https://organdonate.redcross.or.th/assets/images/seo/og_facebook.jpg",
                        tech: ["Biz Flow", "Oracle"],
                    },
                    {
                        name: "ระบบจัดการเอกสาร - ธ.ก.ส.",
                        period: "ส.ค. 2563 - ม.ค. 2564",
                        description: "พัฒนาระบบจัดการเอกสารดิจิทัลสำหรับธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร",
                        highlights: [
                            "พัฒนาระบบจัดการเอกสารดิจิทัลแบบหลายสาขา",
                            "สร้างระบบติดตามสถานะเอกสารแบบเรียลไทม์",
                            "พัฒนาระบบลายเซ็นอิเล็กทรอนิกส์และการจัดการขั้นตอนการอนุมัติ"
                        ],
                        image: `${basePath}/images/baac2.png`,
                        tech: ["Biz Flow", "MySQL"],
                    },
                    {
                        name: "ระบบบริจาคสเต็มเซลล์ (สภากาชาดไทย)",
                        period: "พ.ค. 2563 - ก.ค. 2563",
                        description: "พัฒนาระบบจัดการการบริจาคสเต็มเซลล์สำหรับสภากาชาดไทย",
                        highlights: [
                            "พัฒนาระบบจับคู่ผู้บริจาคและผู้รับบริจาคสเต็มเซลล์แบบอัตโนมัติ",
                            "สร้างระบบติดตามสถานะการบริจาคแบบเรียลไทม์",
                            "พัฒนาระบบแจ้งเตือนทางอีเมลแบบอัตโนมัติ"
                        ],
                        image: "https://stemcellthai.redcross.or.th/wp-content/uploads/2021/05/cropped-cropped-Stem-cell-logo-removebg.png",
                        tech: ["Biz Flow", "Oracle"],
                    }
                ]
            },
            {
                period: "ม.ค. 2562 - มี.ค. 2563",
                position: "Junior Developer",
                description: "เริ่มต้นอาชีพในฐานะนักพัฒนาจูเนียร์ โดยมุ่งเน้นการพัฒนาระบบ CRM และเรียนรู้เทคโนโลยีใหม่ๆ",
                achievements: [
                    "พัฒนาเว็บแอปพลิเคชันด้วย HTML, CSS, Angular และ Yii2",
                    "มีส่วนร่วมในการทดสอบระบบและปรับปรุงคุณภาพ",
                    "จัดการระบบ Gsuite สำหรับการสื่อสารภายในองค์กร",
                    "เรียนรู้และพัฒนาระบบ Mail Server",
                    "พัฒนาระบบสำรองข้อมูลอีเมลด้วย Yii2"
                ]
            },
            {
                period: "ส.ค. 2562 - ธ.ค. 2562",
                position: "PHP Developer Intern",
                description: "ฝึกงานในตำแหน่งนักพัฒนา PHP โดยมุ่งเน้นการพัฒนาเว็บไซต์ด้วย WordPress",
                achievements: [
                    "พัฒนาเว็บไซต์ WordPress ตามมาตรฐานการพัฒนาของบริษัท",
                    "พัฒนาปลั๊กอินสำหรับระบบสมาชิกและการจัดการข้อมูล",
                    "สร้างระบบแจ้งเตือนคำสั่งซื้อผ่าน LINE Notify",
                    "พัฒนาเว็บไซต์สำหรับบริษัทในเครือตามความต้องการที่หลากหลาย"
                ]
            },
            {
                period: "เม.ย. 2562 - ก.ค. 2562",
                position: "Java Developer Intern",
                description: "ฝึกงานในตำแหน่งนักพัฒนา Java โดยมุ่งเน้นการพัฒนาสคริปต์สำหรับระบบธนาคาร",
                achievements: [
                    "พัฒนาสคริปต์อัตโนมัติด้วย Java",
                    "สร้าง web scraper สำหรับดึงข้อมูลจากเว็บไซต์แบบอัตโนมัติ"
                ]
            }
        ]
    },
    projects: {
        title: 'ผลงาน',
        viewDetails: 'ดูรายละเอียด'
    },
    contact: {
        title: 'ติดต่อฉัน',
        description: 'สนใจทำงานร่วมกัน? มาคุยกัน!',
        cta: 'ส่งอีเมล'
    },
} 