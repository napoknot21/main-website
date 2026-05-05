"use client"

import { usePathname } from "next/navigation"
import { Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function LegalHeader() {
  const pathname = usePathname()
  const { t } = useLanguage()

  let titleKey = "footer.legal" // default fallback to "Legal"

  if (pathname.includes("/legal/privacy")) {
    titleKey = "footer.legal.privacy"
  } else if (pathname.includes("/legal/notice")) {
    titleKey = "footer.legal.notice"
  } else if (pathname.includes("/legal/disclosure")) {
    titleKey = "footer.legal.disclosure"
  } else if (pathname.includes("/legal/cookies")) {
    titleKey = "footer.legal.cookies"
  }

  return (
    <div className="bg-deepblue text-white pt-36 pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <Shield className="w-12 h-12 mb-6 text-blue-hour drop-shadow-[0_0_15px_rgba(57,114,229,0.3)]" />
        <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-4">
          {t(titleKey)}
        </h1>
        <p className="text-lg text-white/80 max-w-2xl font-sans">
          Please review our legal documents and policies.
        </p>
      </div>
    </div>
  )
}
