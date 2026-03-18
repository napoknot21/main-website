"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactCtaSection from "@/components/contact-cta-section"
import TeamSection from "@/components/team-section"
import PartnersSection from "@/components/partners-section"
import { useLanguage } from "@/lib/language-context"
import {
  Eye,
  Target,
  Rocket,
  Sparkles,
  TrendingUp,
  FlaskConical,
  Search,
  ShieldCheck,
  Zap,
  Code,
  Calendar,
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

const values = [
  { icon: Eye, titleKey: "about.vision.title", descKey: "about.vision.desc" },
  { icon: Target, titleKey: "about.mission.title", descKey: "about.mission.desc" },
  { icon: Rocket, titleKey: "about.ambition.title", descKey: "about.ambition.desc" },
  { icon: Sparkles, titleKey: "about.culture.title", descKey: "about.culture.desc" },
]

const skills = [
  { key: "trading", icon: TrendingUp },
  { key: "quant", icon: FlaskConical },
  { key: "research", icon: Search },
  { key: "risk", icon: ShieldCheck },
] as const

const milestones = [
  { key: "2023", year: "2023" },
  { key: "2024a", year: "2024" },
  { key: "2024b", year: "2024" },
  { key: "2024c", year: "2024" },
  { key: "2024d", year: "2024" },
] as const

export default function AboutPage() {
  const { t } = useLanguage()
  const visionSection = useInView()
  const valuesSection = useInView()
  const skillsSection = useInView()
  const milestonesSection = useInView()

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Monaco.jpg"
              alt="About Heroics Capital Partners"
              fill
              className="object-cover"
              priority
            />
            {/* Uniform dark overlay */}
            <div className="absolute inset-0 bg-deepblue/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="animate-fade-in-up">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6 shadow-[0_0_10px_rgba(57,114,229,0.5)]" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight text-balance mb-5">
                {t("about.page.title")}
              </h1>
              <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl mx-auto leading-relaxed text-pretty">
                {t("about.page.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Heroics Vision */}
        <section ref={visionSection.ref as React.RefObject<HTMLElement>} className="py-20 md:py-28 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-4xl px-6">
            <div className={`text-center transition-all duration-1000 ${visionSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance mb-8">
                {t("about.heroics_vision.title")}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                {t("about.heroics_vision.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesSection.ref as React.RefObject<HTMLElement>} className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance">
                {t("about.values.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.titleKey}
                    className={`flex flex-col items-center text-center group transition-all duration-700 ${valuesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    style={{ transitionDelay: `${idx * 120}ms` }}
                  >
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-deepblue text-white mb-6 group-hover:scale-110 group-hover:bg-blue-hour transition-all duration-500 shadow-md">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty text-sm">
                      {t(item.descKey)}
                    </p>
                    <div className="h-px w-12 bg-accent/30 mt-8 group-hover:w-20 transition-all duration-300" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Major Skills */}
        <section ref={skillsSection.ref as React.RefObject<HTMLElement>} className="py-20 md:py-28 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance">
                {t("about.skills.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {skills.map(({ key, icon: Icon }, idx) => (
                <div
                  key={key}
                  className={`flex items-start gap-4 p-6 rounded-xl border border-border bg-background hover:border-blue-hour/30 hover:shadow-sm transition-all duration-700 ${skillsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center justify-center h-11 w-11 rounded-full bg-blue-hour/10 text-blue-hour shrink-0 mt-0.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      {t(`about.skills.${key}`)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`about.skills.${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section ref={milestonesSection.ref as React.RefObject<HTMLElement>} className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deepblue text-balance">
                {t("about.milestones.title")}
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              <div className="flex flex-col gap-12">
                {milestones.map(({ key, year }, idx) => {
                  const isLeft = idx % 2 === 0
                  return (
                    <div
                      key={key}
                      className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ${milestonesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                      style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                      {/* Dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center h-12 w-12 rounded-full bg-deepblue text-white border-4 border-background shadow-sm hover:scale-110 hover:bg-blue-hour transition-all duration-300">
                        <Calendar className="h-5 w-5" />
                      </div>

                      {/* Content card */}
                      <div
                        className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                          }`}
                      >
                        <span className="text-[10px] font-bold tracking-widest uppercase text-accent">
                          {year}
                        </span>
                        <h3 className="text-base font-semibold text-foreground mt-1 mb-2">
                          {t(`about.milestones.${key}.title`)}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {t(`about.milestones.${key}.desc`)}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <TeamSection />
        <PartnersSection />

        <ContactCtaSection
          variant="banner"
          titleKey="contact.about.title"
          descKey="contact.about.desc"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
