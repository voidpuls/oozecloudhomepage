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
  
  keywords: ["web hosting", "cloud hosting", "VPS", "dedicated servers", "domain registration", "SSL certificates"],
  authors: [{ name: "Oozecloud Team" }],
  creator: "Oozecloud",
  publisher: "Oozecloud",
  
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oozecloud.com",
    siteName: "Oozecloud",
    title: "Oozecloud - Next-Gen Web Hosting Solutions",
    description: "Fast, secure, and reliable web hosting services for businesses of all sizes. Launch your digital presence into the stratosphere.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oozecloud - Next-Gen Web Hosting Solutions",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@oozecloud",
    creator: "@oozecloud",
    title: "Oozecloud - Next-Gen Web Hosting Solutions",
    description: "Fast, secure, and reliable web hosting services for businesses of all sizes. Launch your digital presence into the stratosphere.",
    images: ["/images/twitter-image.png"],
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
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#000000" />
        
        <meta name="discord:server" content="1391240565072592977" />
        <meta name="discord:channel" content="1391240565072592977" />
        
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
