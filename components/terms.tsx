"use client"

import Link from "next/link"

export function TermsOfService() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section - Consistent Styling */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <p className="text-lg text-foreground/70 mb-10">
          Effective Date: November 7, 2025
        </p>
        
        <p className="mb-8 text-foreground/80 leading-relaxed">
          Welcome to Giftb! These Terms of Service ("Terms") govern your access to and use of our services. By using the Service, you agree to be bound by these Terms.
        </p>

        {/* --- Section 1: Use of the Service --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          1. Use of the Service
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>Eligibility: You must be at least 18 years old or supervised by a guardian.</li>
          <li>
            Accuracy of Information: You warrant that all recipient addresses and contact details are accurate. We are not responsible for delays due to inaccurate information.
          </li>
        </ul>

        {/* --- Section 2: Order, Payment, and Shipping --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          2. Order, Payment, and Shipping
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>
            International Shipping: You acknowledge that the recipient is responsible for any applicable customs duties, tariffs, or import taxes levied by the destination country.
          </li>
          <li>Risk of Loss:The risk of loss passes to you upon our delivery to the carrier.</li>
          <li>Cancellations: Only possible before the order enters the packaging stage.</li>
        </ul>
        
        {/* --- Section 4: Liability and Indemnification --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          4. Limitation of Liability
        </h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
        Giftb will not be liable for any indirect or consequential damages. Our total liability shall not exceed the amount you paid for the product in question.
        </p>
        
        {/* --- Section 6: Governing Law --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          6. Governing Law
        </h2>
        <p className="text-foreground/80 mb-6 leading-relaxed">
          These Terms shall be governed by the laws of Nigeria
        </p>
        
        {/* --- Contact Section --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          8. Contact Information
        </h2>
        <p className="text-foreground/80 mb-6">
          For any questions regarding these Terms, please contact us:
        </p>
        <div className="flex flex-col gap-2">
            <p className="text-foreground">
                Email: <span className="text-primary hover:underline">clintonkelvin739@gmail.com</span>
            </p>
        </div>

      </div>
    </section>
  )
          }
