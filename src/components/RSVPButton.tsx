"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Calendar } from "lucide-react"

export function RSVPButton() {
    const [isRSVPed, setIsRSVPed] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)

    const handleRSVP = () => {
        setIsRSVPed(true)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 2000)
    }

    return (
        <div className="relative">
            <motion.button
                onClick={handleRSVP}
                disabled={isRSVPed}
                whileHover={!isRSVPed ? { scale: 1.05 } : {}}
                whileTap={!isRSVPed ? { scale: 0.95 } : {}}
                className={`px-6 py-3 rounded-xl font-semibold transition-all w-full md:w-auto flex items-center justify-center ${isRSVPed
                        ? 'bg-green-500/20 border border-green-500/50 text-green-600 dark:text-green-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white shadow-lg shadow-cyan-500/20'
                    }`}
            >
                {isRSVPed ? (
                    <span className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Registered
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        RSVP Now
                    </span>
                )}
            </motion.button>

            {/* Success confetti */}
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                                background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                                left: '50%',
                                top: '50%',
                            }}
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{
                                scale: [0, 1, 0],
                                x: (Math.random() - 0.5) * 200,
                                y: (Math.random() - 0.5) * 200,
                            }}
                            transition={{ duration: 1, delay: i * 0.02 }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
