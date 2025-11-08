"use client"

import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-16 max-w-3xl mx-auto text-center">
          We’re here to help you send love without limits. Whether it's a question about an order or a bespoke gift request, let us know!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Details</h2>
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4 p-4 border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Email Support</h3>
                  <p className="text-foreground/70">The best way to reach us for detailed inquiries.</p>
                  <a href="mailto:clintonkelvin739@gmail.com" className="text-primary font-medium hover:underline">
                    clintonkelvin739@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Phone/WhatsApp</h3>
                  <p className="text-foreground/70">For urgent issues or immediate assistance.</p>
                  <p className="text-primary font-medium">09123456789</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-4 p-4 border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Office Location (Nigeria)</h3>
                  <p className="text-foreground/70">Our hub for sourcing and fulfillment.</p>
                  <p className="text-primary font-medium">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Placeholder / FAQs */}
          <div className="bg-background p-8 md:p-10 rounded-3xl border border-primary/20 shadow-xl animate-slide-in-right">
            <h2 className="text-3xl font-bold text-foreground mb-6">Quick Inquiry</h2>
            <p className="text-foreground/70 mb-8">
              Fill out the form below or check our FAQ section for immediate answers.
            </p>
            
            {/* CTA to FAQ - Consistent Button Style */}
            <Link
                href="/faq" // Assuming you'll create an FAQ page
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all"
            >
                View FAQs
                <MessageCircle className="w-5 h-5" />
            </Link>
            
            {/* Form Placeholder */}
            <div className="mt-8 space-y-4">
                {/* Add your form inputs here (Name, Email, Message) */}
                <div className="h-10 w-full bg-accent/5 border border-primary/10 rounded-lg flex items-center p-3 text-foreground/50">Name Input</div>
                <div className="h-10 w-full bg-accent/5 border border-primary/10 rounded-lg flex items-center p-3 text-foreground/50">Email Input</div>
                <div className="h-24 w-full bg-accent/5 border border-primary/10 rounded-lg flex items-start p-3 text-foreground/50">Message Area</div>
                <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
                >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
