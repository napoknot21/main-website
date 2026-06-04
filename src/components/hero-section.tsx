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
          <source src="/videos/city-skyscrapers-at-night-2023-11-27-05-12-41-utc.mp4" type="video/mp4" />
          {/* Fallback: show poster image if video not found */}
        </video>
        {/* Overlays reflecting the 'Blue Hour' and 'Deep Blue' premium aesthetic */}
        <div className="absolute inset-0 bg-deepblue/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tr from-deepblue via-deepblue/60 to-blue-hour/20" />

        {/* Ascendant geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] bg-blue-hour/40 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-[20%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-blue-hour to-transparent -rotate-12 transform-gpu" />
            <div className="absolute top-[40%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-blue-hour to-transparent -rotate-12 transform-gpu opacity-50" />
            <div className="absolute top-[60%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-blue-hour to-transparent -rotate-12 transform-gpu" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="inline-block h-1 w-20 bg-blue-hour rounded-full mb-8 shadow-[0_0_15px_rgba(57,114,229,0.5)]" />
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-semibold tracking-tight text-balance leading-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-mist/90 max-w-2xl mx-auto leading-relaxed mb-10 text-pretty font-light">
            {t("hero.subtitle")}
          </p>
          <a
            href="#brief"
            className="inline-flex items-center gap-2 bg-blue-hour text-white text-sm font-medium px-8 py-3.5 rounded-md hover:bg-turquoise hover:text-deepblue transition-all duration-500 shadow-xl group"
          >
            {t("hero.cta")}
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#brief"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-blue-hour transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
