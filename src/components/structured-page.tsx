"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { useLanguage } from "@/lib/language-context"
import { structuredText } from "@/lib/structured-translations"
import { ArrowRight, Check, ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"

function useStructuredText() {
  const { locale } = useLanguage()
  return (source: string) => structuredText(locale, source)
}

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  const s = useStructuredText()
  return (
    <Link href={href} className={`${buttonBase} bg-blue-hour text-white shadow-sm hover:bg-turquoise hover:text-deepblue`}>
      {typeof children === "string" ? s(children) : children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  const s = useStructuredText()
  return (
    <Link href={href} className={`${buttonBase} border border-blue-hour bg-background text-blue-hour hover:bg-blue-hour hover:text-white`}>
      {typeof children === "string" ? s(children) : children}
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

function PageHero({
  badges = [],
  eyebrow,
  title,
  description,
  actions,
}: {
  badges?: string[]
  eyebrow?: string
  title: string
  description: string
  actions?: ReactNode
}) {
  const s = useStructuredText()
  return (
    <section className="relative overflow-hidden bg-primary pt-40 pb-24 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-deepblue to-deepblue-light opacity-95" aria-hidden="true" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-hour/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {eyebrow && <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-hour">{s(eyebrow)}</span>}
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/80">
                {s(badge)}
              </span>
            ))}
          </div>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight text-primary-foreground text-balance md:text-6xl">
            {s(title)}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
            {s(description)}
          </p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  )
}

function Section({
  title,
  children,
  alt = false,
  intro,
}: {
  title: string
  children: ReactNode
  alt?: boolean
  intro?: string
}) {
  const s = useStructuredText()
  return (
    <section className={`border-b border-border py-16 md:py-24 ${alt ? "bg-muted/30" : "bg-background"}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 h-1 w-12 rounded-full bg-blue-hour" aria-hidden="true" />
          <h2 className="font-serif text-3xl font-semibold leading-tight text-deepblue text-balance md:text-4xl">{s(title)}</h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s(intro)}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function Card({ title, children, href }: { title?: string; children: ReactNode; href?: string }) {
  const s = useStructuredText()
  const content = (
    <div className={`h-full rounded-xl border border-border bg-background p-6 transition-all ${href ? "group-hover:border-blue-hour/50 group-hover:shadow-md" : ""}`}>
      {title && <h3 className="text-lg font-semibold leading-snug text-foreground">{s(title)}</h3>}
      <div className={title ? "mt-3" : ""}>{children}</div>
    </div>
  )

  return href ? <Link href={href} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">{content}</Link> : content
}

function PageShell({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /><CookieBanner /></>
}

const solutionCards = [
  ["Liquid Alternative Strategies", "Invest in a liquid alternative strategy", "Luxembourg", "Professional / sophisticated investors", "/solutions/alternative-strategies"],
  ["Advisory & DPM", "Build and monitor tailored portfolios", "Luxembourg or Monaco", "UHNWIs, FOs, professional investors", "/solutions/advisory"],
  ["AMC & Structured Solutions", "Implement dedicated strategies efficiently", "Monaco / Luxembourg", "Professional investors, institutions", "/solutions/amc"],
  ["AIFM Services", "Launch or manage an alternative fund", "Luxembourg", "Fund sponsors, asset managers", "/solutions/aifm"],
  ["Structured Products Brokerage", "Price and execute structured products", "Monaco", "Institutions, CGP, family offices, banks", "/solutions/brokerage"],
] as const

export function SolutionsOverviewPage() {
  const s = useStructuredText()
  return (
    <PageShell>
      <PageHero eyebrow="Solutions" title="Investment solutions built around your objectives" description="From liquid alternative strategies to advisory, structured solutions and AIFM services, Heroics Capital routes each client need to the right expertise across Luxembourg and Monaco." actions={<PrimaryLink href="/contact">Find the right solution</PrimaryLink>} />
      <Section title="Solution matrix" intro="Choose the capability that matches your objective, then connect with the appropriate specialist team.">
        <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-sm">
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <caption className="sr-only">{s("Solution matrix")}</caption>
            <thead className="bg-deepblue text-primary-foreground">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">{s("Solution")}</th>
                <th scope="col" className="px-5 py-4 font-semibold">{s("Main client need")}</th>
                <th scope="col" className="px-5 py-4 font-semibold">{s("Delivered by")}</th>
                <th scope="col" className="px-5 py-4 font-semibold">{s("Best for")}</th>
              </tr>
            </thead>
            <tbody>
              {solutionCards.map(([title, need, deliveredBy, bestFor, href]) => (
                <tr key={title} className="group border-t border-border transition-colors hover:bg-blue-hour/5 focus-within:bg-blue-hour/5">
                  <th scope="row" className="px-5 py-5 align-top">
                    <Link href={href} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-blue-hour px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-turquoise hover:text-deepblue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                      {s(title)}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </th>
                  <td className="px-5 py-5 align-top leading-relaxed text-muted-foreground">{s(need)}</td>
                  <td className="px-5 py-5 align-top font-medium text-foreground">{s(deliveredBy)}</td>
                  <td className="px-5 py-5 align-top leading-relaxed text-muted-foreground">{s(bestFor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </PageShell>
  )
}

export function AlternativeStrategiesPage() {
  const s = useStructuredText()
  const items = [
    ["Global macro optimized", "Multi-asset opportunity set across liquid markets."],
    ["Smart Factors", "Quantitative and fundamental portfolio construction."],
    ["Option-based enhancement", "Dynamic exposure and convexity framework."],
    ["Satellite strategies", "Diversified tactical engines to support cost and return objectives."],
    ["Liquidity control", "Stress-aware liquidity monitoring."],
    ["Risk infrastructure", "Sentinelle and Aegis support portfolio and compliance workflows."],
  ]
  return <PageShell>
    <PageHero badges={["Delivered by Luxembourg", "Professional investors only"]} title="Flagship Liquid Alternative Strategy" description="A liquid global macro approach combining quantitative research, disciplined risk management and option-based enhancements across listed and OTC markets." actions={<><PrimaryLink href="/contact?context=document&document=Fund%20materials">Request access to fund materials</PrimaryLink><SecondaryLink href="/entities/luxembourg">Speak with the Luxembourg team</SecondaryLink></>} />
    <Section title="Investment approach">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(([title, copy]) => <Card key={title} title={title}><p className="text-sm leading-relaxed text-muted-foreground">{s(copy)}</p></Card>)}</div>
      <div className="mt-8 rounded-xl border border-blue-hour/20 bg-blue-hour/5 p-6">
        <h3 className="font-semibold text-foreground">{s("Best for")}</h3>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">{["Professional investors", "Sophisticated investors", "Investors seeking liquid alternatives"].map((item) => <li key={item} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-blue-hour" aria-hidden="true" />{s(item)}</li>)}</ul>
        <p className="mt-6 border-t border-blue-hour/15 pt-5 text-sm text-muted-foreground"><strong className="text-foreground">{s("Public page rule:")}</strong> {s("No detailed factsheet, NAV, or performance chart outside gated access.")}</p>
      </div>
    </Section>
  </PageShell>
}

export function AdvisoryDpmPage() {
  const s = useStructuredText()
  return <PageShell>
    <PageHero badges={["Group capability"]} title="Advisory & Discretionary Portfolio Management" description="A group-wide advisory capability delivered through the appropriate regulatory and client framework across Luxembourg and Monaco." actions={<PrimaryLink href="/contact?context=customer">Find the right advisory framework</PrimaryLink>} />
    <Section title="Which advisory framework applies to you?" alt>
      <div className="grid gap-5 lg:grid-cols-3">
        <Card title="European professional investor"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-hour">{s("Luxembourg")}</span><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s("MiFID advisory and discretionary portfolio management under the Luxembourg framework.")}</p><div className="mt-5"><SecondaryLink href="/entities/luxembourg">Go Luxembourg</SecondaryLink></div></Card>
        <Card title="UHNW / Family Office / Monaco context"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-hour">{s("Monaco")}</span><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s("Premium advisory and portfolio solutions for private wealth, family offices and institutional clients.")}</p><div className="mt-5"><SecondaryLink href="/entities/monaco">Go Monaco</SecondaryLink></div></Card>
        <Card title="Institution / CGP seeking structured solutions"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-hour">{s("Monaco")}</span><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s("Structured products, AMC and brokerage capabilities through the Monaco desk.")}</p><div className="mt-5"><SecondaryLink href="/contact?context=customer">Contact Monaco desk</SecondaryLink></div></Card>
      </div>
    </Section>
    <Section title="Core capabilities"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{["Investment advisory", "DPM on account", "DPM via AMC where appropriate", "Portfolio aggregation, risk monitoring, liquidity management"].map((item) => <Card key={item}><p className="font-medium text-foreground">{s(item)}</p></Card>)}</div></Section>
  </PageShell>
}

export function AmcPage() {
  const s = useStructuredText()
  return <PageShell>
    <PageHero badges={["Group capability", "Professional investors only"]} title="Actively Managed Certificates & Structured Solutions" description="Agile wrappers to implement dedicated strategies, treasury solutions, FX strategies and bespoke investment exposures with transparent monitoring." actions={<PrimaryLink href="/contact?context=customer">Discuss an AMC project</PrimaryLink>} />
    <Section title="Use cases"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{["Dedicated strategy", "Treasury / liquidity management", "FX strategies", "Alternative strategy implementation", "Portfolio wrapper / reporting"].map((item) => <Card key={item}><p className="font-medium text-foreground">{s(item)}</p></Card>)}</div></Section>
    <Section title="Implementation process" alt><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["Define objective", "Investment target, constraints, currency, risk."], ["Select wrapper", "AMC, dedicated fund or account structure."], ["Implement strategy", "Counterparties, pricing, portfolio construction."], ["Monitor & report", "Risk, NAV, lifecycle, dashboards."]].map(([title, copy], index) => <div key={title} className="relative rounded-xl border border-border bg-background p-6"><span className="text-xs font-semibold text-blue-hour">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold text-foreground">{s(title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s(copy)}</p></div>)}</div></Section>
  </PageShell>
}

export function AifmPage() {
  const s = useStructuredText()
  return <PageShell>
    <PageHero badges={["Delivered by Luxembourg"]} title="AIFM Services for Alternative Investment Funds" description="Luxembourg-based AIFM and third-party AIFM services covering fund structuring, portfolio management, risk management, compliance and operational infrastructure." actions={<PrimaryLink href="/contact?context=customer">Discuss your fund project</PrimaryLink>} />
    <Section title="Service modules"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{["AIF structuring", "Third-party AIFM", "Dedicated funds", "Portfolio management", "Risk management", "Compliance & regulatory oversight", "Fund administration coordination", "Aegis / Sentinelle technology"].map((item) => <Card key={item}><p className="font-medium text-foreground">{s(item)}</p></Card>)}</div></Section>
  </PageShell>
}

export function BrokeragePage() {
  const s = useStructuredText()
  return <PageShell>
    <PageHero badges={["Delivered by Monaco", "Professional investors"]} title="Structured Products Brokerage from Monaco" description="A recognized Monaco desk for structured products pricing, execution and lifecycle support for institutions, CGP, family offices and professional investors." actions={<PrimaryLink href="/contact?context=customer">Contact Monaco desk</PrimaryLink>} />
    <Section title="Who we serve" alt><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{["Financial institutions", "CGP", "Family offices", "Private banks", "Professional investors"].map((item) => <Card key={item}><p className="font-medium text-foreground">{s(item)}</p></Card>)}</div></Section>
    <Section title="Brokerage workflow"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["Idea / request", "Client objective, risk, underlying, payoff."], ["Pricing", "Counterparty access and competitive terms."], ["Execution", "Order, documentation, settlement workflow."], ["Lifecycle", "Monitoring, secondary, reporting."]].map(([title, copy], index) => <div key={title} className="rounded-xl border border-border bg-background p-6"><span className="text-xs font-semibold text-blue-hour">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold text-foreground">{s(title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s(copy)}</p></div>)}</div></Section>
  </PageShell>
}

function EntityPage({ type }: { type: "luxembourg" | "monaco" }) {
  const s = useStructuredText()
  const lux = type === "luxembourg"
  const groups: Array<[string, string[]]> = lux
    ? [["Investment platform", ["Liquid alternative strategies", "Fund management", "Dedicated funds"]], ["MiFID capabilities", ["Investment advisory", "DPM", "RTO"]], ["AIFM infrastructure", ["Third-party AIFM", "Risk & compliance", "Operational infrastructure"]]]
    : [["Premium advisory", ["UHNW", "Family offices", "Institutions"]], ["DPM & AMC", ["DPM on account", "AMC solutions", "Dedicated strategies"]], ["Structured products brokerage", ["Financial institutions", "CGP / B2B partners", "Pricing & execution"]]]
  return <PageShell>
    <PageHero badges={lux ? ["Luxembourg", "CSSF", "AIFM", "MiFID"] : ["Monaco", "CCAF", "Advisory & Trading", "Structured Products"]} title={lux ? "Heroics Capital Luxembourg" : "Heroics Capital Monaco"} description={lux ? "The European regulated platform for liquid alternative strategies, MiFID advisory, discretionary management and AIFM services." : "A Monaco-based investment advisory and trading platform serving UHNWIs, family offices, institutions and professional partners."} actions={<PrimaryLink href="/contact?context=customer">{lux ? "Contact Luxembourg" : "Contact Monaco"}</PrimaryLink>} />
    <Section title={lux ? "European regulated investment platform" : "Premium advisory and structured products hub"}><div className="grid gap-5 lg:grid-cols-3">{groups.map(([title, items]) => <Card key={title} title={title}><ul className="space-y-3 text-sm text-muted-foreground">{items.map((item) => <li key={item} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-blue-hour" aria-hidden="true" />{s(item)}</li>)}</ul></Card>)}</div></Section>
  </PageShell>
}

export function LuxembourgPage() { return <EntityPage type="luxembourg" /> }
export function MonacoPage() { return <EntityPage type="monaco" /> }

export function TechnologyPage() {
  const s = useStructuredText()
  return <PageShell>
    <PageHero badges={["Group capability"]} title="Technology-enabled investment and risk infrastructure" description="Proprietary systems, quantitative research and institutional controls supporting portfolio management, risk monitoring, compliance and reporting." actions={<PrimaryLink href="/contact?context=customer">Explore technology</PrimaryLink>} />
    <Section title="Technology at the core"><div className="grid gap-5 md:grid-cols-2"><Card title="Heroics Aegis"><p className="text-sm leading-relaxed text-muted-foreground">{s("Trade lifecycle, booking, compliance workflows, regulatory controls and portfolio operations in one proprietary environment.")}</p></Card><Card title="Heroics Sentinelle"><p className="text-sm leading-relaxed text-muted-foreground">{s("Risk monitoring, portfolio analytics, scenario analysis, dashboards and limit surveillance across mandates and fund structures.")}</p></Card></div></Section>
  </PageShell>
}

export function GroupHomeLinks() {
  const s = useStructuredText()
  const paths = [
    ["Invest in a liquid alternative strategy", "Flagship liquid global macro / alternative strategy", "Luxembourg", "/solutions/alternative-strategies"],
    ["Build a tailored investment solution", "Advisory, DPM, portfolio construction and monitoring", "Group", "/solutions/advisory"],
    ["Launch or manage an alternative fund", "AIFM, third-party AIFM, governance, risk and compliance", "Luxembourg", "/solutions/aifm"],
    ["Access structured products brokerage", "Pricing, execution, counterparties, lifecycle support", "Monaco", "/solutions/brokerage"],
    ["Create an AMC or dedicated strategy", "Certificates, dedicated wrappers, treasury, FX and alternatives", "Group", "/solutions/amc"],
  ] as const

  return <>
    <section className="border-y border-primary-foreground/10 bg-deepblue py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-hour">{s("Technology at the core")}</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold text-primary-foreground text-balance md:text-4xl">{s("Proprietary infrastructure for portfolio, risk and compliance.")}</h2>
          </div>
          <PrimaryLink href="/technology">Explore technology</PrimaryLink>
        </div>
      </div>
    </section>

    <section className="border-b border-border bg-muted/30 py-16 md:py-24" id="choose-your-path">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-hour">{s("Choose your path")}</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-deepblue text-balance md:text-4xl">{s("What are you looking for?")}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{s("Choose your objective first. We will route you to the right Heroics platform, specialist team, and jurisdiction.")}</p>
        </div>
        <ul className="space-y-3">
          {paths.map(([title, copy, destination, href]) => (
            <li key={title} className="grid items-center gap-4 rounded-lg border border-border bg-background px-5 py-5 transition-all hover:border-blue-hour/40 hover:shadow-sm focus-within:border-blue-hour/40 focus-within:shadow-sm lg:grid-cols-[1.2fr_0.8fr_0.55fr] lg:px-6">
              <strong className="text-base font-semibold leading-snug text-foreground md:text-lg">{s(title)}</strong>
              <span className="text-sm leading-relaxed text-muted-foreground">{s(copy)}</span>
              <Link href={href} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-blue-hour px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-turquoise hover:text-deepblue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:justify-between">
                {s(destination)}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 h-1 w-12 rounded-full bg-blue-hour" aria-hidden="true" />
          <h2 className="font-serif text-3xl font-semibold text-deepblue text-balance md:text-4xl">{s("One group, two specialist hubs")}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{s("Luxembourg and Monaco have distinct roles, connected by one group-wide technology and investment platform.")}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Heroics Capital Luxembourg" href="/entities/luxembourg"><p className="text-sm leading-relaxed text-muted-foreground">{s("European regulated investment platform for liquid alternatives, advisory, DPM and AIFM services.")}</p></Card>
          <Card title="Heroics Capital Monaco" href="/entities/monaco"><p className="text-sm leading-relaxed text-muted-foreground">{s("Premium advisory and structured products hub for UHNWIs, family offices, institutions and professional partners.")}</p></Card>
        </div>
      </div>
    </section>
  </>
}
