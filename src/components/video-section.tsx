"use client"

import Image from "next/image"

export default function VideoSection() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-deepblue">
      {/*
        Responsive 16:9 video embed (replaces heroicspitch_HD.gif).
        Replace the src below with your actual video path or YouTube/Vimeo embed URL.
        If using YouTube: swap <video> for <iframe> with the embed URL.
      */}
      <div className="relative w-full aspect-video max-h-[80vh]">
        <Image
          src="/videos/heroicspitch_HD.gif"
          alt="Heroics Capital presentation"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/*
        ── Alternatively, for a YouTube embed, replace the <video> block above with: ──

        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
          title="Heroics Capital presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      */}
    </section>
  )
}
