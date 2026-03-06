"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    yOffset?: number
}

export function AnimatedSection({
    children,
    className,
    delay = 0,
    duration = 0.5,
    yOffset = 30,
}: AnimatedSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={cn("w-full", className)}
        >
            {children}
        </motion.div>
    )
}
