"use client"

import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function PartnersSection() {
    const { t } = useLanguage()

    return (
        <section className="py-20 bg-muted/30 border-t border-border overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <div className="text-left mb-12">
                    <p className="text-sm font-medium tracking-widest uppercase text-blue-hour mb-2">
                        {t("about.partners.subtitle")}
                    </p>
                    <h2 className="font-serif text-2xl font-semibold text-deepblue">
                        {t("about.partners.title")}
                    </h2>
                </div>

                <AnimatedSection>
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-4 rounded-lg border border-border bg-background px-8 py-10">
                        <div className="font-serif text-6xl md:text-7xl font-semibold text-deepblue tabular-nums">
                            16+
                        </div>
                        <p className="text-sm md:text-base uppercase tracking-wide text-muted-foreground">
                            {t("about.partners.count")}
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
