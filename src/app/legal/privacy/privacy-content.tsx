"use client"

import { useLanguage } from "@/lib/language-context"

export default function PrivacyContent() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8 text-muted-foreground">
      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.privacy.title")}
        </h2>
        <p className="mb-4 text-justify leading-relaxed text-pretty">
          {t("legal.privacy.p1")}
        </p>
        <p className="mb-4 text-justify leading-relaxed text-pretty">
          {t("legal.privacy.p2")}
        </p>
      </section>

      <p className="text-sm opacity-60 pt-8 border-t border-border">
        Last updated: May 2026
      </p>
    </div>
  )
}
