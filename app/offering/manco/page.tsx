"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Building2, Layers, CheckCircle2 } from "lucide-react"

export default function ManCoPage() {
  const { t } = useLanguage()

  const whyItems = [
    t("offering.manco.why.item1"),
    t("offering.manco.why.item2"),
    t("offering.manco.why.item3"),
    t("offering.manco.why.item4"),
  ]

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_60%_40%,white,transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight text-balance mb-4">
              {t("offering.manco.hero.title")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/65 max-w-xl mx-auto leading-relaxed">
              {t("offering.manco.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-14 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-8">
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
              {t("offering.manco.intro")}
            </p>
          </div>
        </section>

        {/* ── ManCo Services + Sub-funds ── */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-8 flex flex-col gap-10">

            {/* ManCo Services */}
            <div className="flex flex-col lg:flex-row gap-6 p-7 rounded-xl border border-border bg-muted/20">
              <div className="lg:w-56 shrink-0 flex flex-col gap-3">
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary self-start">
                  {t("offering.manco.manco.tag")}
                </span>
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground">
                  <Building2 className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold text-foreground leading-snug">
                  {t("offering.manco.manco.title")}
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {t("offering.manco.manco.desc")}
                </p>
              </div>
            </div>

            {/* Dedicated Sub-funds */}
            <div className="flex flex-col lg:flex-row gap-6 p-7 rounded-xl border border-border bg-background">
              <div className="lg:w-56 shrink-0 flex flex-col gap-3">
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary self-start">
                  {t("offering.manco.subfunds.tag")}
                </span>
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground">
                  <Layers className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold text-foreground leading-snug">
                  {t("offering.manco.subfunds.title")}
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {t("offering.manco.subfunds.desc")}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Why our ManCo ── */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-6xl px-8">
            <h2 className="text-xl font-semibold text-foreground mb-8">{t("offering.manco.why.title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItems.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 border-t border-border">
          <div className="mx-auto max-w-6xl px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-foreground">{t("contact.cta.inline.title")}</p>
              <p className="text-sm text-muted-foreground mt-0.5 max-w-md">{t("contact.cta.inline.desc")}</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-6 py-3 rounded-md hover:bg-primary/90 transition-all group"
            >
              {t("offering.manco.cta.label")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
