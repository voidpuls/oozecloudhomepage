import { SpaceBackground } from "@/components/space-background"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Zap,
  Clock,
  ChevronRight,
  Globe,
  Server,
  Users,
  Rocket,
  Target,
  Award,
  Cpu,
  Network,
  Wifi,
  Lock,
  HeartHandshake,
} from "lucide-react"

export const metadata = {
  title: "About Us - Oozecloud",
  description: "Learn about Oozecloud, our mission, values, and the team behind our hosting services.",
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
                <Rocket className="w-4 h-4 mr-1" />
                <span>Our Story</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">About Oozecloud</h1>
              <p className="text-xl text-gray-300">
                We're a team of passionate gamers and tech enthusiasts dedicated to providing the highest quality
                hosting solutions for gaming communities worldwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-white">Founded in 2018</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-white">50+ Team Members</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Globe className="w-5 h-5 text-green-400" />
                  <span className="text-white">Global Presence</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative z-10 rounded-lg border border-green-500/20 shadow-[0_0_25px_rgba(16,185,129,0.3)] overflow-hidden">
                <Image
                  src="/dashboard.png"
                  alt="Oozecloud Team"
                  width={600}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm">Our game panel!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-4">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300">
                To provide reliable, high-performance hosting solutions that empower gaming communities and businesses
                to establish and grow their online presence. We believe that everyone deserves access to fast, secure,
                and scalable hosting services at affordable prices.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Deliver unmatched performance and reliability</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Provide exceptional customer support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Offer transparent and fair pricing</span>
                </li>
              </ul>
            </div>
            {/* Our Vision */}
            <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-4">
                  <Rocket className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300">
                To become the leading hosting provider for gaming communities worldwide, known for exceptional
                performance, reliability, and customer service. We aim to continuously innovate and improve our
                infrastructure to meet the evolving needs of gamers and developers.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Lead the industry in hosting technology</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Expand our global network of data centers</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Build lasting relationships with our customers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DDoS Protection Section */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="p-4 rounded-full bg-green-500/10 mb-4 md:mb-0 md:mr-6">
                  <Shield className="w-16 h-16 text-green-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Advanced DDoS Protection by YourDddosProtection
                  </h2>
                  <p className="text-gray-300">
                    Our infrastructure is secured with enterprise-grade DDoS protection by Cosmic Guard, ensuring your
                    servers remain online even during the most sophisticated attacks. We utilize multi-layer filtering
                    and traffic scrubbing to neutralize threats before they reach your resources.
                  </p>
                </div>
              </div>

              {/* Protection Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Layer 3/4 & 7 Protection */}
                <div className="p-6 border border-green-500/20 rounded-lg bg-black/30 hover:bg-black/50 transition-colors group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-3">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">Layer 3/4 & 7 Protection</h3>
                  </div>
                  <p className="text-gray-400">Up to 5Tbps capacity to handle even the largest volumetric attacks</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>TCP/UDP Flood Protection</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>SYN Flood Mitigation</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>HTTP/S Attack Defense</span>
                    </li>
                  </ul>
                </div>

                {/* Automatic Mitigation */}
                <div className="p-6 border border-green-500/20 rounded-lg bg-black/30 hover:bg-black/50 transition-colors group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-3">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">Automatic Mitigation</h3>
                  </div>
                  <p className="text-gray-400">Near-zero latency impact with intelligent traffic analysis</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Real-time Traffic Analysis</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>AI-powered Threat Detection</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Instant Response System</span>
                    </li>
                  </ul>
                </div>

                {/* Security Monitoring */}
                <div className="p-6 border border-green-500/20 rounded-lg bg-black/30 hover:bg-black/50 transition-colors group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-3">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">24/7 Security Monitoring</h3>
                  </div>
                  <p className="text-gray-400">Continuous monitoring by our dedicated network operations team</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Round-the-clock Surveillance</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Proactive Threat Hunting</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Incident Response Team</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-8 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-green-400 mr-3" />
                  <p className="text-white">
                    <span className="font-bold">Security Guarantee:</span>
                    <span className="text-gray-300">
                      {" "}
                      We offer a 100% uptime SLA against DDoS attacks with automatic mitigation at no additional cost.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
              <HeartHandshake className="w-4 h-4 mr-1" />
              <span>Join Us Today</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Partner with a team that's passionate about your success
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Experience the difference of working with a hosting provider that truly understands the needs of gamers
              and developers. Our team is ready to support your journey.
            </p>
            <Button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-black font-bold transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] px-8 py-6 text-lg">
              <span className="relative z-10 flex items-center">
                Choose a plan
                <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
