"use client"

import { useLanguage } from "@/lib/language-context"

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
          <li>{t("legal.notice.1.li5")}</li>
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
        <ul className="space-y-1 text-sm md:text-base">
          <li>{t("legal.notice.contact.email")}</li>
          <li>{t("legal.notice.contact.phone")}</li>
          <li>{t("legal.notice.contact.lux")}</li>
          <li>{t("legal.notice.contact.monaco")}</li>
        </ul>
      </section>

    </div>
  )
}
