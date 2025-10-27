"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate smooth progressive loading
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12
        if (next >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return next
      })
    }, 180)

    // Automatically hide after 2.2 seconds
    const timer = setTimeout(() => setIsLoading(false), 2200)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <style jsx>{`
        .bg-grid {
          background-image: radial-gradient(
            rgba(16, 185, 129, 0.05) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
        }
      `}</style>

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#010901] bg-grid overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Animated gradient aura */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1/2 bg-[conic-gradient(var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent blur-3xl"
              />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 gap-10">
              {/* Animated Logo Orb */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-28 h-28 rounded-full border-4 border-t-emerald-500 border-r-emerald-400"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-28 h-28 rounded-full bg-emerald-500/30 blur-2xl"
                />

                <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl shadow-emerald-500/40">
                  <motion.svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                    />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Text + Progress */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
                  Oozecloud
                </h1>
                <p className="text-emerald-400/70 text-sm mt-1">
                  Igniting your next-gen experience...
                </p>

                {/* Progress Bar */}
                <div className="w-64 mt-5">
                  <div className="h-1.5 bg-emerald-950/50 rounded-full overflow-hidden border border-emerald-500/20 backdrop-blur-sm">
                    <motion.div
                      style={{ width: `${Math.min(progress, 100)}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress, 100)}%` }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full shadow-emerald-500/40 shadow-lg relative"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <p className="mt-2 text-xs font-mono text-emerald-500/60">
                    {Math.floor(progress)}%
                  </p>
                </div>
              </motion.div>

              {/* Animated dots */}
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.25,
                    }}
                    className="w-2.5 h-2.5 bg-emerald-500 rounded-full"
                  />
                ))}
              </motion.div>
            </div>

            {/* Bottom tagline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-8 w-full text-center"
            >
              <p className="text-emerald-500/40 text-xs tracking-wider uppercase">
                Powered by next-generation technology
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
