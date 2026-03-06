"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { X, Cookie } from "lucide-react"

export default function CookieBanner() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-4xl bg-background border border-border rounded-lg shadow-2xl overflow-hidden">
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
              <Cookie className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {t("cookie.message")}{" "}
                <a
                  href="#"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  {t("cookie.policy")}
                </a>
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAccept}
                  className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-sm hover:bg-primary/90 transition-colors"
                >
                  {t("cookie.accept")}
                </button>
                <button
                  onClick={handleReject}
                  className="border border-border text-foreground text-sm px-5 py-2 rounded-sm hover:bg-muted transition-colors"
                >
                  {t("cookie.reject")}
                </button>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors flex items-center py-2"
                >
                  {t("cookie.settings")}
                </a>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={handleReject}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label="Close cookie banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
