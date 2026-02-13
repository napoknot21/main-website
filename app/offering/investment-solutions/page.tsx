"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, FileText, BarChart2, MessageSquare, Settings, Zap } from "lucide-react"

const solutions = [
  { key: "amcfx",    icon: FileText,       tagKey: "offering.is.amcfx.tag",    titleKey: "offering.is.amcfx.title",    descKey: "offering.is.amcfx.desc" },
  { key: "amcdy",    icon: BarChart2,      tagKey: "offering.is.amcdy.tag",    titleKey: "offering.is.amcdy.title",    descKey: "offering.is.amcdy.desc" },
  { key: "adv",      icon: MessageSquare,  tagKey: "offering.is.adv.tag",      titleKey: "offering.is.adv.title",      descKey: "offering.is.adv.desc" },
  { key: "dpm",      icon: Settings,       tagKey: "offering.is.dpm.tag",      titleKey: "offering.is.dpm.title",      descKey: "offering.is.dpm.desc" },
  { key: "brokerage",icon: Zap,            tagKey: "offering.is.brokerage.tag",titleKey: "offering.is.brokerage.title",descKey: "offering.is.brokerage.desc" },
] as const

export default function InvestmentSolutionsPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight text-balance mb-4">
              {t("offering.is.hero.title")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/65 max-w-xl mx-auto leading-relaxed">
              {t("offering.is.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-14 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-8">
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
              {t("offering.is.intro")}
            </p>
          </div>
        </section>

        {/* ── Sub-sections: all 5 solutions ── */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-8 flex flex-col gap-10">
            {solutions.map(({ key, icon: Icon, tagKey, titleKey, descKey }, idx) => (
              <div
                key={key}
                className={`flex flex-col lg:flex-row gap-6 p-7 rounded-xl border border-border hover:border-accent/30 transition-colors ${
                  idx % 2 === 0 ? "bg-background" : "bg-muted/20"
                }`}
              >
                {/* Icon + tag */}
                <div className="lg:w-56 shrink-0 flex flex-col gap-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary self-start">
                    {t(tagKey)}
                  </span>
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground leading-snug">
                    {t(titleKey)}
                  </h2>
                </div>

                {/* Description */}
                <div className="flex-1 flex items-start">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {t(descKey)}
                  </p>
                </div>
              </div>
            ))}
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
              {t("offering.is.cta.label")}
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
