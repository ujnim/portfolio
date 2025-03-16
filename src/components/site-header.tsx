"use client"
import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { NavigationMenuViewport } from "@/components/ui/navigation-menu"

export default function SiteHeader() {
    return (
        <header className="fle sticky top-0 z-50 w-full items-center border-b bg-background">
            <div className="flex h-[--header-height] w-full items-center gap-2 px-4 py-3 justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Project</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}
