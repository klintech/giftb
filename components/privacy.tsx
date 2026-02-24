"use client"

import Link from "next/link"

export function PrivacyPolicy() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Title Section --- */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Privacy <span className="text-primary">Policy</span> & Refund Policy
        </h1>
        <p className="text-lg text-foreground/70 mb-10">
          Effective Date: Jan 1, 2025
        </p>

        <p className="mb-8 text-foreground/80 leading-relaxed">
          At <strong>Giftbridge</strong>, we value your privacy and are committed to
          protecting your personal data. This Privacy Policy describes how we
          collect, use, disclose, and safeguard your information when you use
          our website and gift-delivery services worldwide.
        </p>

        {/* --- Section 1: Information We Collect --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          1. Information We Collect
        </h2>
        <p className="text-foreground/80 mb-4">
          We collect information to process your orders, improve your experience,
          and keep our platform secure.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>
            <strong>Personal Information You Provide:</strong> Sender details (name,
            email, billing info) and <strong>Recipient Information</strong> (name,
            delivery address, phone number, and message).
          </li>
          <li>
            <strong>Usage & Technical Data:</strong> Pages visited, IP address,
            device type, browser type, and interaction logs.
          </li>
          <li>
            <strong>Communication Data:</strong> Support messages, chat history,
            and customer service inquiries.
          </li>
        </ul>

        {/* --- Section 2: How We Use Your Information --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          2. How We Use Your Information
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>To process, confirm, and deliver your gift orders worldwide.</li>
          <li>To notify recipients when needed (delivery updates, confirmations).</li>
          <li>To improve the platform and personalize your experience.</li>
          <li>To prevent fraud, enhance security, and comply with regulations.</li>
          <li>
            To send service updates, promotions, and newsletters (optional).
          </li>
        </ul>

        {/* --- Section 3: Disclosure --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          3. Disclosure of Your Information
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>
            <strong>Service Providers:</strong> We work with payment processors,
            delivery partners, and logistics companies essential for global
            shipping.
          </li>
          <li>
            <strong>Legal Purposes:</strong> We may disclose information when
            required by law, legal request, or to protect our users.
          </li>
        </ul>

        {/* --- Section 4: Data Security --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          4. Data Security
        </h2>
        <p className="text-foreground/80 mb-4">
          We use encryption, secure payment gateways, and industry-standard
          security practices to protect your personal data. However, no online
          platform can guarantee 100% security.
        </p>

        {/* --- Section 5: Your Rights --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          5. Your Rights
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>Access, update, or delete your personal data.</li>
          <li>Request a copy of your stored information.</li>
          <li>Opt out of marketing emails anytime.</li>
          <li>Request clarification on how your data is used.</li>
        </ul>

        {/* --- Section 6: Refund Policy (Paystack Compliant) --- */}
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4 border-b pb-2 border-primary/20">
          6. Refund Policy
        </h2>

        <p className="text-foreground/80 mb-4">
          At Giftb, we aim to deliver every order on time and without issues.
          However, in line with Paystack requirements and our commitment to fairness,
          refunds are handled as follows:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>
            <strong>Automatic Refund After 14 Days:</strong>  
            If an order is not fulfilled, not delivered, or remains incomplete
            after <strong>14 days</strong> from the date of purchase, the order
            will be automatically canceled and a refund will be issued to the
            customer.
          </li>
          <li>
            <strong>Failed or Canceled Orders:</strong> If we are unable to process 
            or ship your order due to product shortages, country restrictions, or
            delivery failures, a full refund will be issued.
          </li>
          <li>
            <strong>Refund Method:</strong> All refunds are returned to the original
            payment method used during checkout (Paystack).
          </li>
          <li>
            <strong>Refund Timeline:</strong> Once processed, refunds typically take
            <strong> 5–7 business days</strong> to reflect depending on your bank.
          </li>
          <li>
            <strong>No Refund After Successful Delivery:</strong>  
            Due to the nature of personalized and perishable gift items, refunds
            are not available once an order has been successfully delivered.
          </li>
        </ul>

        {/* --- Section 7: Contact --- */}
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4 border-b pb-2 border-primary/20">
          7. Contact Us
        </h2>

        <p className="text-foreground/80 mb-6">
          If you have questions about this Privacy or Refund Policy, kindly reach out:
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-foreground">
            Email:{" "}
            <span className="text-primary hover:underline">
              support@gift-bridge.xyz
            </span>
          </p>
          <p className="text-foreground">Address: Lagos, Nigeria</p>
        </div>

      </div>
    </section>
  )
}
