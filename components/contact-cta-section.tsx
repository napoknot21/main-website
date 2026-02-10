"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"

export default function ContactCtaSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-primary-foreground to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6">
          <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-8" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold text-balance mb-6">
          {t("contact.title")}
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/65 leading-relaxed mb-10 max-w-xl mx-auto text-pretty">
          {t("contact.description")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary text-sm font-medium px-8 py-3.5 rounded-md hover:bg-primary-foreground/90 transition-all duration-300 group"
        >
          {t("contact.cta")}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
