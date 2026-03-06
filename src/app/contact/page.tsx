"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactForm from "@/components/contact-form"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main>
        {/* Contact Hero - Smaller banner */}
        <section className="relative h-[40vh] min-h-[280px] max-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-hero.jpg"
              alt="Contact Heroics Capital Partners"
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
                {t("contact.page.title")}
              </h1>
              <p className="text-sm sm:text-base text-primary-foreground/60 mt-4 max-w-lg mx-auto">
                {t("contact.page.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-6">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
