import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "Discord Bot Hosting - Oozecloud",
  description: "Reliable Discord bot hosting with 24/7 uptime and easy deployment for your custom bots.",
}

export default function DiscordBotPage() {
  // Hosting Plans Data with Features
const hostingPlans = [
  {
    name: "Free Plan",
    price: "$0.00",
    cores: "0.5 Core",
    ram: "0.5 GB RAM",
    ssdStorage: "1 GB SSD",
    ports: 1,
    features: [
      "SSD Storage",
      "24/7 Uptime",
      "Automated Backups",
      "Node.js Support",
      "Python Support",
      "24/7 Support",
    ],
  },
  {
    name: "Starter Plan",
    price: "$1.00",
    cores: "1 Core",
    ram: "1 GB RAM",
    ssdStorage: "5 GB SSD",
    ports: 2,
    features: [
      "SSD Storage",
      "24/7 Uptime",
      "Automated Backups",
      "Node.js Support",
      "Python Support",
      "24/7 Support",
    ],
  },
  {
    name: "Standard Plan",
    price: "$2.00",
    cores: "2 Core",
    ram: "2 GB RAM",
    ssdStorage: "10 GB SSD",
    ports: 2,
    features: [
      "SSD Storage",
      "24/7 Uptime",
      "Automated Backups",
      "Node.js Support",
      "Python Support",
      "24/7 Support",
    ],
  },
  {
    name: "Professional Plan",
    price: "$4.00",
    cores: "4 Core",
    ram: "4 GB RAM",
    ssdStorage: "20 GB SSD",
    ports: 2,
    features: [
      "SSD Storage",
      "24/7 Uptime",
      "Automated Backups",
      "Node.js Support",
      "Python Support",
      "24/7 Support",
    ],
  },
  {
    name: "Business Plan",
    price: "$8.00",
    cores: "8 Core",
    ram: "8 GB RAM",
    ssdStorage: "40 GB SSD",
    ports: 2,
    features: [
      "SSD Storage",
      "24/7 Uptime",
      "Automated Backups",
      "Node.js Support",
      "Python Support",
      "24/7 Support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "$16.00",
    cores: "16 Core",
    ram: "16 GB RAM",
    ssdStorage: "80 GB SSD",
    ports: 2,
    features: [
      "SSD Storage",
      "24/7 Uptime",
      "Automated Backups",
      "Node.js Support",
      "Python Support",
      "24/7 Support",
    ],
  },
]

  // Discord bot-specific features
  const discordBotFeatures = [
    {
      icon: "shield",
      title: "24/7 Uptime",
      description:
        "Keep your Discord bot online around the clock with our reliable hosting infrastructure and automatic restart on failure.",
    },
    {
      icon: "zap",
      title: "Multiple Languages",
      description:
        "Support for popular bot development languages including Node.js, Python, Java, and more to fit your development preferences.",
    },
    {
      icon: "clock",
      title: "Easy Deployment",
      description:
        "Deploy your Discord bot with a few clicks using our simple control panel or connect directly to GitHub for automatic deployments.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Discord Bot Hosting</h1>
            <p className="mb-8 text-xl text-gray-400">
              Reliable Discord bot hosting with 24/7 uptime, multiple language support, and easy deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={discordBotPlans} />

      {/* Features Section */}
      <FeaturesSection features={discordBotFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
