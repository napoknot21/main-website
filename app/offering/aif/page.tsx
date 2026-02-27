"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { useLanguage } from "@/lib/language-context"
import {
  ArrowRight,
  Layers,
  Droplets,
  Settings2,
  BarChart3,
  Activity,
  Zap,
  Lightbulb,
  Shield,
  TrendingUp,
  DollarSign,
  Gem,
  Percent,
} from "lucide-react"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

const approachItems = [
  { key: "multiasset", icon: Layers },
  { key: "liquid", icon: Droplets },
  { key: "systematic", icon: Settings2 },
] as const

const assetClasses = [
  { key: "equities", icon: TrendingUp },
  { key: "fx", icon: DollarSign },
  { key: "commodities", icon: BarChart3 },
  { key: "metals", icon: Gem },
  { key: "rates", icon: Percent },
] as const

const benefits = [
  { key: "agility", icon: Zap },
  { key: "diversification", icon: Shield },
  { key: "innovation", icon: Lightbulb },
] as const

export default function AifPage() {
  const { t } = useLanguage()
  const approach = useInView()
  const assets = useInView()
  const monitoring = useInView()
  const benefitsSection = useInView()

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight text-balance mb-5">
              {t("offering.aif.hero.title")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl mx-auto leading-relaxed text-pretty">
              {t("offering.aif.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-8">
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
              {t("offering.aif.intro")}
            </p>
          </div>
        </section>

        {/* Approach */}
        <section ref={approach.ref as React.RefObject<HTMLElement>} className="py-20 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-6xl px-8">
            <div className="text-center mb-14">
              <div className="inline-block h-px w-12 bg-accent mb-6" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
                {t("offering.aif.approach.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approachItems.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`flex flex-col items-center text-center p-8 rounded-xl border border-border bg-background transition-all duration-700 ${
                    approach.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t(`offering.aif.approach.${key}`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {t(`offering.aif.approach.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Asset Classes */}
        <section ref={assets.ref as React.RefObject<HTMLElement>} className="py-20 bg-background">
          <div className="mx-auto max-w-6xl px-8">
            <div className="text-center mb-14">
              <div className="inline-block h-px w-12 bg-accent mb-6" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
                {t("offering.aif.assets.title")}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {assetClasses.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg border border-border bg-muted/20 transition-all duration-600 hover:border-accent/40 hover:bg-accent/5 ${
                    assets.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <Icon className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{t(`offering.aif.assets.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Continuous Monitoring */}
        <section ref={monitoring.ref as React.RefObject<HTMLElement>} className="py-20 bg-primary">
          <div className={`mx-auto max-w-6xl px-8 flex flex-col md:flex-row items-center gap-10 transition-all duration-700 ${
            monitoring.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary-foreground/10 shrink-0">
              <Activity className="h-10 w-10 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-3">
                {t("offering.aif.monitoring.title")}
              </h2>
              <p className="text-primary-foreground/60 leading-relaxed text-pretty">
                {t("offering.aif.monitoring.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsSection.ref as React.RefObject<HTMLElement>} className="py-20 bg-background">
          <div className="mx-auto max-w-6xl px-8">
            <div className="text-center mb-14">
              <div className="inline-block h-px w-12 bg-accent mb-6" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
                {t("offering.aif.benefits.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`group flex flex-col items-center text-center transition-all duration-700 ${
                    benefitsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t(`offering.aif.benefits.${key}`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {t(`offering.aif.benefits.${key}.desc`)}
                  </p>
                  <div className="h-px w-12 bg-accent/30 mt-6 group-hover:w-20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
