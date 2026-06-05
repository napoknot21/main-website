"use client"

import Link from "next/link"
import { useState } from "react"
import dynamic from "next/dynamic"
import type { ComponentType } from "react"
import {
    ArrowRight,
    MapPin,
    Building2,
    Settings,
    BarChart2,
    FileText,
    MessageSquare,
    Layers,
    Wallet,
    Shield,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "@/components/ui/animated-section"


type OfficeId = "luxembourg" | "monaco" | "geneva"

const offices = {
    luxembourg: {
        id: "luxembourg" as OfficeId,
        nameKey: "offices.luxembourg.name",
        tagline: "offices.luxembourg.tagline",
        descKey: "offices.luxembourg.desc",
        // Luxembourg City — 49.6116, 6.1319
        lat: 49.6116,
        lng: 6.1319,
        services: [
            { icon: Shield, titleKey: "offices.luxembourg.service.aif", tagKey: "offices.luxembourg.service.aif.tag", href: "/offering/aif" },
            { icon: Settings, titleKey: "offices.luxembourg.service.dpm", tagKey: "offices.luxembourg.service.dpm.tag", href: "/offering/investment-solutions" },
            { icon: FileText, titleKey: "offices.luxembourg.service.amcdedicated", tagKey: "offices.luxembourg.service.amcdedicated.tag", href: "/offering/investment-solutions" },
            { icon: Layers, titleKey: "offices.luxembourg.service.aggregation", tagKey: "offices.luxembourg.service.aggregation.tag", href: "/offering/investment-solutions" },
            { icon: Wallet, titleKey: "offices.luxembourg.service.cash", tagKey: "offices.luxembourg.service.cash.tag", href: "/offering/investment-solutions" },
            { icon: Building2, titleKey: "offices.luxembourg.service.manco", tagKey: "offices.luxembourg.service.manco.tag", href: "/offering/manco" },
        ],
    },
    monaco: {
        id: "monaco" as OfficeId,
        nameKey: "offices.monaco.name",
        tagline: "offices.monaco.tagline",
        descKey: "offices.monaco.desc",
        // Monaco — 43.7384, 7.4246
        lat: 43.7384,
        lng: 7.4246,
        services: [
            { icon: MessageSquare, titleKey: "offices.monaco.service.advisory", tagKey: "offices.monaco.service.advisory.tag", href: "/offering/investment-solutions" },
            { icon: BarChart2, titleKey: "offices.monaco.service.amc", tagKey: "offices.monaco.service.amc.tag", href: "/offering/investment-solutions" },
        ],
    },
    geneva: {
        id: "geneva" as OfficeId,
        nameKey: "offices.geneva.name",
        tagline: "offices.geneva.tagline",
        descKey: "offices.geneva.desc",
        // Geneva, Switzerland — 46.2044, 6.1432
        lat: 46.2044,
        lng: 6.1432,
        services: [
            { icon: Building2, titleKey: "offices.geneva.service.clients", tagKey: "offices.geneva.service.clients.tag", href: "/offering/investment-solutions" },
        ],
    },
}

interface OfficePin { id: OfficeId; nameKey: string; lat: number; lng: number }
interface MapProps { activeOffice: OfficeId; onSelect: (id: OfficeId) => void; offices: OfficePin[] }

// Dynamically import the Leaflet map (no SSR — Leaflet requires window)
const OfficeMap = dynamic<MapProps>(
    () => import("./office-map-inner") as Promise<{ default: ComponentType<MapProps> }>,
    { ssr: false, loading: () => <div className="w-full h-full bg-deepblue/10 rounded-2xl animate-pulse" /> }
)

export default function OfficesSection() {
    const { t } = useLanguage()
    const [activeOffice, setActiveOffice] = useState<OfficeId>("luxembourg")
    const office = offices[activeOffice]

    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden relative z-0">
            {/* Subtle background geometry */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-hour/5 via-transparent to-transparent" />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-hour/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-screen-xl px-4 md:px-6">
                {/* Section Header */}
                <AnimatedSection>
                    <div className="mb-12 md:mb-16 lg:mb-20">
                        <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-deepblue text-balance mb-4">
                            {t("offices.title")}
                        </h2>
                        <p className="text-muted-foreground max-w-xl text-base font-light leading-relaxed">
                            {t("offices.subtitle")}
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
                    {/* Left: Map */}
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* Location Tabs */}
                            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 -mx-4 md:-mx-6 px-4 md:px-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
                                {(Object.values(offices) as typeof offices[OfficeId][]).map((o) => (
                                    <button
                                        key={o.id}
                                        onClick={() => setActiveOffice(o.id)}
                                        className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium border transition-all duration-300 whitespace-nowrap ${activeOffice === o.id
                                            ? "bg-blue-hour text-white border-blue-hour shadow-lg shadow-blue-hour/20"
                                            : "bg-transparent text-foreground/60 border-border hover:border-blue-hour/40 hover:text-foreground"
                                            }`}
                                    >
                                        <MapPin className="h-3.5 w-3.5" />
                                        {t(o.nameKey)}
                                    </button>
                                ))}
                            </div>

                            {/* Real Map */}
                            <div className="rounded-2xl overflow-hidden border border-border h-[300px] md:h-[360px] lg:h-[420px] relative z-0 shadow-sm">
                                <OfficeMap
                                    activeOffice={activeOffice}
                                    onSelect={setActiveOffice}
                                    offices={Object.values(offices).map(({ id, nameKey, lat, lng }) => ({ id, nameKey, lat, lng }))}
                                />
                            </div>

                            {/* Caption */}
                            <div key={activeOffice} className="animate-fade-in-up">
                                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm">
                                    {t(office.descKey)}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: Services Panel */}
                    <AnimatedSection delay={0.15}>
                        <div key={activeOffice} className="animate-fade-in-up">
                            <div className="mb-4 md:mb-6">
                                <span className="text-blue-hour text-xs font-bold tracking-widest uppercase">
                                    {t(office.nameKey)}
                                </span>
                                <h3 className="text-deepblue text-2xl md:text-3xl font-serif font-semibold mt-1">
                                    {t(office.tagline)}
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 md:gap-3">
                                {office.services.map((svc, i) => {
                                    const Icon = svc.icon
                                    return (
                                        <Link
                                            key={svc.titleKey}
                                            href={svc.href}
                                            className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-blue-hour/5 hover:border-blue-hour/30 transition-all duration-300 shadow-sm hover:shadow-md"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-hour/10 text-blue-hour group-hover:bg-blue-hour group-hover:text-white transition-all duration-300 shrink-0">
                                                <Icon className="h-[18px] w-[18px]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="block text-[10px] font-bold tracking-widest uppercase text-blue-hour/70 mb-0.5">
                                                    {t(svc.tagKey)}
                                                </span>
                                                <span className="block text-sm font-medium text-foreground truncate">
                                                    {t(svc.titleKey)}
                                                </span>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-blue-hour group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                                        </Link>
                                    )
                                })}
                            </div>

                            {/* CTA */}
                            <div className="mt-8">
                                <Link
                                    href={
                                        activeOffice === "monaco" || activeOffice === "geneva"
                                            ? "/offering/investment-solutions"
                                            : "/offering/aif"
                                    }
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-hour hover:text-blue-hour/80 transition-colors duration-200 group"
                                >
                                    {t("offices.cta")}
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
