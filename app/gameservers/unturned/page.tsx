import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "Unturned Servers - Oozecloud",
  description: "Build your own post-apocalyptic adventure with fast, reliable, and fully customizable Unturned server hosting. Control everything you need to get started.",
}

export default function FiveMPage() {
// FiveM server plans
const fivemPlans = [
  {
    name: "Basic",
    price: "$1.58",
    period: "per month",
    description: "Affordable plan for small communities",
    features: [
      "1 Core",
      "2GB RAM",
      "50GB SSD Storage",
      "10 Players",
    ],
    popular: true,
    buttonText: "Get Started",
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Pro",
    price: "$2.37",
    period: "per month",
    description: "Balanced plan for growing communities",
    features: [
      "2 Core",
      "3GB RAM",
      "50GB SSD Storage",
      "16 Players",
    ],
    popular: false,
    buttonText: "Get Started",
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Advanced",
    price: "$3.16",
    period: "per month",
    description: "Enhanced plan for larger communities",
    features: [
      "2 Core",
      "4GB RAM",
      "50GB SSD Storage",
      "20 Players",
    ],
    popular: false,
    buttonText: "Get Started",
    buttonLink: "https://billing.oozecloud.com/",
  },
];


  // FiveM-specific features
  const fivemFeatures = [
    {
      icon: "shield",
      title: "Custom Resources",
      description:
        "Install and manage custom Unturned resources and scripts to create a unique roleplay experience for your community.",
    },
    {
      icon: "zap",
      title: "Database Integration",
      description:
        "Seamlessly integrate with MySQL databases to store player data, vehicles, properties, and more for your roleplay server.",
    },
    {
      icon: "clock",
      title: "Easy Setup",
      description:
        "Get your Unturned server up and running quickly with our pre-configured server templates and easy-to-use control panel.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Unturned Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
             Build your own post-apocalyptic adventure with fast, reliable, and fully customizable Unturned server hosting. Control everything you need to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={fivemPlans} />

      {/* Features Section */}
      <FeaturesSection features={fivemFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
