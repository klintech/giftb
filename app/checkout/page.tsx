"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCart()
  const total = getTotalPrice()
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientEmail: "",
    recipientPhone: "",
    recipientAddress: "",
    recipientCity: "",
    recipientCountry: "",
    senderName: "",
    senderEmail: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is where Paystack integration would happen
    console.log("Checkout data:", { ...formData, items, total })
    alert("Checkout form ready for Paystack integration. Check console for details.")
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-foreground/60">Your cart is empty</p>
          <Link href="/store" className="text-primary hover:text-primary/80">
            Return to store
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/cart"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Cart
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-12">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Recipient Information */}
              <div className="p-6 border border-border rounded-lg bg-card">
                <h2 className="text-xl font-bold text-foreground mb-6">Recipient Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="recipientName"
                    placeholder="Recipient Name"
                    value={formData.recipientName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="recipientEmail"
                    placeholder="Recipient Email"
                    value={formData.recipientEmail}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    name="recipientPhone"
                    placeholder="Recipient Phone"
                    value={formData.recipientPhone}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    name="recipientCountry"
                    placeholder="Country"
                    value={formData.recipientCountry}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    name="recipientAddress"
                    placeholder="Delivery Address"
                    value={formData.recipientAddress}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="md:col-span-2 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    name="recipientCity"
                    placeholder="City"
                    value={formData.recipientCity}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Sender Information */}
              <div className="p-6 border border-border rounded-lg bg-card">
                <h2 className="text-xl font-bold text-foreground mb-6">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="senderName"
                    placeholder="Your Name"
                    value={formData.senderName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="senderEmail"
                    placeholder="Your Email"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    name="message"
                    placeholder="Personal Message (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="md:col-span-2 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Payment Notice */}
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Payment Method</p>
                  <p className="text-foreground/70 text-sm">
                    You will be redirected to Paystack to complete your payment securely.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Proceed to Payment
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="p-6 border border-border rounded-lg bg-card sticky top-20">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-foreground/70">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-foreground/60">
                  <span>Subtotal</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-foreground/60">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
