"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "@/components/ui/animated-section"

const partners = [
    "altarius.png",
    "apex.png",
    "bloomberg.png",
    "bnp-paribas.png",
    "credit-agricole-cib.png",
    "dapm.png",
    "deutsche-bank.png",
    "goldman-sachs.png",
    "ice.png",
    "jp-morgan.png",
    "kepler.svg",
    "morgan-stanley.png",
    "quintet-private-bank.png",
    "saxo-bank.png",
    "ubs.png",
    "vcl.png",
]

export default function PartnersSection() {
    const { t } = useLanguage()

    return (
        <section className="py-20 bg-muted/30 border-t border-border overflow-hidden">
            <div className="mx-auto max-w-screen-2xl px-6">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground/60 mb-2">
                        {t("about.partners.subtitle")}
                    </p>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                        {t("about.partners.title")}
                    </h2>
                </div>

                <AnimatedSection>
                    <div className="relative flex overflow-hidden group">
                        {/* 
              Continuous Marquee animation. We duplicate the list to ensure 
              seamless infinite scrolling. 
            */}
                        <div className="animate-marquee py-6 flex flex-nowrap shrink-0 gap-12 sm:gap-16 pr-12 sm:pr-16 items-center min-w-full">
                            {partners.map((partner, idx) => (
                                <div key={idx} className="relative h-12 w-32 sm:h-16 sm:w-40 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 filter shrink-0">
                                    <Image
                                        src={`/images/partners/${partner}`}
                                        alt="Partner Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Duplicate for seamless loop */}
                        <div className="animate-marquee py-6 flex flex-nowrap shrink-0 gap-12 sm:gap-16 pr-12 sm:pr-16 items-center min-w-full" aria-hidden="true">
                            {partners.map((partner, idx) => (
                                <div key={`dup-${idx}`} className="relative h-12 w-32 sm:h-16 sm:w-40 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 filter shrink-0">
                                    <Image
                                        src={`/images/partners/${partner}`}
                                        alt="Partner Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
