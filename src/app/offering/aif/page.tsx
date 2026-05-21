"use client"

import { useRef, useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactCtaSection from "@/components/contact-cta-section"
import { useLanguage } from "@/lib/language-context"
import {
  Activity,
  Brain,
  Droplets,
  Gauge,
  Globe2,
  Landmark,
  Layers,
  Lightbulb,
  LineChart,
  Percent,
  Shield,
  SlidersHorizontal,
  Target,
  Zap,
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
  { key: "globalmacro", icon: Activity },
  { key: "optionenhancement", icon: Percent },
  { key: "liquidity", icon: Droplets },
] as const

const benefits = [
  { key: "agility", icon: Zap },
  { key: "diversification", icon: Shield },
  { key: "innovation", icon: Lightbulb },
] as const

const dedicatedFundItems = [
  { key: "customization", icon: Target },
  { key: "expertManagement", icon: Brain },
  { key: "luxembourgAdvantage", icon: Landmark },
] as const

const strategyItems = [
  { key: "systematicOptions", icon: LineChart },
  { key: "exoticOptions", icon: Layers },
  { key: "markets", icon: Globe2 },
  { key: "leverage", icon: SlidersHorizontal },
] as const

function renderBoldText(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((segment, idx) =>
    segment.startsWith("*") && segment.endsWith("*") ? (
      <strong key={idx} className="font-semibold text-white">
        {segment.slice(1, -1)}
      </strong>
    ) : (
      <span key={idx}>{segment}</span>
    )
  )
}

export default function AifPage() {
  const { t } = useLanguage()
  const approach = useInView()
  const dedicated = useInView()
  const strategies = useInView()
  const benefitsSection = useInView()

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/luxembourg-panoramic.mp4" type="video/mp4" />
            </video>
            {/* Uniform dark overlay */}
            <div className="absolute inset-0 bg-deepblue/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6 shadow-[0_0_10px_rgba(57,114,229,0.5)]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight text-balance mb-5">
              {t("offering.aif.hero.title")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl mx-auto leading-relaxed text-pretty">
              {renderBoldText(t("offering.aif.hero.subtitle"))}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-8">
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto text-center text-pretty">
              {t("offering.aif.intro")}
            </p>
          </div>
        </section>

        {/* Approach */}
        <section ref={approach.ref as React.RefObject<HTMLElement>} className="py-20 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-6xl px-8">
            <div className="text-center mb-14">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance">
                {t("offering.aif.approach.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approachItems.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`flex flex-col items-center text-center p-8 rounded-xl border border-border bg-background transition-all duration-700 ${approach.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-deepblue text-white mb-5">
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

        {/* Dedicated Funds */}
        <section ref={dedicated.ref as React.RefObject<HTMLElement>} className="py-20 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
              <div className={`transition-all duration-700 ${dedicated.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance mb-5">
                  {t("offering.aif.dedicated.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {t("offering.aif.dedicated.desc")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {dedicatedFundItems.map(({ key, icon: Icon }, idx) => (
                  <div
                    key={key}
                    className={`rounded-lg border border-border bg-muted/20 p-6 text-center transition-all duration-700 ${dedicated.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${idx * 120}ms` }}
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-deepblue text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {t(`offering.aif.dedicated.${key}`)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                      {t(`offering.aif.dedicated.${key}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section ref={strategies.ref as React.RefObject<HTMLElement>} className="py-20 bg-muted/30 border-b border-border">
          <div className="mx-auto max-w-6xl px-8">
            <div className="text-center mb-14">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance">
                {t("offering.aif.strategies.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategyItems.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`rounded-lg border border-border bg-background p-6 text-center transition-all duration-700 ${strategies.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-hour/10 text-blue-hour">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {t(`offering.aif.strategies.${key}`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {t(`offering.aif.strategies.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-border bg-background p-7 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-deepblue text-white">
                <Gauge className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t("offering.aif.monitoring.title")}
              </h3>
              <p className="mx-auto max-w-3xl text-muted-foreground text-sm leading-relaxed text-pretty">
                {t("offering.aif.monitoring.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsSection.ref as React.RefObject<HTMLElement>} className="py-20 bg-background">
          <div className="mx-auto max-w-6xl px-8">
            <div className="text-center mb-14">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance">
                {t("offering.aif.benefits.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`group flex flex-col items-center text-center transition-all duration-700 ${benefitsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-hour/10 text-blue-hour mb-5 group-hover:scale-110 group-hover:bg-blue-hour group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t(`offering.aif.benefits.${key}`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {t(`offering.aif.benefits.${key}.desc`)}
                  </p>
                  <div className="h-1 w-12 bg-blue-hour/30 rounded-full mt-6 group-hover:w-20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCtaSection
          variant="banner"
          titleKey="contact.offering.aif.title"
          descKey="contact.offering.aif.desc"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
