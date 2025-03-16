'use client'
import { useState, useEffect } from 'react'

export default function useDarkMode() {
    // เปลี่ยนค่าเริ่มต้นเป็น true สำหรับ dark mode
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        // ตรวจสอบค่าที่บันทึกไว้ใน localStorage
        const savedTheme = localStorage.getItem('theme')
        // ถ้าไม่มีค่าที่บันทึกไว้ ให้ใช้ dark mode
        if (!savedTheme) {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
            setIsDark(true)
            return
        }
        // ถ้ามีค่าที่บันทึกไว้ ให้ใช้ค่านั้น
        setIsDark(savedTheme === 'dark')
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        setIsDark(!isDark)
        if (!isDark) {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }

    return { isDark, toggleDarkMode }
} 