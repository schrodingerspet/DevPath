"use client"
import { motion } from "framer-motion"

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0a0e27] dark:via-black dark:to-black" />

            {/* Floating orbs */}
            <motion.div
                className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.08]"
                style={{
                    background: 'radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
                style={{
                    background: 'radial-gradient(circle, rgba(157,78,221,0.4) 0%, transparent 70%)',
                    filter: 'blur(90px)',
                }}
                animate={{
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full opacity-[0.05]"
                style={{
                    background: 'radial-gradient(circle, rgba(255,0,110,0.4) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                }}
                animate={{
                    x: [0, -60, 0],
                    y: [0, -80, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    )
}
