import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"


export const metadata = {
  title: "Minecraft Servers - Oozecloud",
  description: "High-performance Minecraft servers with mods, plugins, and custom configurations.",
}

export default function MinecraftPage() {
  // Minecraft server plans
  const minecraftPlans = [
  {
    name: "Free Plan",
    price: "$0.00",
    period: "per month",
    description: "Ideal for testing and small projects",
    features: [
      "2 Cores",
      "3GB RAM",
      "15GB SSD Storage",
      "3 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Standard Plan",
    price: "$4.00",
    period: "per month",
    description: "Basic hosting for small servers",
    features: [
      "2 Cores",
      "4GB RAM",
      "30GB SSD Storage",
      "5 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Plus Plan",
    price: "$5.00",
    period: "per month",
    description: "Enhanced performance for growing communities",
    features: [
      "2 Cores",
      "5GB RAM",
      "40GB SSD Storage",
      "5 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Pro Plan",
    price: "$6.00",
    period: "per month",
    description: "Optimized for larger servers",
    features: [
      "2 Cores",
      "6GB RAM",
      "50GB SSD Storage",
      "5 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Advanced Plan",
    price: "$7.00",
    period: "per month",
    description: "For advanced users and modded servers",
    features: [
      "2 Cores",
      "7GB RAM",
      "65GB SSD Storage",
      "5 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Premium Plan",
    price: "$8.00",
    period: "per month",
    description: "High-performance hosting for demanding servers",
    features: [
      "2.5 Cores",
      "8GB RAM",
      "70GB SSD Storage",
      "10 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Enterprise Plan",
    price: "$10.00",
    period: "per month",
    description: "For large scale servers and heavy modpacks",
    features: [
      "2.5 Cores",
      "10GB RAM",
      "80GB SSD Storage",
      "10 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Ultimate Plan",
    price: "$12.00",
    period: "per month",
    description: "Maximum resources for intensive Minecraft hosting",
    features: [
      "3 Cores",
      "12GB RAM",
      "90GB SSD Storage",
      "10 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Business Plan",
    price: "$16.00",
    period: "per month",
    description: "Business-grade hosting for professional servers",
    features: [
      "4 Cores",
      "16GB RAM",
      "100GB SSD Storage",
      "10 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Executive Plan",
    price: "$18.00",
    period: "per month",
    description: "Premium plan for enterprise needs",
    features: [
      "5 Cores",
      "18GB RAM",
      "120GB SSD Storage",
      "10 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
  {
    name: "Mega Plan",
    price: "$22.00",
    period: "per month",
    description: "Top-tier hosting for the most demanding servers",
    features: [
      "5 Cores",
      "22GB RAM",
      "140GB SSD Storage",
      "10 Ports",
      "One-Click Plugin Installer",
      "Server Manager Access",
      "NVMe SSD Storage",
      "Advanced DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    buttonLink: "https://billing.oozecloud.com/",
  },
]

  // Minecraft-specific features
  const minecraftFeatures = [
    {
      icon: "shield",
      title: "Plugin Support",
      description:
        "Easy installation of popular plugins like Essentials, WorldEdit, and PermissionsEx to enhance your Minecraft server experience.",
    },
    {
      icon: "zap",
      title: "Modpack Support",
      description:
        "Run popular modpacks like FTB, Tekkit, and SkyFactory with our optimized servers designed for modded Minecraft.",
    },
    {
      icon: "clock",
      title: "Instant Setup",
      description:
        "Get your Minecraft server up and running in less than 60 seconds with our automated deployment system.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Minecraft Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
              High-performance Minecraft servers with easy plugin installation, modpack support, and instant setup.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={minecraftPlans} />

      {/* Features Section */}
      <FeaturesSection features={minecraftFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
