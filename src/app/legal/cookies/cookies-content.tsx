"use client"

import { useLanguage } from "@/lib/language-context"

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

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.cookies.5.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.cookies.5.p1")}{" "}
          <a
            href="mailto:info@heroics-capital.com"
            className="text-blue-hour hover:underline"
          >
            info@heroics-capital.com
          </a>
          .
        </p>
      </section>

      <p className="text-sm opacity-60 pt-8 border-t border-border">
        {t("legal.lastUpdated")}
      </p>
    </div>
  )
}
