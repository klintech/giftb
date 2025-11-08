"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Leaf, Globe, Heart } from "lucide-react"

export function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* --- Section 1: Hero-Style Introduction --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-sm uppercase font-semibold text-primary mb-2 tracking-widest">Our Story</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                More Than Just <span className="text-primary">Gifts</span>, It's a Bridge.
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Born out of a desire to eliminate the distance in gift-giving, we connect the vibrant heart of Nigeria with loved ones across the globe. We believe every gift should be a seamless, joyful experience.
              </p>
              <Link
                href="/store"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Start Gifting
                <Heart className="w-5 h-5" />
              </Link>
            </div>

            {/* Image Placeholder - Consistent Style */}
            <div className="relative h-96 md:h-full animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse-glow" />
              <div className="relative h-full rounded-3xl border border-primary/20 overflow-hidden">
                <Image
                  src="https://static.vecteezy.com/system/resources/previews/047/784/131/non_2x/a-diverse-business-team-meets-around-a-table-discussing-strategies-with-a-world-map-as-their-backdrop-the-image-represents-global-collaboration-and-teamwork-free-vector.jpg" // Replace with a meaningful About image
                  alt="Team collaboration or global map"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Core Values/Mission --- */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We stand by three core pillars that ensure an experience as beautiful as the gifts we send.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="p-8 border border-primary/10 rounded-xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Exceptional Service</h3>
              <p className="text-foreground/80">From hand-picking the perfect item to tracking its journey, our team ensures a personalized, stress-free experience for every customer.</p>
            </div>
            
            {/* Value Card 2 */}
            <div className="p-8 border border-primary/10 rounded-xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300">
              <Leaf className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Curated Quality</h3>
              <p className="text-foreground/80">We source only the finest, often locally-made Nigerian products, guaranteeing quality and supporting local artisans with every purchase.</p>
            </div>

            {/* Value Card 3 */}
            <div className="p-8 border border-primary/10 rounded-xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Global Reach</h3>
              <p className="text-foreground/80">Our logistics network is built for speed and reliability, delivering your thoughtful gifts swiftly to any destination worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Call to Action (Optional, but great for About pages) --- */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Send Joy?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Explore our curated collections and start crafting the perfect moment for someone special today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
      }
