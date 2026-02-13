"use client"

import React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import type { Locale } from "@/lib/translations"
import { ChevronDown, Globe, Menu, X, Users } from "lucide-react"

const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
  it: "IT",
  pt: "PT",
}

const countries = [
  { key: "client.luxembourg", value: "luxembourg" },
  { key: "client.monaco", value: "monaco" },
  { key: "client.france", value: "france" },
]

const profiles = [
  { key: "client.professional", value: "professional" },
  { key: "client.non_professional", value: "non_professional" },
]

function useClickOutside(ref: React.RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [ref, onClose])
}

export default function Header() {
  const { locale, setLocale, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [clientModalOpen, setClientModalOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedProfile, setSelectedProfile] = useState(profiles[0])
  const [tempCountry, setTempCountry] = useState(countries[0])
  const [tempProfile, setTempProfile] = useState(profiles[0])
  const [scrolled, setScrolled] = useState(false)

  const langRef = useRef<HTMLDivElement>(null)

  useClickOutside(langRef, () => setLangOpen(false))

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Close modal on ESC
  useEffect(() => {
    if (!clientModalOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleModalCancel()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientModalOpen])

  function openClientModal() {
    setTempCountry(selectedCountry)
    setTempProfile(selectedProfile)
    setClientModalOpen(true)
    setLangOpen(false)
  }

  function handleModalSave() {
    setSelectedCountry(tempCountry)
    setSelectedProfile(tempProfile)
    setClientModalOpen(false)
  }

  function handleModalCancel() {
    setClientModalOpen(false)
  }

  const navItems = [
    { key: "nav.about", href: "/about" },
    { key: "nav.offering", href: "#services" },
    { key: "nav.news", href: "/news" },
    { key: "nav.contact", href: "/contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background shadow-lg"
            : "bg-primary"
        }`}
      >
        {/* Top bar */}
        <div className="relative mx-auto max-w-7xl flex items-center justify-end px-6 py-1.5 gap-5">
          {/* Client Selector - opens modal */}
          <button
            onClick={openClientModal}
            className={`flex items-center gap-1.5 text-xs transition-colors ${
              scrolled
                ? "text-foreground/60 hover:text-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
            aria-label={t("client.selector")}
          >
            <Users className="h-3 w-3" />
            <span>
              {t(selectedCountry.key)} &middot; {t(selectedProfile.key)}
            </span>
            <ChevronDown className="h-3 w-3" />
          </button>

          {/* Separator */}
          <div className={`h-3 w-px transition-colors duration-500 ${scrolled ? "bg-border" : "bg-primary-foreground/15"}`} />

          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => {
                setLangOpen(!langOpen)
              }}
              className={`flex items-center gap-1.5 text-xs transition-colors ${
                scrolled
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
              aria-label="Language"
            >
              <Globe className="h-3 w-3" />
              <span>{localeLabels[locale]}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-background rounded-md shadow-xl border border-border py-1 min-w-[80px] z-50">
                {(Object.keys(localeLabels) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l)
                      setLangOpen(false)
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                      locale === l
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Separator */}
          <div className={`h-3 w-px transition-colors duration-500 ${scrolled ? "bg-border" : "bg-primary-foreground/15"}`} />

          {/* Login */}
          <a
            href="https://investors.heroics-capital.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs transition-colors ${
              scrolled
                ? "text-foreground/60 hover:text-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
            aria-label="Login"
          >
            <Image
              src="/images/login-icon.jpg"
              alt="Login"
              width={18}
              height={18}
              className="rounded-full"
            />
            <span className="hidden sm:inline">Login</span>
          </a>
        </div>

        {/* Main nav */}
        <div className="relative mx-auto max-w-7xl flex items-center justify-between px-6 py-3.5">
          {/* Logo - spans full header height using negative margin to overlap into top bar */}
          <Link href="/" className="relative flex items-center group z-10" aria-label="Heroics Capital home">
            <div className="relative -mt-8">
              <Image
                src={scrolled ? "/images/heroics-logo-rgb.png" : "/images/heroics-logo-rgb blanc.png"}
                alt="Heroics Capital Partners"
                width={180}
                height={72}
                className="h-[72px] w-auto object-contain transition-opacity duration-500"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all duration-500 ${
                    scrolled
                      ? "text-foreground/65 hover:text-foreground after:bg-foreground"
                      : "text-primary-foreground/75 hover:text-primary-foreground after:bg-primary-foreground"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className={`text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all duration-500 ${
                    scrolled
                      ? "text-foreground/65 hover:text-foreground after:bg-foreground"
                      : "text-primary-foreground/75 hover:text-primary-foreground after:bg-primary-foreground"
                  }`}
                >
                  {t(item.key)}
                </a>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors duration-500 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className={`md:hidden transition-colors duration-500 ${
            scrolled ? "bg-background" : "bg-primary"
          }`}>
            <nav className="flex flex-col px-6 py-4 gap-3" aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm transition-colors py-2 ${
                      scrolled ? "text-foreground/65 hover:text-foreground" : "text-primary-foreground/75 hover:text-primary-foreground"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ) : (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm transition-colors py-2 ${
                      scrolled ? "text-foreground/65 hover:text-foreground" : "text-primary-foreground/75 hover:text-primary-foreground"
                    }`}
                  >
                    {t(item.key)}
                  </a>
                )
              )}

              {/* Mobile client selector - opens modal */}
              <div className={`border-t pt-3 mt-2 ${
                scrolled ? "border-border" : "border-primary-foreground/8"
              }`}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openClientModal()
                  }}
                  className={`flex items-center gap-2 text-xs py-2 transition-colors ${
                    scrolled ? "text-foreground/60 hover:text-foreground" : "text-primary-foreground/60 hover:text-primary-foreground"
                  }`}
                >
                  <Users className="h-3.5 w-3.5" />
                  <span>{t(selectedCountry.key)} &middot; {t(selectedProfile.key)}</span>
                </button>
              </div>

              {/* Mobile language */}
              <div className={`border-t pt-3 mt-2 ${scrolled ? "border-border" : "border-primary-foreground/8"}`}>
                <p className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${
                  scrolled ? "text-foreground/40" : "text-primary-foreground/40"
                }`}>
                  Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(localeLabels) as Locale[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLocale(l)}
                      className={`text-xs px-3 py-1.5 rounded transition-colors ${
                        locale === l
                          ? scrolled ? "bg-accent/10 text-foreground font-medium" : "bg-primary-foreground/15 text-primary-foreground font-medium"
                          : scrolled ? "text-foreground/50 hover:text-foreground" : "text-primary-foreground/50 hover:text-primary-foreground"
                      }`}
                    >
                      {localeLabels[l]}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Client Profile Modal */}
      {clientModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={t("client.selector")}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleModalCancel}
          />

          {/* Modal card */}
          <div className="relative bg-background rounded-xl shadow-2xl border border-border w-full max-w-md mx-4 p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground">{t("client.selector")}</h2>
              </div>
            </div>

            {/* Country selection */}
            <div className="mb-5">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2.5">
                {t("client.country")}
              </p>
              <div className="flex flex-col gap-1">
                {countries.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setTempCountry(c)}
                    className={`text-left px-4 py-2.5 text-sm rounded-lg transition-colors ${
                      tempCountry.value === c.value
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {t(c.key)}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-5" />

            {/* Profile selection */}
            <div className="mb-6">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2.5">
                {t("client.profile")}
              </p>
              <div className="flex flex-col gap-1">
                {profiles.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setTempProfile(p)}
                    className={`text-left px-4 py-2.5 text-sm rounded-lg transition-colors ${
                      tempProfile.value === p.value
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {t(p.key)}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-3 border-t border-border">
              <button
                onClick={handleModalCancel}
                className="flex-1 text-center text-sm font-medium text-foreground/70 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                {t("client.cancel")}
              </button>
              <button
                onClick={handleModalSave}
                className="flex-1 text-center text-sm font-medium bg-primary text-primary-foreground py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {t("client.save")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
