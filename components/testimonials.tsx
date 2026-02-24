"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Chioma Okafor",
    location: "Lagos, Nigeria",
    text: "GiftHub made it so easy to send a gift to my sister in London. The quality was amazing!",
    rating: 5,
  },
  {
    name: "Tunde Adeyemi",
    location: "Abuja, Nigeria",
    text: "Fast delivery and excellent customer service. Highly recommended!",
    rating: 5,
  },
  {
    name: "Zainab Hassan",
    location: "Kano, Nigeria",
    text: "The gift arrived perfectly packaged. My friend loved it!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">Customers</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">See what our happy customers have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
