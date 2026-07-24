"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import InBriefSection from "@/components/in-brief-section"
import VideoSection from "@/components/video-section"
import OfficesSection from "@/components/offices-section"
import ContactCtaSection from "@/components/contact-cta-section"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { GroupHomeLinks } from "@/components/structured-page"
import { AnimatedSection } from "@/components/ui/animated-section"

// Keep the existing map implementation available for a future re-enable.
const SHOW_OFFICE_MAP = false

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <AnimatedSection duration={0.8}>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <InBriefSection />
        </AnimatedSection>
        <GroupHomeLinks />
        <AnimatedSection delay={0.2}>
          <VideoSection />
        </AnimatedSection>
        {SHOW_OFFICE_MAP && <OfficesSection />}
        <AnimatedSection>
          <ContactCtaSection />
        </AnimatedSection>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
