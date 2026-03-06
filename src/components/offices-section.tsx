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
        name: "Luxembourg",
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
        name: "Monaco",
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
        name: "Geneva",
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

interface OfficePin { id: OfficeId; name: string; lat: number; lng: number }
interface MapProps { activeOffice: OfficeId; onSelect: (id: OfficeId) => void; offices: OfficePin[] }

// Dynamically import the Leaflet map (no SSR — Leaflet requires window)
const OfficeMap = dynamic<MapProps>(
    () => import("./office-map-inner") as Promise<{ default: ComponentType<MapProps> }>,
    { ssr: false, loading: () => <div className="w-full h-full bg-deepblue/60 rounded-2xl animate-pulse" /> }
)

export default function OfficesSection() {
    const { t } = useLanguage()
    const [activeOffice, setActiveOffice] = useState<OfficeId>("luxembourg")
    const office = offices[activeOffice]

    return (
        <section className="py-24 md:py-32 bg-deepblue overflow-hidden relative">
            {/* Subtle background geometry */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-hour/5 via-transparent to-transparent" />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-hour/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-screen-xl px-6">
                {/* Section Header */}
                <AnimatedSection>
                    <div className="mb-16 md:mb-20">
                        <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-balance mb-4">
                            {t("offices.title")}
                        </h2>
                        <p className="text-white/50 max-w-xl text-base font-light leading-relaxed">
                            {t("offices.subtitle")}
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left: Map */}
                    <AnimatedSection>
                        <div className="flex flex-col gap-6">
                            {/* Location Tabs */}
                            <div className="flex gap-3">
                                {(Object.values(offices) as typeof offices[OfficeId][]).map((o) => (
                                    <button
                                        key={o.id}
                                        onClick={() => setActiveOffice(o.id)}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${activeOffice === o.id
                                            ? "bg-blue-hour text-white border-blue-hour shadow-lg shadow-blue-hour/20"
                                            : "bg-transparent text-white/50 border-white/10 hover:border-blue-hour/40 hover:text-white/80"
                                            }`}
                                    >
                                        <MapPin className="h-3.5 w-3.5" />
                                        {o.name}
                                    </button>
                                ))}
                            </div>

                            {/* Real Map */}
                            <div className="rounded-2xl overflow-hidden border border-white/8 h-[360px] md:h-[420px]">
                                <OfficeMap
                                    activeOffice={activeOffice}
                                    onSelect={setActiveOffice}
                                    offices={Object.values(offices).map(({ id, name, lat, lng }) => ({ id, name, lat, lng }))}
                                />
                            </div>

                            {/* Caption */}
                            <div key={activeOffice} className="animate-fade-in-up">
                                <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
                                    {t(office.descKey)}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: Services Panel */}
                    <AnimatedSection delay={0.15}>
                        <div key={activeOffice} className="animate-fade-in-up">
                            <div className="mb-6">
                                <span className="text-blue-hour text-xs font-bold tracking-widest uppercase">
                                    {office.name}
                                </span>
                                <h3 className="text-white text-2xl md:text-3xl font-serif font-semibold mt-1">
                                    {t(office.tagline)}
                                </h3>
                            </div>

                            <div className="flex flex-col gap-3">
                                {office.services.map((svc, i) => {
                                    const Icon = svc.icon
                                    return (
                                        <Link
                                            key={svc.titleKey}
                                            href={svc.href}
                                            className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-blue-hour/10 hover:border-blue-hour/30 transition-all duration-300"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-hour/10 text-blue-hour group-hover:bg-blue-hour group-hover:text-white transition-all duration-300 shrink-0">
                                                <Icon className="h-[18px] w-[18px]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="block text-[10px] font-bold tracking-widest uppercase text-blue-hour/70 mb-0.5">
                                                    {t(svc.tagKey)}
                                                </span>
                                                <span className="block text-sm font-medium text-white/90 truncate">
                                                    {t(svc.titleKey)}
                                                </span>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-blue-hour group-hover:translate-x-1 transition-all duration-300 shrink-0" />
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
                                            : "/offering"
                                    }
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-hour hover:text-white transition-colors duration-200 group"
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
