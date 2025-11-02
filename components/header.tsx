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
        {
          text: "Docs",
          href: "https://docs.oozecloud.com/",
          icon: <Activity className="w-4 h-4 mr-2" />,
        },
      ],
    },
  ]

  // Updated buttons array:
  const buttons = [
    {
      text: "Login",
      variant: "dropdown",
      icon: <Users className="w-4 h-4 mr-2" />,
      items: [
        {
          text: "Dashboard",
          href: "https://control.oozecloud.com/",
          icon: <Users className="w-4 h-4 mr-2" />,
        },
        {
          text: "Billing",
          href: "https://client.oozecloud.com/",
          icon: <FileText className="w-4 h-4 mr-2" />,
        },
      ],
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
    const isHomePage = window.location.pathname === "/"
    if (isHomePage) {
      const hostingSection = document.getElementById("hosting-options")
      if (hostingSection) {
        hostingSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
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
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image src={brand.logo || "/placeholder.svg"} alt={brand.alt} width={53} height={29} />
          </div>
          <span className="text-xl font-bold text-white">
            {brand.name.replace(brand.highlightedText, "")}
            <span className="text-green-400">{brand.highlightedText}</span>
          </span>
        </Link>

        {/* Navigation (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-8">
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

        {/* Buttons (including dropdown for "Game Panel & Billing") */}
        <div className="hidden lg:flex items-center gap-4">
          {buttons.map((button, index) => {
            if (button.variant === "dropdown") {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors relative group outline-none focus:outline-none">
                    <span className="flex items-center">
                      {button.icon}
                      {button.text}
                    </span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/90 backdrop-blur-md border-green-500/20 p-3 flex flex-col gap-1 min-w-[180px]">
                    {button.items?.map((item, subIdx) => (
                      <DropdownMenuItem
                        key={subIdx}
                        asChild
                        className="py-3 hover:bg-green-500/10 rounded-md focus:bg-green-500/10 focus:text-green-400"
                      >
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors w-full flex items-center"
                        >
                          {item.icon}
                          {item.text}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            } else if (button.variant === "link") {
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
              // fallback if needed
              return null
            }
          })}
        </div>

        {/* Mobile menu button */}
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
              {/* Buttons in mobile menu */}
              <div className="flex flex-col gap-3 pt-4 border-t border-green-500/20 mt-2">
                {buttons.map((button, index) => {
                  if (button.variant === "dropdown") {
                    return (
                      <DropdownMenu key={index}>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors relative group outline-none focus:outline-none">
                          <span className="flex items-center">
                            {button.icon}
                            {button.text}
                          </span>
                          <ChevronDown className="h-4 w-4 ml-1" />
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-black/90 backdrop-blur-md border-green-500/20 p-3 flex flex-col gap-1 min-w-[180px]">
                          {button.items?.map((item, subIdx) => (
                            <DropdownMenuItem
                              key={subIdx}
                              asChild
                              className="py-3 hover:bg-green-500/10 rounded-md focus:bg-green-500/10 focus:text-green-400"
                            >
                              <Link
                                href={item.href}
                                className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors w-full flex items-center"
                              >
                                {item.icon}
                                {item.text}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )
                  } else if (button.variant === "link") {
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
                    return null
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
