import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check, Gamepad2, Zap, Shield, Clock, Users, Server, Cpu } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function MinecraftPage() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const pricingRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const pricingInView = useInView(pricingRef, { once: true })

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
      popular: true,
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

  // Stats data
  const stats = [
    { icon: Users, label: "Active Players", value: "50,000+" },
    { icon: Server, label: "Servers Hosted", value: "2,500+" },
    { icon: Cpu, label: "Uptime", value: "99.9%" },
    { icon: Gamepad2, label: "Modpacks Supported", value: "100+" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010901] via-[#0a1a0a] to-[#010901] overflow-hidden">
      <SpaceBackground />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 border border-green-500/20 rounded-full">
                <Gamepad2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Minecraft Hosting</span>
              </div>
              
              <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl bg-gradient-to-r from-white via-green-100 to-green-300 bg-clip-text text-transparent">
                Minecraft Servers
              </h1>
              
              <p className="mb-8 text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                High-performance Minecraft servers with easy plugin installation, modpack support, and instant setup. 
                <span className="text-green-400 font-semibold"> Start your adventure today!</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="#pricing"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                View Plans
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Try Demo
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Minecraft blocks animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-sm opacity-20"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                rotate: 0 
              }}
              animate={{ 
                y: -50,
                rotate: 360,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Features Preview */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Minecraft Hosting?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experience the best Minecraft hosting with cutting-edge features designed for gamers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Advanced DDoS Protection",
                  description: "Enterprise-grade protection keeps your server online 24/7",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast Performance",
                  description: "NVMe SSD storage and optimized hardware for zero lag",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: Clock,
                  title: "Instant Deployment",
                  description: "Your server is ready in under 60 seconds",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:transform hover:scale-105">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} id="pricing" className="py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={pricingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Pricing plans={minecraftPlans} />
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <FeaturesSection features={minecraftFeatures} />
        </motion.div>
      </section>

      {/* Discord CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DiscordCTA />
      </motion.div>
    </div>
  )
}
