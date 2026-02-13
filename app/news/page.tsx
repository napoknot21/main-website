"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactCtaSection from "@/components/contact-cta-section"
import { useLanguage } from "@/lib/language-context"
import { Calendar, ArrowUpRight, Newspaper } from "lucide-react"

interface NewsArticle {
  id: string
  date: string
  titleKey: string
  contentKey: string
  image?: string
  link?: string
}

const articles: NewsArticle[] = [
  {
    id: "1",
    date: "2025-12-15",
    titleKey: "news.article1.title",
    contentKey: "news.article1.content",
    image: "/images/news-hero.jpg",
    link: "#",
  },
  {
    id: "2",
    date: "2025-11-28",
    titleKey: "news.article2.title",
    contentKey: "news.article2.content",
    link: "#",
  },
  {
    id: "3",
    date: "2025-10-10",
    titleKey: "news.article3.title",
    contentKey: "news.article3.content",
    image: "/images/about-hero.jpg",
  },
  {
    id: "4",
    date: "2025-09-05",
    titleKey: "news.article4.title",
    contentKey: "news.article4.content",
  },
]

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr)
  const localeMap: Record<string, string> = {
    en: "en-GB",
    fr: "fr-FR",
    es: "es-ES",
  }
  return date.toLocaleDateString(localeMap[locale] || "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function NewsPage() {
  const { locale, t } = useLanguage()

  return (
    <>
      <Header />
      <main>
        {/* News Hero */}
        <section className="relative h-[40vh] min-h-[280px] max-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/news-hero.jpg"
              alt="News"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/75" />
          </div>
          <div className="relative z-10 text-center px-6">
            <div className="animate-fade-in-up">
              <div className="inline-block h-px w-12 bg-primary-foreground/30 mb-6" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight text-balance">
                {t("news.page.title")}
              </h1>
              <p className="text-sm sm:text-base text-primary-foreground/60 mt-4 max-w-lg mx-auto leading-relaxed">
                {t("news.page.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-background"
                >
                  {/* Image if available */}
                  {article.image && (
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={t(article.titleKey)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={article.date}>
                        {formatDate(article.date, locale)}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
                      {t(article.titleKey)}
                    </h2>

                    {/* Content summary */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {t(article.contentKey)}
                    </p>

                    {/* Link if available */}
                    {article.link && (
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 mt-2 transition-colors"
                      >
                        {t("news.readMore")}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {/* No image fallback icon */}
                    {!article.image && (
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted text-muted-foreground mt-2">
                        <Newspaper className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ContactCtaSection variant="inline" />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
