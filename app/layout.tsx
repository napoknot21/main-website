import React from "react"
import type { Metadata, Viewport } from "next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Heroics Capital Partners | Independent Asset Management",
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
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
