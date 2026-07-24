"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

import LegalHeader from "./legal-header"

export default function LegalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <LegalHeader />

        {/* Content section */}
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-4xl text-base font-sans leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
