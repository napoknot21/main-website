"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import InBriefSection from "@/components/in-brief-section"
import VideoSection from "@/components/video-section"
import ContactCtaSection from "@/components/contact-cta-section"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InBriefSection />
        <VideoSection />
        <ContactCtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
