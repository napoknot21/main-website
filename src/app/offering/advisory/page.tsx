"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactCtaSection from "@/components/contact-cta-section"
import { useLanguage } from "@/lib/language-context"
import { Lightbulb, Target, Rocket } from "lucide-react"

export default function AdvisoryPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-36 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/90" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
            <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight text-balance mb-4">
              {t("nav.offering.advisory")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-lg mx-auto leading-relaxed">
              {t("offering.advisory.subtitle")}
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { icon: Lightbulb, title: t("offering.advisory.card1.title"), desc: t("offering.advisory.card1.desc") },
                { icon: Target, title: t("offering.advisory.card2.title"), desc: t("offering.advisory.card2.desc") },
                { icon: Rocket, title: t("offering.advisory.card3.title"), desc: t("offering.advisory.card3.desc") },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center group">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{desc}</p>
                  <div className="h-px w-12 bg-accent/30 mt-8 group-hover:w-20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCtaSection variant="inline" />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
