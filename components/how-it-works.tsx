"use client"

const steps = [
  {
    number: "1",
    title: "Browse & Select",
    description: "Explore our curated collection of premium gifts",
  },
  {
    number: "2",
    title: "Add to Cart",
    description: "Choose your items and customize if needed",
  },
  {
    number: "3",
    title: "Checkout",
    description: "Provide recipient details and payment information",
  },
  {
    number: "4",
    title: "We Ship",
    description: "We package and ship your gift with care",
  },
  {
    number: "5",
    title: "Track & Deliver",
    description: "Track your shipment in real-time",
  },
  {
    number: "6",
    title: "Celebrate",
    description: "Your loved one receives their special gift",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Simple steps to send joy around the world</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl border border-border bg-background animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <h3 className="font-semibold text-foreground mb-2 mt-2">{step.title}</h3>
              <p className="text-foreground/60 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
