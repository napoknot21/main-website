import React from "react"
import type { Metadata, Viewport } from "next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Heroics Capital | Independent Asset Management",
  description:
    "Independent asset management with conviction. Bespoke investment solutions for institutional and private clients across Europe.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#061237",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to font / CDN origins if used */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload the two logo variants (critical LCP assets) */}
        <link
          rel="preload"
          as="image"
          href="/images/heroics-logo-rgb blanc.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/images/heroics-logo-rgb.png"
          type="image/png"
        />

        {/*
          Preload the hero poster so the video placeholder renders immediately.
          The actual video is lazy-loaded by the browser via preload="none" / preload="metadata".
        */}
        <link
          rel="preload"
          as="image"
          href="/images/hero.jpg"
          type="image/jpeg"
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
