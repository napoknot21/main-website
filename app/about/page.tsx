"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { useLanguage } from "@/lib/language-context"
import { Eye, Target, Rocket } from "lucide-react"

const values = [
  {
    icon: Eye,
    titleKey: "about.vision.title",
    descKey: "about.vision.desc",
  },
  {
    icon: Target,
    titleKey: "about.mission.title",
    descKey: "about.mission.desc",
  },
  {
    icon: Rocket,
    titleKey: "about.ambition.title",
    descKey: "about.ambition.desc",
  },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main>
        {/* About Hero - Smaller banner */}
        <section className="relative h-[40vh] min-h-[280px] max-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-hero.jpg"
              alt="About Heroics Capital Partners"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/75" />
          </div>
          <div className="relative z-10 text-center px-6">
            <div className="animate-fade-in-up">
              <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-6" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight text-balance">
                {t("about.page.title")}
              </h1>
              <p className="text-sm sm:text-base text-primary-foreground/60 mt-4 max-w-lg mx-auto leading-relaxed">
                {t("about.page.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            {/* Section heading */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block h-px w-12 bg-accent mb-6" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
                {t("about.values.title")}
              </h2>
            </div>

            {/* Values cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {values.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.titleKey}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {t(item.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {t(item.descKey)}
                    </p>

                    {/* Accent line */}
                    <div className="h-px w-12 bg-accent/30 mt-8 group-hover:w-20 transition-all duration-300" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
