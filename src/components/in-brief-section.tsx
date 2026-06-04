"use client"

import React from "react"

import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"
import { Users, TrendingUp, Calendar, Banknote, Globe, Award, Shield, Briefcase, Activity } from "lucide-react"

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
    <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-deepblue tabular-nums tracking-tight">
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
      value: 15,
      suffix: "",
      labelKey: "brief.staff",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: 1,
      suffix: "",
      labelKey: "brief.hedge_fund",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: 1,
      suffix: "",
      labelKey: "brief.dedicated_fund",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: 400,
      suffix: "M+",
      labelKey: "brief.aum",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      value: 20,
      prefix: "+",
      suffix: "%",
      labelKey: "brief.performance",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: 7,
      suffix: "",
      labelKey: "brief.certificates",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      value: 20,
      suffix: "+",
      labelKey: "brief.years",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: 2,
      suffix: "",
      labelKey: "brief.entities",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: 6,
      suffix: "",
      labelKey: "brief.countries",
    },
    {
      icon: <Banknote className="h-6 w-6" />,
      value: 16,
      suffix: "",
      labelKey: "brief.banks",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="brief"
      className="min-h-screen py-20 md:py-24 bg-background flex items-center"
    >
      <div className="mx-auto max-w-screen-2xl px-6">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-deepblue text-balance">
            {t("brief.title")}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.labelKey}
              className={`flex flex-col items-center text-center gap-3 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-hour/10 text-blue-hour mb-2">
                {stat.icon}
              </div>
              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                inView={inView}
              />
              <span className="max-w-[15rem] text-sm md:text-base text-muted-foreground tracking-wide uppercase leading-snug">
                {t(stat.labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
