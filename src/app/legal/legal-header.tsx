"use client"

import { usePathname } from "next/navigation"
import { Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { structuredText } from "@/lib/structured-translations"

export default function LegalHeader() {
  const pathname = usePathname()
  const { locale, t } = useLanguage()
  const s = (source: string) => structuredText(locale, source)

  let titleKey = "footer.legal" // default fallback to "Legal"
  let subtitle = "Please review our legal documents and policies."

  if (pathname.includes("/legal/privacy")) {
    titleKey = "footer.legal.privacy"
  } else if (pathname.includes("/legal/notice")) {
    titleKey = "footer.legal.notice"
  } else if (pathname.includes("/legal/disclosure")) {
    titleKey = "footer.legal.disclosure"
    subtitle = "A summary of our regulatory disclosures, policies and complaint handling procedure."
  } else if (pathname.includes("/legal/cookies")) {
    titleKey = "footer.legal.cookies"
  }

  return (
    <div className="bg-deepblue text-white pt-36 pb-20 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start text-left">
        <Shield className="w-12 h-12 mb-6 text-blue-hour drop-shadow-[0_0_15px_rgba(57,114,229,0.3)]" />
        <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-4">
          {t(titleKey)}
        </h1>
        <p className="text-lg text-white/80 max-w-2xl font-sans">
          {s(subtitle)}
        </p>
      </div>
    </div>
  )
}
