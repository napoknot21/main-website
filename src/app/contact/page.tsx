"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactForm from "@/components/contact-form"
import { useLanguage } from "@/lib/language-context"
import { structuredText } from "@/lib/structured-translations"

export default function ContactPage() {
  const { locale, t } = useLanguage()
  const s = (source: string) => structuredText(locale, source)

  return (
    <>
      <Header />
      <main>
        {/* Contact Hero - Smaller banner */}
        <section className="relative pt-36 pb-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/paris.png"
              alt="Contact Heroics Capital Partners"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            {/* Uniform dark overlay */}
            <div className="absolute inset-0 bg-deepblue/80" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
            <div className="max-w-4xl animate-fade-in-up text-left">
              <div className="h-1 w-12 bg-blue-hour rounded-full mb-6 shadow-[0_0_10px_rgba(57,114,229,0.5)]" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight text-balance mb-5">
                {t("contact.page.title")}
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-primary-foreground/70 text-pretty sm:text-base">
                {t("contact.page.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
            <div className="rounded-xl border border-border bg-background p-6 md:p-8">
              <ContactForm />
            </div>
            <aside className="rounded-xl border border-border bg-muted/30 p-6" aria-labelledby="routing-title">
              <h2 id="routing-title" className="text-lg font-semibold text-foreground">{s("Lead routing logic")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">{s("Liquid alternatives")}</strong> → {s("Luxembourg")}</li>
                <li><strong className="text-foreground">AIFM</strong> → {s("Luxembourg")}</li>
                <li><strong className="text-foreground">{s("Structured products")}</strong> → {s("Monaco")}</li>
                <li><strong className="text-foreground">{s("Advisory & DPM")}</strong> → {s("profile and country")}</li>
                <li><strong className="text-foreground">AMC</strong> → {s("structure and mandate")}</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
