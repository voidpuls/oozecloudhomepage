"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp } from "lucide-react"

export default function Footer() {
  // Hardcoded footer data
  const brand = {
    name: "Oozecloud",
    highlightedText: "Host",
    logo: "/images/logo.svg",
    alt: "Oozecloud Logo",
  }

  const description = "Next-generation web hosting solutions for businesses of all sizes. Fast, secure, and reliable."

  const socialLinks = [
    {
      icon: "Facebook",
      label: "Facebook",
      href: "#",
    },
    {
      icon: "Twitter",
      label: "Twitter",
      href: "#",
    },
    {
      icon: "Instagram",
      label: "Instagram",
      href: "#",
    },
    {
      icon: "Linkedin",
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: "Github",
      label: "GitHub",
      href: "#",
    },
  ]

  const columns = [
    {
      title: "Hosting",
      links: [
        {
          text: "Game Servers",
          href: "/gameservers",
        },
        {
          text: "VPS",
          href: "/vps",
        },
        {
          text: "Dedicated",
          href: "/dedicated",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          text: "About Us",
          href: "/about-us",
        },
        {
          text: "Contact",
          href: "/contact",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          text: "System Status",
          href: "/status",
        },
        {
          text: "Documentation",
          href: "/docs",
        },
      ],
    },
  ]

  const legalLinks = [
    {
      text: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      text: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      text: "Legal",
      href: "/legal",
    },
  ]

  const copyright = {
    text: "All rights reserved.",
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Map icon names to components
  const iconComponents: Record<string, React.ReactNode> = {
    Facebook: <Facebook className="w-5 h-5" />,
    Twitter: <Twitter className="w-5 h-5" />,
    Instagram: <Instagram className="w-5 h-5" />,
    Linkedin: <Linkedin className="w-5 h-5" />,
    Github: <Github className="w-5 h-5" />,
  }

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-green-500/20 relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-black hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.alt} width={53} height={29} />
              </div>
              <span className="text-xl font-bold text-white">
                {brand.name.replace(brand.highlightedText, "")}
                <span className="text-green-400">{brand.highlightedText}</span>
              </span>
            </Link>
            <p className="max-w-xs mb-6 text-gray-400">{description}</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-green-500/10"
                >
                  {iconComponents[social.icon]}
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="mb-4 text-lg font-medium text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors relative group inline-block"
                    >
                      {link.text}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-green-500/20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {brand.name}. {copyright.text}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-green-400 transition-colors relative group"
                >
                  {item.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
