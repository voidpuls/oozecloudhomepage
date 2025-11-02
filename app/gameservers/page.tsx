import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import Image from "next/image"
import { Check } from "lucide-react"

export const metadata = {
  title: "Game Servers - Oozecloud",
  description: "High-performance game servers with low latency and easy setup for all your favorite games.",
}

export default function GameServersPage() {
  // Updated game server options with all supported games
  const gameOptions = [
    {
      name: "Minecraft Java",
      description: "Start your Minecraft Java server on the fastest hardware, with great proven value, at prices lower than you'll find anywhere else. Whether you're playing with friends, running mods, or building a community, we've got you covered.",
      image: "/images/minecraft.png",
    },
    {
      name: "Minecraft Bedrock",
      description: "Host your Minecraft Bedrock server with cross-platform support for mobile, console, and Windows 10 players. Perfect for communities that want to play together across all devices.",
      image: "/images/minecraft.png",
    },
    {
      name: "Rust",
      description: "Deploy your Rust server with high-performance hardware designed to handle intense PvP action and large player bases. Build, raid, and survive with minimal lag.",
      image: "/images/rust.jpg",
    },
    {
      name: "Garry's Mod",
      description: "Host your Garry's Mod server with support for all your favorite game modes and addons. From DarkRP to TTT, we provide the performance you need.",
      image: "/images/garrys.jpg",
    },
    {
      name: "CS:GO",
      description: "Run your Counter-Strike: Global Offensive server with ultra-low latency for competitive play. Perfect for scrims, pugs, and community servers.",
      image: "/images/csgo.jpg",
    },
    {
      name: "Ark: Survival Evolved",
      description: "Tame dinosaurs and build bases on your own Ark server. High-performance hosting with full mod support and easy configuration.",
      image: "/images/ark.jpg",
    },
    {
      name: "Team Fortress 2",
      description: "Host your Team Fortress 2 server for casual or competitive play. Support for custom maps, mods, and all game modes.",
      image: "/images/tf2.jpg",
    },
    {
      name: "Insurgency",
      description: "Deploy tactical Insurgency servers with low latency and high performance for intense close-quarters combat and strategic gameplay.",
      image: "/images/Insurgency.jpg",
    },
    {
      name: "Unturned",
      description: "Build your own post-apocalyptic adventure with fast, reliable, and fully customizable Unturned server hosting. Control everything you need to get started.",
      image: "/images/unturned.webp",
    },
    {
      name: "Node.js Bot",
      description: "Host your Node.js applications and bots with blazing fast performance, full package manager support, and 24/7 uptime.",
      image: "/images/nodejs.webp",
    },
    {
      name: "Python Bot",
      description: "Deploy Python bots and applications with ease. Full pip support, custom library installation, and reliable hosting for your automation needs.",
      image: "/images/python.jpg",
    },
  ]

  // Game server-specific features
  const gameFeatures = [
    {
      icon: "shield",
      title: "DDoS Protection",
      description:
        "Our game servers come with enterprise-grade DDoS protection to ensure your gameplay is never interrupted by malicious attacks.",
    },
    {
      icon: "zap",
      title: "Low Latency Network",
      description:
        "Optimized network infrastructure with multiple global locations to provide the lowest possible latency for smooth gameplay.",
    },
    {
      icon: "clock",
      title: "One-Click Installation",
      description:
        "Get your game server up and running in minutes with our easy-to-use control panel and one-click game installations.",
    },
  ]

  // Pricing plans
  const pricingPlans = [
    {
      name: "Cobblestone",
      description: "Basic plan with essential features",
      price: "$2.37",
      cores: "2 Cores",
      ram: "3GB RAM",
      storage: "15GB SSD Storage",
      ports: "3 Ports",
    },
    {
      name: "Dirt",
      description: "Affordable plan for small servers",
      price: "$3.16",
      cores: "2 Cores",
      ram: "4GB RAM",
      storage: "30GB SSD Storage",
      ports: "5 Ports",
    },
    {
      name: "Stone",
      description: "Balanced plan for growing servers",
      price: "$3.95",
      cores: "2 Cores",
      ram: "5GB RAM",
      storage: "40GB SSD Storage",
      ports: "5 Ports",
    },
    {
      name: "Iron",
      description: "Enhanced resources for larger servers",
      price: "$4.74",
      cores: "2 Cores",
      ram: "6GB RAM",
      storage: "50GB SSD Storage",
      ports: "5 Ports",
    },
    {
      name: "Gold",
      description: "High-performance hosting for demanding servers",
      price: "$5.53",
      cores: "2 Cores",
      ram: "7GB RAM",
      storage: "65GB SSD Storage",
      ports: "5 Ports",
    },
    {
      name: "Redstone",
      description: "For advanced users and modded servers",
      price: "$6.32",
      cores: "2.5 Cores",
      ram: "8GB RAM",
      storage: "70GB SSD Storage",
      ports: "10 Ports",
    },
    {
      name: "Emerald",
      description: "Premium plan for larger communities",
      price: "$7.90",
      cores: "2.5 Cores",
      ram: "10GB RAM",
      storage: "80GB SSD Storage",
      ports: "10 Ports",
      popular: true,
    },
    {
      name: "Diamond",
      description: "High-end hosting for intensive servers",
      price: "$9.48",
      cores: "3 Cores",
      ram: "12GB RAM",
      storage: "90GB SSD Storage",
      ports: "10 Ports",
    },
    {
      name: "Netherite",
      description: "Ultimate performance for heavy-duty servers",
      price: "$12.64",
      cores: "4 Cores",
      ram: "16GB RAM",
      storage: "100GB SSD Storage",
      ports: "10 Ports",
    },
    {
      name: "Beacon",
      description: "Top-tier hosting for large-scale projects",
      price: "$14.22",
      cores: "5 Cores",
      ram: "18GB RAM",
      storage: "120GB SSD Storage",
      ports: "10 Ports",
    },
    {
      name: "End Portal",
      description: "Maximum resources for enterprise servers",
      price: "$17.38",
      cores: "5 Cores",
      ram: "22GB RAM",
      storage: "140GB SSD Storage",
      ports: "10 Ports",
    },
  ]

  const commonFeatures = [
    "Server Manager Access",
    "NVMe SSD Storage",
    "Advanced DDoS Protection",
    "24/7 Support",
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Game Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
              High-performance game servers with low latency, DDoS protection, and easy setup for all your favorite
              games.
            </p>
          </div>
        </div>
      </section>

      {/* Game Options Section */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Supported Games & Platforms</h2>
            <p className="text-xl text-gray-400">
              From survival games to tactical shooters and custom bots - we've got you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gameOptions.map((game, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg border border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                    <p className="text-green-400 mb-2">Starting at $2.37/mo</p>
                    <p className="mt-auto text-sm text-gray-300">{game.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
<section className="py-16 relative">
  <div className="container px-4 mx-auto">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
        Choose Your Plan
      </h2>
      <p className="text-xl text-gray-400">
        Select the perfect plan for your server needs. All plans include premium features.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg border ${
            plan.popular
              ? "border-green-400/50 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              : "border-green-500/20"
          } bg-[#010901]/70 backdrop-blur-md hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-500 flex flex-col`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
          )}

          <div className="p-6 flex-1 flex flex-col">
            {/* Plan Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-3xl font-bold text-green-400">
                {plan.price}
                <span className="text-sm text-gray-400 font-normal"> per month</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{plan.cores}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{plan.ram}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{plan.storage}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{plan.ports}</span>
              </div>

              {/* Common Features */}
              <div className="border-t border-green-500/20 pt-3 mt-3">
                {commonFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300 mb-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
  href="https://client.oozecloud.com"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black ${
    plan.popular
      ? "bg-green-500 hover:bg-green-600 text-white"
      : "bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30"
  }`}
>
  Get Started
</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Features Section */}
      <FeaturesSection features={gameFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
