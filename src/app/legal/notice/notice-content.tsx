"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"

export default function NoticeContent() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8 text-muted-foreground">
      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.1.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.1.p1")}
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed text-pretty">
          <li>{t("legal.notice.1.li1")}</li>
          <li>{t("legal.notice.1.li2")}</li>
          <li>{t("legal.notice.1.li3")}</li>
          <li>
            {t("legal.notice.1.li4")}
            <ul className="list-[circle] pl-6 mt-2 space-y-1">
              <li>{t("legal.notice.1.li4.a")}</li>
              <li>{t("legal.notice.1.li4.b")}</li>
            </ul>
          </li>
        </ul>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.1.p2")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.2.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.2.p1")}
        </p>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.2.p2")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.3.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.3.p1")}
        </p>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.3.p2")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.4.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.4.p1")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.5.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.5.p1")}
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed text-pretty">
          <li>{t("legal.notice.5.li1")}</li>
          <li>{t("legal.notice.5.li2")}</li>
        </ul>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.5.p2")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.6.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.6.p1")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.7.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.7.p1")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.8.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.8.p1")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.9.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.9.p1")}
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed text-pretty">
          <li>{t("legal.notice.9.li1")}</li>
          <li>{t("legal.notice.9.li2")}</li>
        </ul>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.9.p2")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.10.title")}
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          {t("legal.notice.10.p1")}
        </p>
      </section>

      <section className="pt-8 border-t border-border">
        <h2 className="text-xl font-serif font-semibold text-deepblue mb-4">
          {t("legal.notice.contact.title")}
        </h2>
        <p className="mb-2 leading-relaxed text-pretty">
          {t("legal.notice.contact.p1")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-blue-hour"
        >
          {t("contact.cta")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

    </div>
  )
}
