"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ContactCtaSection from "@/components/contact-cta-section"
import { useLanguage } from "@/lib/language-context"
import { Calendar, ArrowUpRight, Linkedin, Newspaper, Play } from "lucide-react"

interface NewsArticle {
  id: string
  date: string
  datePrecision?: "day" | "month"
  titleKey: string
  contentKey: string
  image?: string
  imageVariant?: "photo" | "logo"
  link?: string
  source?: "linkedin"
  videoEmbedUrl?: string
}

const articles: NewsArticle[] = [
  {
    id: "1",
    date: "2025-12-15",
    titleKey: "news.article1.title",
    contentKey: "news.article1.content",
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
  },
  {
    id: "4",
    date: "2025-09-05",
    titleKey: "news.article4.title",
    contentKey: "news.article4.content",
  },
  {
    id: "5",
    date: "2025-06-23",
    titleKey: "news.article5.title",
    contentKey: "news.article5.content",
    image: "/images/news/bfmtv-trajectoire.jpg",
    link: "https://www.bfmtv.com/economie/replay-emissions/trajectoire/video-trajectoire-heroics-capital-solutions-de-quai-logistique-23-06_VN-202506230222.html",
    videoEmbedUrl:
      "https://players.brightcove.net/876450612001/default_default/index.html?videoId=6374730709112",
  },
  {
    id: "6",
    date: "2025-04-19",
    titleKey: "news.article6.title",
    contentKey: "news.article6.content",
    image: "/images/news/bfmtv-hebdo-pme.jpg",
    link: "https://www.bfmtv.com/economie/replay-emissions/l-hebdo-des-pme/cyrille-nahabedian-heroics-capital-heroics-capital-gestion-alternative-et-conseil-19-04_VN-202504190145.html",
    videoEmbedUrl:
      "https://players.brightcove.net/876450612001/7wGPTnpvYw_default/index.html?videoId=6371680102112",
  },
  {
    id: "7",
    date: "2024-10-01",
    datePrecision: "month",
    titleKey: "news.article7.title",
    contentKey: "news.article7.content",
    image: "/images/news/linkedin-structured-products-seminar.jpg",
    link: "https://www.linkedin.com/posts/fahmi-ben-abdelkader-6111a64_luxembourg-activity-7253125774189236224-z7v4",
    source: "linkedin",
  },
  {
    id: "8",
    date: "2025-05-01",
    datePrecision: "month",
    titleKey: "news.article8.title",
    contentKey: "news.article8.content",
  },
  {
    id: "9",
    date: "2025-02-01",
    datePrecision: "month",
    titleKey: "news.article9.title",
    contentKey: "news.article9.content",
    image: "/images/news/heroics_aegis_logo.png",
    imageVariant: "logo",
  },
  {
    id: "10",
    date: "2024-07-01",
    datePrecision: "month",
    titleKey: "news.article10.title",
    contentKey: "news.article10.content",
  },
  {
    id: "11",
    date: "2024-07-01",
    datePrecision: "month",
    titleKey: "news.article11.title",
    contentKey: "news.article11.content",
    image: "/images/news/heroics_sentinelle_logo.png",
    imageVariant: "logo",
  },
  {
    id: "12",
    date: "2024-07-01",
    datePrecision: "month",
    titleKey: "news.article12.title",
    contentKey: "news.article12.content",
  },
  {
    id: "13",
    date: "2024-05-01",
    datePrecision: "month",
    titleKey: "news.article13.title",
    contentKey: "news.article13.content",
  },
  {
    id: "14",
    date: "2024-05-01",
    datePrecision: "month",
    titleKey: "news.article14.title",
    contentKey: "news.article14.content",
  },
  {
    id: "15",
    date: "2023-06-01",
    datePrecision: "month",
    titleKey: "news.article15.title",
    contentKey: "news.article15.content",
  },
]

const articlesByDate = [...articles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

function formatDate(
  dateStr: string,
  locale: string,
  precision: NewsArticle["datePrecision"] = "day"
): string {
  const date = new Date(dateStr)
  const localeMap: Record<string, string> = {
    en: "en-GB",
    fr: "fr-FR",
    es: "es-ES",
  }
  if (precision === "month") {
    return date.toLocaleDateString(localeMap[locale] || "en-GB", {
      month: "long",
      year: "numeric",
    })
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
        <section className="relative pt-36 pb-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pawel.png"
              alt="News"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            {/* Uniform dark overlay */}
            <div className="absolute inset-0 bg-deepblue/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <div className="animate-fade-in-up">
              <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6 shadow-[0_0_10px_rgba(57,114,229,0.5)]" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight text-balance mb-5">
                {t("news.page.title")}
              </h1>
              <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl mx-auto leading-relaxed text-pretty">
                {t("news.page.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articlesByDate.map((article) => (
                <NewsArticleCard
                  key={article.id}
                  article={article}
                  locale={locale}
                  t={t}
                />
              ))}
            </div>
          </div>
        </section>
        <ContactCtaSection
          variant="banner"
          titleKey="contact.news.title"
          descKey="contact.news.desc"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

function NewsArticleCard({
  article,
  locale,
  t,
}: {
  article: NewsArticle
  locale: string
  t: (key: string) => string
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const hasVideo = Boolean(article.videoEmbedUrl)
  const isLogoImage = article.imageVariant === "logo"
  const linkLabel = article.source === "linkedin" ? t("news.viewOnLinkedIn") : t("news.readMore")

  return (
    <article className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-background">
      {article.image && (
        <div className={`relative aspect-video overflow-hidden ${isLogoImage ? "bg-white" : "bg-muted"}`}>
          {hasVideo && isPlaying ? (
            <iframe
              src={article.videoEmbedUrl}
              title={t(article.titleKey)}
              allow="encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <>
              <Image
                src={article.image || "/placeholder.svg"}
                alt={t(article.titleKey)}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
                className={`${isLogoImage ? "object-contain p-10" : "object-cover group-hover:scale-105"} transition-transform duration-500`}
              />
              {!isLogoImage && (
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              )}
              {hasVideo && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={t("news.watchVideo")}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-deepblue/85 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <Play className="h-7 w-7 translate-x-0.5 fill-current" />
                  </span>
                </button>
              )}
            </>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col items-center text-center gap-3">
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
          <Calendar className="h-3.5 w-3.5" />
          <time dateTime={article.date}>
            {formatDate(article.date, locale, article.datePrecision)}
          </time>
        </div>

        <h2 className="text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors text-center">
          {t(article.titleKey)}
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 text-center">
          {t(article.contentKey)}
        </p>

        {article.link && (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 mt-2 transition-colors"
          >
            {linkLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}

        {!article.image && (
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted text-muted-foreground mt-2">
            {article.source === "linkedin" ? (
              <Linkedin className="h-5 w-5" />
            ) : (
              <Newspaper className="h-5 w-5" />
            )}
          </div>
        )}
      </div>
    </article>
  )
}
