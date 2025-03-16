"use client"
import React, { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import Link from "next/link"

export default function SiteHome() {
    const { translations: t } = useLanguage()

    const items = Array.from({ length: 20 })

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/shadcn/repos")
            .then((res) => res.json())
            .then((data) => setProjects(data.slice(0, 10))) // จำกัด 10 โปรเจกต์
            .catch((error) => console.error("Error fetching repos:", error));
    }, []);
    return (
        <div className="flex flex-row p-4">
            <div className="flex-1">
                <h2 className="mb-2 font-bold text-2xl">Name</h2>
                <h2 className="mb-2 font-bold text-2xl">Postion :  {process.env.NEXT_PUBLIC_GIT_HUB_PROFILE || "Frontend Developer"}</h2>
                <h2 className="mb-2 font-bold text-2xl">
                    GitHub: <a href={process.env.NEXT_PUBLIC_GIT_HUB_LINE} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@{process.env.NEXT_PUBLIC_GIT_HUB_USERNAME}</a>
                </h2>
                


            </div>
            <div className="flex-1">
                <h2 className="mb-2 font-bold text-2xl">Test</h2>
                <div className="flex flex-col">
                    {items.map((_, index) => (
                        <div key={index} className="flex flex-row">
                            <Avatar className=" size-full max-w-[150px] max-h-[100px] rounded-lg my-2">
                                <AvatarImage src="https://github.com/shadcn.png" width={150} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="py-2 px-4">
                                <h2 className="font-bold">Project name</h2>
                                <h2 className="text-muted-foreground">Disciption</h2>
                                <h2 className="text-muted-foreground">Tech stack : </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
