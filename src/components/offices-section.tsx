"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, MapPin, Building2, TrendingUp, Settings, BarChart2, FileText, MessageSquare, Layers, Wallet, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "@/components/ui/animated-section"

type OfficeId = "luxembourg" | "monaco"

const offices = {
    luxembourg: {
        id: "luxembourg" as OfficeId,
        name: "Luxembourg",
        tagline: "offices.luxembourg.tagline",
        descKey: "offices.luxembourg.desc",
        coords: { x: 51.5, y: 34 }, // % within SVG viewbox
        services: [
            {
                icon: Shield,
                titleKey: "offices.luxembourg.service.aif",
                tagKey: "offices.luxembourg.service.aif.tag",
                href: "/offering/aif",
            },
            {
                icon: Settings,
                titleKey: "offices.luxembourg.service.dpm",
                tagKey: "offices.luxembourg.service.dpm.tag",
                href: "/offering/investment-solutions",
            },
            {
                icon: FileText,
                titleKey: "offices.luxembourg.service.amcdedicated",
                tagKey: "offices.luxembourg.service.amcdedicated.tag",
                href: "/offering/investment-solutions",
            },
            {
                icon: Layers,
                titleKey: "offices.luxembourg.service.aggregation",
                tagKey: "offices.luxembourg.service.aggregation.tag",
                href: "/offering/investment-solutions",
            },
            {
                icon: Wallet,
                titleKey: "offices.luxembourg.service.cash",
                tagKey: "offices.luxembourg.service.cash.tag",
                href: "/offering/investment-solutions",
            },
            {
                icon: Building2,
                titleKey: "offices.luxembourg.service.manco",
                tagKey: "offices.luxembourg.service.manco.tag",
                href: "/offering/manco",
            },
        ],
    },
    monaco: {
        id: "monaco" as OfficeId,
        name: "Monaco",
        tagline: "offices.monaco.tagline",
        descKey: "offices.monaco.desc",
        coords: { x: 53.5, y: 43.5 }, // % within SVG viewbox
        services: [
            {
                icon: MessageSquare,
                titleKey: "offices.monaco.service.advisory",
                tagKey: "offices.monaco.service.advisory.tag",
                href: "/offering/investment-solutions",
            },
            {
                icon: BarChart2,
                titleKey: "offices.monaco.service.amc",
                tagKey: "offices.monaco.service.amc.tag",
                href: "/offering/investment-solutions",
            },
        ],
    },
}

// Minimalist Europe SVG paths (simplified outlines)
function EuropeMap({ activeOffice, onSelect }: { activeOffice: OfficeId; onSelect: (id: OfficeId) => void }) {
    return (
        <div className="relative w-full h-full">
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 0 20px rgba(57,114,229,0.08))" }}
            >
                {/* Simplified Europe coastline – decorative only */}
                <path
                    d="M 20 15 C 24 12 32 8 40 10 C 48 11 50 8 56 9 C 62 10 68 8 72 12
             C 76 15 80 14 82 18 C 84 22 82 26 80 28 C 78 30 79 34 78 37
             C 77 40 75 44 74 47 C 72 52 70 55 65 57 C 61 59 58 62 55 65
             C 52 68 50 72 47 74 C 44 76 40 75 37 73 C 33 71 30 66 28 63
             C 25 59 22 56 20 52 C 17 48 15 43 15 38 C 14 33 15 27 17 22 Z"
                    fill="none"
                    stroke="rgba(57,114,229,0.15)"
                    strokeWidth="0.4"
                />
                {/* Grid lines for depth */}
                {[20, 30, 40, 50, 60, 70, 80].map((y) => (
                    <line key={`h-${y}`} x1="10" y1={y} x2="90" y2={y} stroke="rgba(57,114,229,0.06)" strokeWidth="0.3" />
                ))}
                {[20, 30, 40, 50, 60, 70, 80].map((x) => (
                    <line key={`v-${x}`} x1={x} y1="10" x2={x} y2="90" stroke="rgba(57,114,229,0.06)" strokeWidth="0.3" />
                ))}

                {/* Pulsing rings for each office */}
                {(Object.values(offices) as typeof offices[OfficeId][]).map((office) => {
                    const isActive = activeOffice === office.id
                    return (
                        <g key={office.id} style={{ cursor: "pointer" }} onClick={() => onSelect(office.id)}>
                            {/* Outer pulse ring (visible when active) */}
                            {isActive && (
                                <>
                                    <circle
                                        cx={office.coords.x}
                                        cy={office.coords.y}
                                        r="5"
                                        fill="none"
                                        stroke="rgba(57,114,229,0.25)"
                                        strokeWidth="0.6"
                                        className="animate-ping"
                                        style={{ animationDuration: "2s" }}
                                    />
                                    <circle
                                        cx={office.coords.x}
                                        cy={office.coords.y}
                                        r="3.5"
                                        fill="none"
                                        stroke="rgba(57,114,229,0.4)"
                                        strokeWidth="0.5"
                                    />
                                </>
                            )}
                            {/* Main dot */}
                            <circle
                                cx={office.coords.x}
                                cy={office.coords.y}
                                r={isActive ? "2" : "1.5"}
                                fill={isActive ? "#3972E5" : "rgba(57,114,229,0.4)"}
                                style={{ transition: "all 300ms ease" }}
                            />
                            {/* Label */}
                            <text
                                x={office.coords.x + 2.5}
                                y={office.coords.y + 0.6}
                                fontSize="2.5"
                                fill={isActive ? "#3972E5" : "rgba(57,114,229,0.5)"}
                                style={{ transition: "fill 300ms ease", userSelect: "none" }}
                                fontWeight={isActive ? "700" : "400"}
                            >
                                {office.name}
                            </text>
                        </g>
                    )
                })}
            </svg>
        </div>
    )
}

export default function OfficesSection() {
    const { t } = useLanguage()
    const [activeOffice, setActiveOffice] = useState<OfficeId>("luxembourg")

    const office = offices[activeOffice]

    return (
        <section className="py-24 md:py-32 bg-deepblue overflow-hidden relative">
            {/* Subtle background geometry */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-hour/5 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-px h-3/4 bg-gradient-to-t from-transparent via-blue-hour/20 to-transparent" />
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
                    {/* Left: Map + Location Tabs */}
                    <AnimatedSection>
                        <div className="flex flex-col gap-8">
                            {/* Location Tab Switcher */}
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

                            {/* Map */}
                            <div className="rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden p-4 aspect-square max-w-[360px] mx-auto lg:mx-0">
                                <EuropeMap activeOffice={activeOffice} onSelect={setActiveOffice} />
                            </div>

                            {/* Office caption */}
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
                                    href={activeOffice === "monaco" ? "/offering/investment-solutions" : "/offering"}
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
