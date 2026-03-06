"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1 - Logo Reminder */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/heroics-logo-rgb blanc.png"
              alt="Heroics Capital Partners"
              width={140}
              height={56}
              className="w-auto h-auto opacity-90"
            />
            <p className="text-sm text-primary-foreground/55 mt-2">
              Independent asset management with conviction. Bespoke investment solutions.
            </p>
          </div>

          {/* Column 2 - Navigation */}
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

          {/* Column 3 - Notre offre */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-primary-foreground">
              {t("nav.offering")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/offering/aif" className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                  {t("nav.offering.aif")}
                </Link>
              </li>
              <li>
                <Link href="/offering/investment-solutions" className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                  {t("nav.offering.investment")}
                </Link>
              </li>
              <li>
                <Link href="/offering/manco" className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors">
                  {t("nav.offering.manco")}
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
                  <Link
                    href="#"
                    className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors"
                  >
                    {t(key)}
                  </Link>
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
