"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, SlidersHorizontal } from "lucide-react"

const cookieItems = ["li1", "li2", "li3"] as const

export default function CookiesContent() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8 text-muted-foreground">
      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.cookies.1.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.cookies.1.p1")}
        </p>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.cookies.1.p2")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.cookies.2.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.cookies.2.p1")}
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed text-pretty">
          {cookieItems.map((item) => (
            <li key={item}>
              <strong>{t(`legal.cookies.2.${item}.title`)}</strong>{" "}
              {t(`legal.cookies.2.${item}.text`)}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.cookies.3.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.cookies.3.p1")}
        </p>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.cookies.3.p2")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.cookies.4.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.cookies.4.p1")}
        </p>
      </section>

      <section className="pt-8 border-t border-border">
        <h2 className="text-xl font-serif font-semibold text-deepblue mb-4">
          {t("cookie.settings")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("cookie.settings.page.p1")}
        </p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-blue-hour"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {t("cookie.settings")}
        </button>
      </section>

      <section className="pt-8 border-t border-border">
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.cookies.contact.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.cookies.contact.p1")}
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
