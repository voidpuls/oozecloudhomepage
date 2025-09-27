import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"

export const metadata = {
  title: "Minecraft Servers - Oozecloud",
  description: "High-performance Minecraft servers with mods, plugins, and custom configurations.",
}

export default function MinecraftPage() {
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
      buttonLink: "/order/minecraft/free",
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
      buttonLink: "/order/minecraft/standard",
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
      buttonLink: "/order/minecraft/plus",
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
      buttonLink: "/order/minecraft/pro",
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
      buttonLink: "/order/minecraft/advanced",
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
      buttonLink: "/order/minecraft/premium",
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
      buttonLink: "/order/minecraft/enterprise",
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
      buttonLink: "/order/minecraft/ultimate",
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
      buttonLink: "/order/minecraft/business",
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
      buttonLink: "/order/minecraft/executive",
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
      buttonLink: "/order/minecraft/mega",
    },
  ]

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
    <div className="min-h-screen bg-gray-950 font-sans text-white">
      {/* Background */}
      <SpaceBackground />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/minecraft-hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ultimate Minecraft Server Hosting</h1>
            <p className="text-lg md:text-xl mb-6">
              Power your world with high-performance servers, instant setup, and easy plugin management.
            </p>
            <a
              href="#plans"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Plans
            </a>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {minecraftPlans.map((plan) => (
              <div
                key={plan.name}
                className={`border-2 rounded-lg p-6 relative transition-transform hover:scale-105 ${
                  plan.popular ? 'border-green-400 shadow-xl' : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-green-400 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span> <span className="text-sm">{plan.period}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 mr-2 text-green-500" /> {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.buttonLink}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition text-center"
                >
                  Get {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {minecraftFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-800 rounded-lg p-6 transition hover:shadow-xl hover:bg-gray-700"
              >
                {/* Replace with actual icons or SVGs */}
                <div className="flex items-center justify-center mb-4 text-3xl text-green-400">
                  <i className={`icon-${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Minecraft Community</h2>
          <p className="mb-8 text-gray-400">
            Connect with us on Discord for updates, support, and community events.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition"
          >
            Join Our Discord
          </a>
        </div>
      </section>
    </div>
  )
}