'use client'

import { useState } from 'react'
import Image from 'next/image'

const HERO_IMAGE = '/images/hero-shrine.jpg'
const HERO_FALLBACK = '/images/IMG20260101132437.jpg'

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE)

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background: save your shrine photo as public/images/hero-shrine.jpg */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imgSrc}
          alt="Shri Shirdi Sai Baba Temple shrine with Sai Baba, Hanuman, Dattatreya and devotional offerings"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          onError={() => setImgSrc(HERO_FALLBACK)}
        />
      </div>
      {/* Overlay for readability */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/50 to-black/70"
        aria-hidden
      />
      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-primary text-white drop-shadow-lg">
            Welcome to Shri Shirdi Sai Baba Temple
          </h1>
          <p className="text-body text-lg sm:text-xl mb-8 text-white/95 drop-shadow-md">
            A place of devotion, service, and spiritual growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about-us" className="btn-primary shadow-xl hover:shadow-2xl">
              Learn More
            </a>
            <a href="/donation" className="btn-secondary shadow-xl hover:shadow-2xl">
              Contribute
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
