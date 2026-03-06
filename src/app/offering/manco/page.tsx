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
  Building2,
  Layers,
  Scale,
  ShieldCheck,
  Monitor,
  Activity,
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

const services = [
  { key: "structuring", icon: Building2 },
  { key: "dedicated", icon: Layers },
  { key: "governance", icon: Scale },
  { key: "risk", icon: ShieldCheck },
] as const

const platforms = [
  { key: "aegis", icon: Monitor },
  { key: "sentinelle", icon: Activity },
] as const

export default function ManCoPage() {
  const { t } = useLanguage()
  const servicesSection = useInView()
  const platformsSection = useInView()

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 bg-deepblue overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-deepblue via-deepblue/90 to-blue-hour/30" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_60%_40%,rgba(57,114,229,0.4),transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6 shadow-[0_0_10px_rgba(57,114,229,0.5)]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight text-balance mb-5">
              {t("offering.manco.hero.title")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl mx-auto leading-relaxed text-pretty">
              {t("offering.manco.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-8">
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
              {t("offering.manco.intro")}
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section ref={servicesSection.ref as React.RefObject<HTMLElement>} className="py-20 bg-background">
          <div className="mx-auto max-w-6xl px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`group flex flex-col p-7 rounded-xl border border-border bg-background hover:border-blue-hour/40 hover:shadow-md transition-all duration-700 ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-deepblue text-white shrink-0 group-hover:bg-blue-hour transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-blue-hour">
                        {t(`offering.manco.${key}.tag`)}
                      </span>
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {t(`offering.manco.${key}.title`)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {t(`offering.manco.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proprietary Platforms */}
        <section ref={platformsSection.ref as React.RefObject<HTMLElement>} className="py-20 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-6xl px-8">
            <div className="text-center mb-14">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance">
                {"Proprietary Platforms"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`relative flex flex-col p-8 rounded-xl border border-border bg-background overflow-hidden group transition-all duration-700 ${platformsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-hour opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_4px_10px_rgba(57,114,229,0.5)]" />
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-blue-hour/10 text-blue-hour">
                      {t(`offering.manco.${key}.tag`)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-deepblue text-white group-hover:bg-blue-hour transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t(`offering.manco.${key}.title`)}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {t(`offering.manco.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCtaSection
          variant="banner"
          titleKey="contact.offering.manco.title"
          descKey="contact.offering.manco.desc"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
