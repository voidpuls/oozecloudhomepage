"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Gamepad2,
  Cloud,
  Building2,
  HelpCircle,
  Server,
  Database,
  Users,
  Activity,
  FileText,
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Hardcoded navigation data
  const brand = {
    name: "Ooze",
    highlightedText: "cloud",
    logo: "/images/logo.png",
    alt: "Oozecloud Logo",
  }

  const navigation = [
    {
      text: "Game Hosting",
      href: "/gameservers",
      icon: <Gamepad2 className="w-4 h-4 mr-2" />,
    },
    {
      text: "Cloud Hosting",
      type: "dropdown",
      icon: <Cloud className="w-4 h-4 mr-2" />,
      items: [
        {
          text: "VPS",
          href: "/vps",
          icon: <Server className="w-4 h-4 mr-2" />,
        },
        {
          text: "Dedicated",
          href: "/dedicated",
          icon: <Database className="w-4 h-4 mr-2" />,
        },
      ],
    },
    {
      text: "Company",
      type: "dropdown",
      icon: <Building2 className="w-4 h-4 mr-2" />,
      items: [
        {
          text: "About Us",
          href: "/about-us",
          icon: <Users className="w-4 h-4 mr-2" />,
        },
        {
          text: "Status",
          href: "https://status.oozecloud.com/",
          icon: <Activity className="w-4 h-4 mr-2" />,
        },
      ],
    },
    {
      text: "Client Area",
      type: "dropdown",
      icon: <Users className="w-4 h-4 mr-2" />,
      items: [
        {
          text: "Dashboard",
          href: "https://dashboard.oozecloud.com/",
          icon: <Users className="w-4 h-4 mr-2" />,
        },
        {
          text: "Billing",
          href: "https://billing.oozecloud.com/",
          icon: <Users className="w-4 h-4 mr-2" />,
        }
      ]
    },
    {
      text: "Help",
      type: "dropdown",
      icon: <HelpCircle className="w-4 h-4 mr-2" />,
      items: [
        {
          text: "Docs",
          href: "/docs",
          icon: <FileText className="w-4 h-4 mr-2" />,
        },
      ],
    },
  ]

  const buttons = [
    {
      text: "Login",
      href: "https://billing.oozecloud.com/",
      variant: "link",
    },
    {
      text: "Choose a plan",
      href: "#hosting-options",
      variant: "primary",
      icon: "ChevronRight",
    },
  ]

  const mobileMenu = {
    showMobileMenu: true,
    mobileBreakpoint: "lg",
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToHostingOptions = (e: React.MouseEvent) => {
    e.preventDefault()

    // Check if we're already on the home page
    const isHomePage = window.location.pathname === "/"

    if (isHomePage) {
      // If on home page, just scroll to the section
      const hostingSection = document.getElementById("hosting-options")
      if (hostingSection) {
        hostingSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on another page, navigate to home page with a hash
      window.location.href = "/#hosting-options"
    }

    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-green-500/20 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image src={brand.logo || "/placeholder.svg"} alt={brand.alt} width={53} height={29} />
          </div>
          <span className="text-xl font-bold text-white">
            {brand.name.replace(brand.highlightedText, "")}
            <span className="text-green-400">{brand.highlightedText}</span>
          </span>
        </Link>

        <nav className="hidden lg:!flex md:!flex items-center gap-8" style={{ display: "none" }}>
          {navigation.map((item, index) => {
            if (item.type === "dropdown") {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors relative group outline-none focus:outline-none">
                    <span className="flex items-center">
                      {item.icon}
                      {item.text}
                    </span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/90 backdrop-blur-md border-green-500/20 p-3 flex flex-col gap-1 min-w-[180px]">
                    {item.items?.map((subItem, subIndex) => (
                      <DropdownMenuItem
                        key={subIndex}
                        asChild
                        className="py-3 hover:bg-green-500/10 rounded-md focus:bg-green-500/10 focus:text-green-400"
                      >
                        <Link
                          href={subItem.href}
                          className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors w-full flex items-center"
                        >
                          {subItem.icon}
                          {subItem.text}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={index}
                href={item.href || "#"}
                className="text-gray-300 hover:text-green-400 transition-colors relative group flex items-center"
              >
                {item.icon}
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:!flex md:!flex items-center gap-4" style={{ display: "none" }}>
          {buttons.map((button, index) => {
            if (button.variant === "link") {
              return (
                <Link
                  key={index}
                  href={button.href}
                  className="text-gray-300 hover:text-green-400 transition-colors relative group px-4 py-2"
                >
                  {button.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            } else {
              return (
                <Button
                  key={index}
                  className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-black font-bold transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                  onClick={button.href === "#hosting-options" ? scrollToHostingOptions : undefined}
                  asChild={button.href !== "#hosting-options"}
                >
                  {button.href !== "#hosting-options" ? (
                    <Link href={button.href}>
                      <span className="relative z-10 flex items-center">
                        {button.text}
                        {button.icon === "ChevronRight" && (
                          <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        )}
                      </span>
                      <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                  ) : (
                    <>
                      <span className="relative z-10 flex items-center">
                        {button.text}
                        {button.icon === "ChevronRight" && (
                          <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        )}
                      </span>
                      <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </>
                  )}
                </Button>
              )
            }
          })}
        </div>

        {mobileMenu.showMobileMenu && (
          <button
            className="lg:!hidden text-white p-2 rounded-full hover:bg-green-500/10 transition-colors"
            style={{ display: "block" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && mobileMenu.showMobileMenu && (
        <div
          className="lg:!hidden bg-black/95 backdrop-blur-md border-b border-green-500/20 animate-fadeIn"
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <div className="container px-4 py-4 mx-auto">
            <nav className="flex flex-col gap-4">
              {navigation.map((item, index) => {
                if (item.type === "dropdown") {
                  return (
                    <div key={index} className="py-3 px-4">
                      <div className="text-gray-300 font-medium mb-2 flex items-center">
                        {item.icon}
                        {item.text}
                      </div>
                      <div className="pl-4 flex flex-col gap-6">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="text-gray-300 hover:text-green-400 transition-colors py-2 flex items-center"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.icon}
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                return (
                  <Link
                    key={index}
                    href={item.href || "#"}
                    className="text-gray-300 hover:text-green-400 transition-colors py-3 px-4 rounded-lg hover:bg-green-500/5 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.text}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-3 pt-4 border-t border-green-500/20 mt-2">
                {buttons.map((button, index) => {
                  if (button.variant === "link") {
                    return (
                      <Link
                        key={index}
                        href={button.href}
                        className="text-gray-300 hover:text-green-400 transition-colors py-3 px-4 rounded-lg hover:bg-green-500/5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {button.text}
                      </Link>
                    )
                  } else {
                    return (
                      <Button
                        key={index}
                        className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-black font-bold"
                        onClick={button.href === "#hosting-options" ? scrollToHostingOptions : undefined}
                        asChild={button.href !== "#hosting-options"}
                      >
                        {button.href !== "#hosting-options" ? (
                          <Link href={button.href}>{button.text}</Link>
                        ) : (
                          <>{button.text}</>
                        )}
                      </Button>
                    )
                  }
                })}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
