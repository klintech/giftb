"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Send Love Across the <span className="text-primary">World</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Send beautiful, thoughtfully curated gifts from Nigeria to anywhere in the world. Fast delivery,
              exceptional quality, and unforgettable moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/store"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative h-96 md:h-full animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative h-full rounded-3xl border border-primary/20 overflow-hidden">
              <Image
                src="/logo1.png"
                alt="Premium gift selection"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 flex items-end justify-center p-6">
                <div className="text-center">
                  <p className="text-white/90 font-semibold">Premium Gift Selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
