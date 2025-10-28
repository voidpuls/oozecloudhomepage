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
    name: "Cobblestone",
    price: "$2.37",
    period: "per month",
    description: "Basic plan with essential features",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Dirt",
    price: "$3.16",
    period: "per month",
    description: "Affordable plan for small servers",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Stone",
    price: "$3.95",
    period: "per month",
    description: "Balanced plan for growing servers",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Iron",
    price: "$4.74",
    period: "per month",
    description: "Enhanced resources for larger servers",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Gold",
    price: "$5.53",
    period: "per month",
    description: "High-performance hosting for demanding servers",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Redstone",
    price: "$6.32",
    period: "per month",
    description: "For advanced users and modded servers",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Emerald",
    price: "$7.90",
    period: "per month",
    description: "Premium plan for larger communities",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Diamond",
    price: "$9.48",
    period: "per month",
    description: "High-end hosting for intensive servers",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Netherite",
    price: "$12.64",
    period: "per month",
    description: "Ultimate performance for heavy-duty servers",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "Beacon",
    price: "$14.22",
    period: "per month",
    description: "Top-tier hosting for large-scale projects",
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
    buttonLink: "https://client.oozecloud.com/",
  },
  {
    name: "End Portal",
    price: "$17.38",
    period: "per month",
    description: "Maximum resources for enterprise servers",
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
    buttonLink: "https://client.oozecloud.com/",
  },
]


  // Minecraft-specific features
  const minecraftFeatures = [
    {
      icon: "🔌",
      title: "Plugin Installer",
      description:
        "Easily browse, install, and manage plugins to enhance your server.",
    },
    {
      icon: "🧩",
      title: "Mod Installer",
      description:
        "Seamlessly add and configure mods for a customized experience.",
    },
    {
      icon: "🔄",
      title: "Version Changer",
      description:
        "Switch between different game versions effortlessly.",
    },
    {
      icon: "🌍",
      title: "World Manager",
      description:
        "Create, load, and manage multiple worlds for endless creativity.",
    },
    {
      icon: "🛡️",
      title: "DDoS Protection",
      description:
        "2TB/s DDoS protection to keep your server secure and online.",
    },
    {
      icon: "⚙️",
      title: "Config UI Editor",
      description:
        "User-friendly interface to customize server settings without hassle.",
    },
    {
      icon: "🌐",
      title: "Subdomain Manager",
      description:
        "Manage multiple subdomains easily to organize your services.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901] relative overflow-hidden">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="container px-4 mx-auto text-center max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Minecraft Servers
          </h1>
          <p className="mb-8 text-xl text-gray-400">
            High-performance Minecraft servers with easy plugin installation, modpack support, and instant setup.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 px-4 container mx-auto mb-16">
        <Pricing plans={minecraftPlans} />
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 container mx-auto mb-16">
        <FeaturesSection features={minecraftFeatures} />
      </section>

      {/* Call to Action / Discord */}
      <section className="relative z-10 px-4 mb-8">
        <DiscordCTA />
      </section>
    </div>
  )
}
