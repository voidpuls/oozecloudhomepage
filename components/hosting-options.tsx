"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ChevronRight, Gamepad2, Server, Database } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { features } from "process"

// Add id to the section for scrolling
export default function HostingOptions() {
  // Hardcoded hosting options data
  const hostingOptions = {
    title: "We Provide, You Choose",
    badge: "Our Solutions",
    description: "Select the perfect hosting solution tailored to your specific needs and requirements.",
    options: [
      {
        name: "Game Servers",
        icon: "Gamepad2",
        description: "High-performance servers optimized for gaming with low latency and DDoS protection",
        image: "/images/castle.png",
        features: [
          "Low Latency Network",
          "DDoS Protection",
          "One-Click Game Installation",
          "24/7 Monitoring",
          "Scalable Resources",
          "Game Control Panel",
        ],
        buttonText: "Select Game Servers",
        buttonHref: "/gameservers",
      },
      {
        name: "VPS Hosting",
        icon: "Server",
        description: "Virtual private servers with dedicated resources and full root access for complete control",
        image: "/images/processor.png",
        features: [
          "Dedicated CPU & RAM",
          "Full Root Access",
          "SSD Storage",
          "Instant Scaling",
          "Multiple OS Options",
          "99.9% Uptime Guarantee",
        ],
        buttonText: "Select VPS Hosting",
        buttonHref: "/vps",
      },
      {
        name: "Dedicated Servers",
        icon: "Database",
        description: "Powerful dedicated hardware for mission-critical applications and maximum performance",
        image: "/images/assetcpanel.png",
        features: [
          "Enterprise Hardware",
          "Unlimited Bandwidth",
          "RAID Configuration",
          "IPMI Access",
          "Custom Hardware Options",
          "Premium Support",
        ],
        buttonText: "Select Dedicated Servers",
        buttonHref: "/dedicated",
      },
    ],
  }

  const [hoveredOption, setHoveredOption] = useState<number | null>(null)

  // Map icon names to components
  const iconComponents: Record<string, React.ReactNode> = {
    Gamepad2: <Gamepad2 className="w-10 h-10 text-green-400" />,
    Server: <Server className="w-10 h-10 text-green-400" />,
    Database: <Database className="w-10 h-10 text-green-400" />,
  }

  return (
    <section id="hosting-options" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
            <span>{hostingOptions.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{hostingOptions.title}</h2>
          <p className="text-gray-400">{hostingOptions.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {hostingOptions.options.map((option, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border backdrop-blur-md transition-all duration-500 border-green-500/20 bg-[#010901]/70 hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] group"
              onMouseEnter={() => setHoveredOption(index)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div className="absolute top-0 left-0 w-full h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010901] z-10"></div>
                <Image
                  src={option.image || "/placeholder.svg"}
                  alt={option.name}
                  width={400}
                  height={200}
                  className={`w-full h-full opacity-30 group-hover:opacity-40 transition-opacity duration-500 transition-transform duration-700 ${
                    option.icon === "Database"
                      ? "object-contain scale-70 group-hover:scale-85"
                      : "object-cover scale-110 group-hover:scale-125"
                  }`}
                />
              </div>

              <div className="p-6 pt-44 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                    {iconComponents[option.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{option.name}</h3>
                </div>

                <p className="mb-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {option.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
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

                <Button onClick={() => {
                  window.location.href = option.buttonHref
                }} className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                  <span className="relative z-10 flex items-center">
                    {option.buttonText}
                    <ChevronRight
                      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                        hoveredOption === index ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
                  <span
                    className={`absolute inset-0 w-full h-full bg-white/20 transition-transform origin-left duration-300 ${
                      hoveredOption === index ? "scale-x-100" : "scale-x-0"
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
