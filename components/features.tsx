"use client"

import { Globe, Zap, Shield, Heart, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Worldwide Delivery",
    description: "Ship to over 150 countries with reliable international logistics",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Orders processed within 24 hours for quick delivery",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "All gifts are carefully packaged and insured",
  },
  {
    icon: HeartHandshake,
    title: "Best Quality",
    description: "We offer the best Quality of items",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">GiftBridge</span>?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We make sending gifts internationally simple, secure, and special
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
