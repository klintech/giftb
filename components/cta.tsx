"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Ready to Send Joy?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 animate-fade-in-up">
          Start shopping now and make someone's day special
        </p>
        <Link
          href="/store"
          className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all animate-fade-in-up"
        >
          Explore Store
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
