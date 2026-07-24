"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { structuredText } from "@/lib/structured-translations"
import { Linkedin } from "lucide-react"

export default function Footer() {
  const { locale, t } = useLanguage()
  const s = (source: string) => structuredText(locale, source)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 lg:pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 justify-items-center sm:justify-items-start">
          {/* Column 1 - Logo & Social */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 md:gap-6">
            <Image
              src="/images/heroics-logo-rgb blanc.png"
              alt="Heroics Capital Partners"
              width={160}
              height={64}
              className="w-auto h-[40px] md:h-auto opacity-90"
            />
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/heroics-capital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full border border-primary-foreground/15 text-primary-foreground/70 hover:text-blue-hour hover:border-blue-hour hover:bg-blue-hour/10 transition-all duration-300 group"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Notre offre */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base font-semibold mb-6 text-primary-foreground">
              {s("Solutions")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                  <Link href="/solutions/alternative-strategies" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {s("Alternative strategies")}
                </Link>
              </li>
              <li>
                  <Link href="/solutions/advisory" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {s("Advisory & DPM")}
                </Link>
              </li>
              <li>
                  <Link href="/solutions/amc" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {s("AMC & structured solutions")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/aifm" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {s("AIFM services")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/brokerage" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {s("Structured products brokerage")}
                </Link>
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
                <Link href="/" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {t("nav.news")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/entities/luxembourg" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {s("Luxembourg")}
                </Link>
              </li>
              <li>
                <Link href="/entities/monaco" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {s("Monaco")}
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors">
                  {s("Technology")}
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
                { key: "footer.legal.privacy", href: "/legal/privacy" },
                { key: "footer.legal.notice", href: "/legal/notice" },
                { key: "footer.legal.cookies", href: "/legal/cookies" },
                { key: "footer.legal.disclosure", href: "/legal/disclosure" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-blue-hour transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 pt-1 md:pt-2 pb-4 md:pb-6 flex items-center justify-center">
          <p className="text-xs text-primary-foreground/35">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
