"use client"

import React from "react"

import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"
import { Users, TrendingUp, Calendar, Building2, Briefcase, Globe } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  value: number
  prefix?: string
  suffix: string
  labelKey: string
}

function AnimatedNumber({ value, prefix = "", suffix, inView }: { value: number; prefix?: string; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * value)
      setDisplay(start)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, value])

  return (
    <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tabular-nums">
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}

export default function InBriefSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const stats: StatItem[] = [
    {
      icon: <Users className="h-6 w-6" />,
      value: 85,
      suffix: "+",
      labelKey: "brief.employees",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: 4,
      prefix: "",
      suffix: ".2B",
      labelKey: "brief.aum",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: 12,
      suffix: ".8%",
      labelKey: "brief.performance",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      value: 18,
      suffix: "+",
      labelKey: "brief.years",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      value: 320,
      suffix: "+",
      labelKey: "brief.clients",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: 3,
      suffix: "",
      labelKey: "brief.offices",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="brief"
      className="py-24 md:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block h-px w-12 bg-accent mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary text-balance">
            {t("brief.title")}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat) => (
            <div
              key={stat.labelKey}
              className={`flex flex-col items-center text-center gap-3 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 text-accent mb-2">
                {stat.icon}
              </div>
              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                inView={inView}
              />
              <span className="text-sm text-muted-foreground tracking-wide uppercase">
                {t(stat.labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
