"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Linkedin, ExternalLink, MapPin, Phone, Mail, Twitter } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1 - Luxembourg Office */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-primary-foreground">
              {t("footer.lux.title")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/55">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>{t("footer.lux.address")}</p>
                  <p>{t("footer.lux.city")}</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/55">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{t("footer.lux.tel")}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@heroics-capital.com">{t("footer.lux.email")}</a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Monaco Office */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-primary-foreground">
              {t("footer.monaco.title")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/55">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>{t("footer.monaco.address")}</p>
                  <p>{t("footer.monaco.city")}</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/55">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{t("footer.monaco.tel")}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@heroicscapital.mc">{t("footer.monaco.email")}</a>
              </li>
              {/* Monaco website link */}
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors mt-1">
                <ExternalLink className="h-4 w-4 shrink-0" />
                <a href="https://www.heroics-capital.mc" target="_blank" rel="noopener noreferrer">
                  heroics-capital.mc
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Navigation */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-primary-foreground">
              {t("footer.nav")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <a href="/#services" className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <Link href="/news" className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                  {t("nav.news")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-primary-foreground">
              {t("footer.legal")}
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "footer.legal.privacy",
                "footer.legal.terms",
                "footer.legal.cookies",
                "footer.legal.disclaimer",
                "footer.legal.regulatory",
              ].map((key) => (
                <li key={key}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Social Networks */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-primary-foreground">
              {t("footer.follow")}
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/company/heroics-capital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors group"
              >
                <span className="flex items-center justify-center h-9 w-9 rounded-full border border-primary-foreground/15 group-hover:border-primary-foreground/40 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/heroicscapital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors group"
              >
                <span className="flex items-center justify-center h-9 w-9 rounded-full border border-primary-foreground/15 group-hover:border-primary-foreground/40 transition-colors">
                  <Twitter className="h-4 w-4" />
                </span>
                <span>X (Twitter)</span>
              </a>
              <a
                href="https://instagram.com/heroicscapital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors group"
              >
                <span className="flex items-center justify-center h-9 w-9 rounded-full border border-primary-foreground/15 group-hover:border-primary-foreground/40 transition-colors">
                  <InstagramIcon className="h-4 w-4" />
                </span>
                <span>Instagram</span>
              </a>

              {/* Linked website */}
              <div className="pt-2 mt-2 border-t border-primary-foreground/10">
                <a
                  href="https://www.heroicscapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" />
                  <span>heroicscapital.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/8">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-center">
          <p className="text-xs text-primary-foreground/35">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
