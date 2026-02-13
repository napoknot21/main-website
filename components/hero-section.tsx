"use client"

import { useLanguage } from "@/lib/language-context"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video (replaces static image) */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero.jpg"
          aria-hidden="true"
        >
          {/* Primary source — replace src with actual video path when available */}
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Fallback: show poster image if video not found */}
        </video>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <div className="inline-block h-px w-16 bg-primary-foreground/40 mb-8" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold tracking-tight text-balance leading-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
            {t("hero.subtitle")}
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground text-sm px-8 py-3 rounded-sm hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            {t("hero.cta")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#brief"
          className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
