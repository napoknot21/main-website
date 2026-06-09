"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"

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

      <section className="pt-8 border-t border-border">
        <h2 className="text-xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.privacy.contact.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.privacy.contact.p1")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-blue-hour"
        >
          {t("contact.cta")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <p className="text-sm opacity-60 pt-8 border-t border-border">
        {t("legal.lastUpdated")}
      </p>
    </div>
  )
}
