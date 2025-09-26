"use client"

import { Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Testimonials() {
  // Hardcoded testimonials data
  const testimonials = {
    badge: "Testimonials",
    title: "What Our Customers Say",
    description: "Don't just take our word for it. Here's what our customers have to say about our hosting services.",
    intervalDuration: 5000,
    items: [
      {
        content:
          "The performance of my websites has improved dramatically since switching to this hosting provider. The support team is also incredibly helpful and responsive.",
        rating: 5,
        image: "/placeholder-tFHOW7WaVgrLxl8i2KR26K5lES8oY8.svg",
      },
      {
        content:
          "My online store has never been faster. The uptime is incredible, and I've seen a significant increase in conversions since moving to this hosting service.",
        rating: 5,
        image: "/placeholder-tFHOW7WaVgrLxl8i2KR26K5lES8oY8.svg",
      },
      {
        content:
          "The scalability of their VPS hosting has been perfect for our growing startup. We can easily adjust resources as needed, and the performance is consistently excellent.",
        rating: 4,
        image: "/placeholder-tFHOW7WaVgrLxl8i2KR26K5lES8oY8.svg",
      },
    ],
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const intervalDuration = testimonials.intervalDuration || 5000 // 5 seconds per testimonial

  useEffect(() => {
    // Reset progress when active index changes
    setProgress(0)

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Start progress animation
    const startTime = Date.now()

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = (elapsed / intervalDuration) * 100

      if (newProgress >= 100) {
        // Move to next testimonial
        setActiveIndex((current) => (current + 1) % testimonials.items.length)
      } else {
        setProgress(newProgress)
      }
    }, 16) // Update approximately every frame for smooth animation

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeIndex, testimonials.items.length, intervalDuration])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
            <span>{testimonials.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{testimonials.title}</h2>
          <p className="text-gray-400">{testimonials.description}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.items.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:bg-green-500/5 hover:border-green-400/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative w-32 h-32 overflow-hidden rounded-lg bg-green-500/10 flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt="Testimonial"
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3">
              {testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="relative w-16 h-1 rounded-full bg-gray-600 overflow-hidden"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === activeIndex && (
                    <div
                      className="absolute top-0 left-0 h-full bg-green-400 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
