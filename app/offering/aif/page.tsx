"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Shield, BarChart3, TrendingUp } from "lucide-react"

export default function AifPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight text-balance mb-4">
              {t("offering.aif.hero.title")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/65 max-w-xl mx-auto leading-relaxed">
              {t("offering.aif.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-8">
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
              {t("offering.aif.intro")}
            </p>
          </div>
        </section>

        {/* ── Sub-fund: Heroics Volatility ── */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-6xl px-8">
            <div className="flex items-start gap-8 flex-col lg:flex-row">
              {/* Left: icon + tag + title */}
              <div className="lg:w-1/3 shrink-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {t("offering.aif.hv.tag")}
                  </span>
                </div>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-5">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  {t("offering.aif.hv.title")}
                </h2>
                {/* Stats */}
                <div className="flex flex-col gap-3 mt-5">
                  {(["stat1", "stat2", "stat3"] as const).map((s) => (
                    <div key={s} className="flex items-start gap-3">
                      <div className="h-px w-4 bg-accent mt-2.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                          {t(`offering.aif.hv.${s}.label`)}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {t(`offering.aif.hv.${s}.value`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: description */}
              <div className="lg:flex-1">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {t("offering.aif.hv.desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Regulatory ── */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Shield, titleKey: "offering.aif.regulatory.title", descKey: "offering.aif.regulatory.desc" },
                { icon: BarChart3, titleKey: "offering.aif.hv.stat1.label", descKey: "offering.aif.intro" },
              ].slice(0, 1).concat([
                { icon: Shield, titleKey: "offering.aif.regulatory.title", descKey: "offering.aif.regulatory.desc" },
              ]).slice(0, 1).map(({ icon: Icon, titleKey, descKey }) => (
                <div key={titleKey} className="p-6 rounded-lg border border-border bg-background col-span-1 md:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{t(titleKey)}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>
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
              {t("offering.aif.cta.label")}
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
