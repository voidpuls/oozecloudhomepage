import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "Dedicated Servers - Oozecloud",
  description: "High-performance dedicated servers with full hardware control and enterprise-grade reliability.",
}

export default function DedicatedPage() {
  // Dedicated server plans data
  const dedicatedPlans = [
    {
      name: "Starter Dedicated",
      price: "$79.99",
      period: "per month",
      description: "Entry-level dedicated server for small businesses",
      features: [
        "Intel Xeon E-2224G (4 Cores)",
        "16GB DDR4 RAM",
        "1 x 512GB SSD",
        "5TB Bandwidth",
        "3 IPv4 Addresses",
        "Basic DDoS Protection",
        "24/7 Support",
      ],
      popular: false,
      buttonLink: "/order/dedicated/starter",
    },
    {
      name: "Pro Dedicated",
      price: "$119.99",
      period: "per month",
      description: "Perfect for small to medium businesses and applications",
      features: [
        "Intel Xeon E-2276G (6 Cores)",
        "32GB DDR4 RAM",
        "2 x 512GB NVMe SSD",
        "10TB Bandwidth",
        "5 IPv4 Addresses",
        "DDoS Protection",
        "24/7 Support",
      ],
      popular: false,
      buttonLink: "/order/dedicated/pro",
    },
    {
      name: "Advanced Dedicated",
      price: "$149.99",
      period: "per month",
      description: "For growing businesses with higher resource needs",
      features: [
        "Intel Xeon E-2288G (8 Cores)",
        "64GB DDR4 RAM",
        "2 x 1TB NVMe SSD",
        "15TB Bandwidth",
        "5 IPv4 Addresses",
        "DDoS Protection",
        "RAID 1 Configuration",
        "24/7 Priority Support",
      ],
      popular: true,
      buttonLink: "/order/dedicated/advanced",
    },
    {
      name: "Enterprise Dedicated",
      price: "$199.99",
      period: "per month",
      description: "Ideal for high-traffic websites and resource-intensive applications",
      features: [
        "AMD EPYC 7302P (16 Cores)",
        "128GB DDR4 RAM",
        "2 x 1TB NVMe SSD",
        "Unlimited Bandwidth",
        "10 IPv4 Addresses",
        "Advanced DDoS Protection",
        "RAID Configuration",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/dedicated/enterprise",
    },
    {
      name: "Performance Dedicated",
      price: "$299.99",
      period: "per month",
      description: "For high-performance computing and database applications",
      features: [
        "AMD EPYC 7402P (24 Cores)",
        "256GB DDR4 RAM",
        "4 x 1TB NVMe SSD",
        "Unlimited Bandwidth",
        "10 IPv4 Addresses",
        "Advanced DDoS Protection",
        "RAID 10 Configuration",
        "Hardware Redundancy",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/dedicated/performance",
    },
    {
      name: "Ultimate Dedicated",
      price: "$499.99",
      period: "per month",
      description: "For mission-critical applications requiring maximum performance",
      features: [
        "AMD EPYC 7502P (32 Cores)",
        "512GB DDR4 RAM",
        "4 x 2TB NVMe SSD",
        "Unlimited Bandwidth",
        "15 IPv4 Addresses",
        "Advanced DDoS Protection",
        "RAID 10 Configuration",
        "Hardware Redundancy",
        "Dedicated Network Port",
        "24/7 Priority Support",
        "Dedicated Account Manager",
      ],
      popular: false,
      buttonLink: "/order/dedicated/ultimate",
    },
  ]

  // Dedicated server-specific features
  const dedicatedFeatures = [
    {
      icon: "shield",
      title: "Full Hardware Control",
      description:
        "Complete control over your dedicated hardware with no resource sharing, giving you maximum performance and reliability for your applications.",
    },
    {
      icon: "zap",
      title: "Enterprise Hardware",
      description:
        "Top-tier server hardware from leading manufacturers, featuring the latest processors, NVMe SSDs, and high-speed networking components.",
    },
    {
      icon: "clock",
      title: "Custom Configurations",
      description:
        "Tailor your server to your exact specifications with custom hardware configurations, RAID setups, and specialized networking options.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Dedicated Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
              Enterprise-grade dedicated servers with full hardware control, maximum performance, and unparalleled
              reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
    <Pricing plans={dedicatedPlans} />

      {/* Features Section */}
      <FeaturesSection features={dedicatedFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
