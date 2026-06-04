"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactCtaSection from "@/components/contact-cta-section"
import { NewsGrid } from "@/components/news-section"
import { useLanguage } from "@/lib/language-context"

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-36 pb-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pawel.png"
              alt="News"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-deepblue/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="animate-fade-in-up">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6 shadow-[0_0_10px_rgba(57,114,229,0.5)]" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight text-balance mb-5">
                {t("news.page.title")}
              </h1>
              <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl mx-auto leading-relaxed text-pretty">
                {t("news.page.subtitle")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <NewsGrid />
          </div>
        </section>

        <ContactCtaSection
          variant="banner"
          titleKey="contact.news.title"
          descKey="contact.news.desc"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
