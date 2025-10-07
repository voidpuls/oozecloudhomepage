"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

// Replace these with your actual partners data
const partners = {
  title: "Our Trusted Partners",
  badge: "Partner Network",
  description: "Meet our trusted partners and service providers who help us serve you better.",
  providers: [
    {
      name: "Arb Hosting",
      logo: "https://abrhosting.com/assets/images/temps/footer/logo-d.png",
      description: "Leading technology solutions for secure and scalable infrastructure.",
      features: [
        "Cloud Integration",
        "Security & Compliance",
        "24/7 Support",
        "Custom Solutions",
      ],
      buttonText: "Learn More",
      buttonHref: "https://abrhosting.com/",
    },
  ],
}

export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="partners" className="py-20 relative bg-gray-900 text-white">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
            <span>{partners.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{partners.title}</h2>
          <p className="text-gray-400">{partners.description}</p>
        </div>

        {/* Partner Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {partners.providers.map((provider, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800 hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Logo */}
              <div className="flex justify-center p-4 bg-gray-700">
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{provider.name}</h3>
                <p className="mb-4 text-gray-400">{provider.description}</p>
                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {provider.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-0.5"></div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                {/* Button */}
                <Button
                  onClick={() => {
                    window.location.href = provider.buttonHref
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-black font-semibold"
                >
                  <span className="flex items-center justify-center relative z-10">
                    {provider.buttonText}
                    <ChevronRight
                      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                        hoveredIndex === index ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
                  {/* Hover overlay */}
                  <span
                    className={`absolute inset-0 w-full h-full bg-white/20 transition-transform origin-left duration-300 ${
                      hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}