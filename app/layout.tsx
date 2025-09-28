import React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Metadata } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oozecloud - Next-Gen Web Hosting Solutions",
  description: "Fast, secure, and reliable web hosting services for businesses of all sizes. Launch your digital presence into the stratosphere.",
  
  // Basic metadata
  keywords: ["web hosting", "cloud hosting", "VPS", "dedicated servers", "domain registration", "SSL certificates"],
  authors: [{ name: "Oozecloud Team" }],
  creator: "Oozecloud",
  publisher: "Oozecloud",
  
  // Favicon and icons
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  
  // Open Graph metadata (for Discord, Facebook, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oozecloud.com", // Replace with your actual domain
    siteName: "Oozecloud",
    title: "Oozecloud - Next-Gen Web Hosting Solutions",
    description: "Fast, secure, and reliable web hosting services for businesses of all sizes. Launch your digital presence into the stratosphere.",
    images: [
      {
        url: "/images/og-image.png", // Create a 1200x630px image for best results
        width: 1200,
        height: 630,
        alt: "Oozecloud - Next-Gen Web Hosting Solutions",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@oozecloud", // Replace with your Twitter handle
    creator: "@oozecloud",
    title: "Oozecloud - Next-Gen Web Hosting Solutions",
    description: "Fast, secure, and reliable web hosting services for businesses of all sizes. Launch your digital presence into the stratosphere.",
    images: ["/images/twitter-image.png"], // 1200x600px recommended
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification tags (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  
  // Additional Discord-specific metadata
  other: {
    "theme-color": "#000000", // Your brand color
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags for Discord embeds */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#000000" />
        
        {/* Discord-specific meta tags */}
        <meta name="discord:server" content="your-discord-server-id" />
        <meta name="discord:channel" content="your-discord-channel-id" />
        
        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Oozecloud",
              url: "https://oozecloud.com",
              logo: "https://oozecloud.com/images/logo.png",
              description: "Fast, secure, and reliable web hosting services for businesses of all sizes.",
              sameAs: [
                "https://twitter.com/oozecloud",
                "https://facebook.com/oozecloud",
                "https://linkedin.com/company/oozecloud"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4211552204137638"
          crossOrigin="anonymous"
        ></script>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
