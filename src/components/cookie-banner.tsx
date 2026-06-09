"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Switch } from "@/components/ui/switch"
import { X, Cookie, SlidersHorizontal } from "lucide-react"

type CookiePreferences = {
  essential: true
  functional: boolean
  analytics: boolean
}

const consentStorageKey = "cookie-consent"
const defaultPreferences: CookiePreferences = {
  essential: true,
  functional: false,
  analytics: false,
}

function readStoredPreferences(): CookiePreferences {
  if (typeof window === "undefined") return defaultPreferences

  const storedConsent = localStorage.getItem(consentStorageKey)
  if (storedConsent === "accepted") {
    return { essential: true, functional: true, analytics: true }
  }
  if (storedConsent === "rejected") {
    return defaultPreferences
  }

  try {
    const parsed = storedConsent ? JSON.parse(storedConsent) : null
    return {
      essential: true,
      functional: Boolean(parsed?.functional),
      analytics: Boolean(parsed?.analytics),
    }
  } catch {
    return defaultPreferences
  }
}

function storePreferences(preferences: CookiePreferences) {
  localStorage.setItem(
    consentStorageKey,
    JSON.stringify({
      version: 1,
      updatedAt: new Date().toISOString(),
      ...preferences,
    })
  )
}

export default function CookieBanner() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    setPreferences(readStoredPreferences())
    const consent = localStorage.getItem(consentStorageKey)

    const openSettings = () => {
      setPreferences(readStoredPreferences())
      setSettingsOpen(true)
      setVisible(true)
    }

    window.addEventListener("open-cookie-settings", openSettings)

    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => {
        clearTimeout(timer)
        window.removeEventListener("open-cookie-settings", openSettings)
      }
    }

    return () => window.removeEventListener("open-cookie-settings", openSettings)
  }, [])

  const handleAccept = () => {
    storePreferences({ essential: true, functional: true, analytics: true })
    setVisible(false)
  }

  const handleReject = () => {
    storePreferences(defaultPreferences)
    setVisible(false)
  }

  const handleSave = () => {
    storePreferences(preferences)
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
              {settingsOpen ? (
                <div className="mb-4">
                  <h2 className="text-base font-semibold text-foreground mb-2">
                    {t("cookie.settings.title")}
                  </h2>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    {t("cookie.settings.description")}
                  </p>
                  <div className="space-y-3">
                    <CookiePreferenceRow
                      title={t("cookie.essential.title")}
                      description={t("cookie.essential.description")}
                      checked
                      disabled
                    />
                    <CookiePreferenceRow
                      title={t("cookie.functional.title")}
                      description={t("cookie.functional.description")}
                      checked={preferences.functional}
                      onCheckedChange={(checked) =>
                        setPreferences((current) => ({ ...current, functional: checked }))
                      }
                    />
                    <CookiePreferenceRow
                      title={t("cookie.analytics.title")}
                      description={t("cookie.analytics.description")}
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences((current) => ({ ...current, analytics: checked }))
                      }
                    />
                  </div>
                </div>
              ) : (
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {t("cookie.message")}{" "}
                  <Link
                    href="/legal/cookies"
                    className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                  >
                    {t("cookie.policy")}
                  </Link>
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAccept}
                  className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-md hover:bg-blue-hour transition-colors shadow-sm"
                >
                  {t("cookie.accept")}
                </button>
                <button
                  onClick={handleReject}
                  className="border border-border text-foreground text-sm font-medium px-5 py-2 rounded-md hover:bg-muted hover:text-blue-hour transition-colors"
                >
                  {t("cookie.reject")}
                </button>
                {settingsOpen ? (
                  <button
                    onClick={handleSave}
                    className="border border-border text-foreground text-sm font-medium px-5 py-2 rounded-md hover:bg-muted hover:text-blue-hour transition-colors"
                  >
                    {t("cookie.save")}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSettingsOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors flex items-center gap-2 py-2"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    {t("cookie.settings")}
                  </button>
                )}
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

function CookiePreferenceRow({
  title,
  description,
  checked,
  disabled,
  onCheckedChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-border px-4 py-3">
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <Switch
        checked={checked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        aria-label={title}
      />
    </div>
  )
}
