"use client"

import Link from "next/link"

export function PrivacyPolicy() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section - Consistent Styling */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-lg text-foreground/70 mb-10">
          **Effective Date:** \[Insert Date]
        </p>
        
        <p className="mb-8 text-foreground/80 leading-relaxed">
          Your privacy is paramount to us. This Privacy Policy explains how **\[Your Company Name]** ("we," "us," or "our") collects, uses, discloses, and protects your information when you use our website and services (the "Service") to send gifts globally from Nigeria.
        </p>

        {/* --- Section 1: Information We Collect --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          1. Information We Collect
        </h2>
        <p className="text-foreground/80 mb-4">
          We collect information to process your orders, provide excellent service, and improve our platform.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>
            **Personal Information You Provide:** Sender information (name, billing, payment), and **Recipient Information** (name, delivery address, message).
          </li>
          <li>
            **Automated Information Collection:** Usage Data (pages viewed, time spent) and Technical Data (IP address, browser type).
          </li>
          <li>
            **Communication Data:** Records of correspondence, including customer service inquiries.
          </li>
        </ul>
        
        {/* --- Section 2: How We Use Your Information --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          2. How We Use Your Information
        </h2>
        <p className="text-foreground/80 mb-4">
          We use your information for:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>**Service Delivery:** To process and fulfill your gift orders, including international shipping logistics.</li>
          <li>**Recipient Notification:** To provide the recipient with necessary tracking and delivery updates.</li>
          <li>**Security & Fraud Prevention:** To protect our Service and prevent fraudulent transactions.</li>
          <li>**Communication:** To send updates, promotions, and newsletters (with opt-out).</li>
        </ul>

        {/* --- Section 3: Disclosure --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          3. Disclosure of Your Information
        </h2>
        <p className="text-foreground/80 mb-4">
          We do not sell your Personal Information. We may share data with:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
          <li>**Service Providers:** Payment processors and shipping carriers (essential for global delivery).</li>
          <li>**Legal Compliance:** When required by law or subpoena.</li>
        </ul>
        
        {/* --- Contact Section --- */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b pb-2 border-primary/20">
          6. Contact Us
        </h2>
        <p className="text-foreground/80 mb-6">
          If you have questions about this Privacy Policy, please contact us:
        </p>
        <div className="flex flex-col gap-2">
            <p className="text-foreground">
                **Email:** <span className="text-primary hover:underline">\[Your Support Email]</span>
            </p>
            <p className="text-foreground">
                **Address:** \[Your Business Address]
            </p>
        </div>
        
      </div>
    </section>
  )
}
