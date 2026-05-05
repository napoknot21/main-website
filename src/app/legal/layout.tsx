import type { ReactNode } from "react"
import { Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

import LegalHeader from "./legal-header"

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <LegalHeader />

        {/* Content section */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-base md:text-lg font-sans">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
