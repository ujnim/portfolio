'use client'
import HeroSection from "@/components/sections/hero"
import AboutSection from "@/components/sections/about"
import SkillsSection from "@/components/sections/skills"
import ProjectsSection from "@/components/sections/projects"
import ContactSection from "@/components/sections/contact"
import Navbar from "@/components/Navbar"
import ExperienceSection from '@/components/sections/experience'
import SiteHeader from "@/components/site-header"
import SiteHome from "@/components/site-home"

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />
            
            <div className="container mx-auto px-4 pt-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* ฝั่งซ้าย - ข้อมูลส่วนตัว */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-20">
                            <div className="lg:max-h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
                                <div className="space-y-12 py-8 lg:py-20">
                                    <div id="home">
                                        <HeroSection />
                                    </div>
                                    <div id="about">
                                        <AboutSection />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ฝั่งขวา - โปรเจคและประวัติการทำงาน */}
                    <div className="lg:w-2/3 py-8 lg:py-20">
                        <div className="space-y-20">
                            <div id="skills">
                                <SkillsSection />
                            </div>
                            <div id="experience">
                                <ExperienceSection />
                            </div>
                            {/* <div id="projects">
                                <ProjectsSection />
                            </div> */}
                            <div id="contact">
                                <ContactSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
