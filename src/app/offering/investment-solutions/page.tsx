"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactCtaSection from "@/components/contact-cta-section"
import { useLanguage } from "@/lib/language-context"
import {
  ArrowRight,
  Settings,
  BarChart2,
  FileText,
  MessageSquare,
  Layers,
  Wallet,
} from "lucide-react"

function useInView(threshold = 0.1) {
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

const solutions = [
  { key: "dpm", icon: Settings, tagKey: "offering.is.dpm.tag", titleKey: "offering.is.dpm.title", descKey: "offering.is.dpm.desc" },
  { key: "amcdyn", icon: BarChart2, tagKey: "offering.is.amcdyn.tag", titleKey: "offering.is.amcdyn.title", descKey: "offering.is.amcdyn.desc" },
  { key: "amcdedicated", icon: FileText, tagKey: "offering.is.amcdedicated.tag", titleKey: "offering.is.amcdedicated.title", descKey: "offering.is.amcdedicated.desc" },
  { key: "adv", icon: MessageSquare, tagKey: "offering.is.adv.tag", titleKey: "offering.is.adv.title", descKey: "offering.is.adv.desc" },
  { key: "aggregation", icon: Layers, tagKey: "offering.is.aggregation.tag", titleKey: "offering.is.aggregation.title", descKey: "offering.is.aggregation.desc" },
  { key: "cash", icon: Wallet, tagKey: "offering.is.cash.tag", titleKey: "offering.is.cash.title", descKey: "offering.is.cash.desc" },
] as const

export default function InvestmentSolutionsPage() {
  const { t } = useLanguage()
  const solutionsSection = useInView()

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight text-balance mb-5">
              {t("offering.is.hero.title")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl mx-auto leading-relaxed text-pretty">
              {t("offering.is.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-8">
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
              {t("offering.is.intro")}
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section ref={solutionsSection.ref as React.RefObject<HTMLElement>} className="py-20 bg-background">
          <div className="mx-auto max-w-6xl px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map(({ key, icon: Icon, tagKey, titleKey, descKey }, idx) => (
                <div
                  key={key}
                  className={`flex flex-col p-7 rounded-xl border border-border bg-background hover:border-accent/30 hover:shadow-sm transition-all duration-700 ${solutionsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center h-11 w-11 rounded-full bg-primary text-primary-foreground shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-accent">
                        {t(tagKey)}
                      </span>
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {t(titleKey)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {t(descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCtaSection
          variant="banner"
          titleKey="contact.offering.is.title"
          descKey="contact.offering.is.desc"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
