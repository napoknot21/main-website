"use client"

import Image from "next/image"

export default function VideoSection() {
  return (
    <section id="services" className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
        <Image
          src="/images/heroicspitch_HD.gif"
          alt="Heroics Capital Partners"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    </section>
  )
}
