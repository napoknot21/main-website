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
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
            <div className="max-w-4xl animate-fade-in-up text-left">
              <div className="h-1 w-12 bg-blue-hour rounded-full mb-6 shadow-[0_0_10px_rgba(57,114,229,0.5)]" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight text-balance mb-5">
                {t("news.page.title")}
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-primary-foreground/70 text-pretty sm:text-base">
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
