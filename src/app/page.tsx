"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import InBriefSection from "@/components/in-brief-section"
import VideoSection from "@/components/video-section"
import ContactCtaSection from "@/components/contact-cta-section"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { AnimatedSection } from "@/components/ui/animated-section"

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
        <AnimatedSection delay={0.2}>
          <VideoSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactCtaSection />
        </AnimatedSection>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
