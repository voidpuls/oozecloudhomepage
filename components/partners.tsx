"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Shield, Zap } from "lucide-react"
import Image from "next/image"

// Replace these with your actual partners data
const partners = {
  title: "Our Trusted Partners",
  badge: "Partner Network",
  description: "Meet our trusted partners and service providers who help us deliver exceptional hosting solutions.",
  providers: [
    {
      name: "ABR Hosting",
      icon: "Users",
      logo: "https://abrhosting.com/assets/images/temps/footer/logo-d.png",
      description: "Leading technology solutions for secure and scalable infrastructure with enterprise-grade reliability.",
      image: "https://abrhosting.com/assets/images/pages/game-server/map.png", // Add a background image for the partner
      features: [
        "Cloud Integration",
        "Security & Compliance", 
        "24/7 Premium Support",
        "Custom Solutions",
        "Enterprise Infrastructure",
        "Global Network Coverage",
      ],
      buttonText: "Visit Partner",
      buttonHref: "https://abrhosting.com/",
    },
  ],
}

export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Map icon names to components
  const iconComponents: Record<string, React.ReactNode> = {
    Users: <Users className="w-10 h-10 text-green-400" />,
    Shield: <Shield className="w-10 h-10 text-green-400" />,
    Zap: <Zap className="w-10 h-10 text-green-400" />,
  }

  return (
    <section id="partners" className="py-20 relative">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
            <span>{partners.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{partners.title}</h2>
          <p className="text-gray-400">{partners.description}</p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {partners.providers.map((provider, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border backdrop-blur-md transition-all duration-500 border-green-500/20 bg-[#010901]/70 hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute top-0 left-0 w-full h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010901] z-10"></div>
                <Image
                  src={provider.image || "/placeholder.svg"}
                  alt={`${provider.name} background`}
                  width={400}
                  height={200}
                  className="w-full h-full opacity-30 group-hover:opacity-40 transition-opacity duration-500 object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 pt-44 relative z-10">
                {/* Partner Logo and Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                    {iconComponents[provider.icon]}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-white">{provider.name}</h3>
                    {/* Partner Logo */}
                    <div className="mt-2">
                      <Image
                        src={provider.logo}
                        alt={`${provider.name} logo`}
                        width={80}
                        height={40}
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>

                <p className="mb-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {provider.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {provider.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <div className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-all duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  onClick={() => {
                    window.location.href = provider.buttonHref
                  }}
                  className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                >
                  <span className="relative z-10 flex items-center">
                    {provider.buttonText}
                    <ChevronRight
                      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                        hoveredIndex === index ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
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
