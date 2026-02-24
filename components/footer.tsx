"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/Logo.png" alt="GiftBridge logo" className="w-20 h-20 object-contain" />
              <span className="font-bold text-foreground">GiftBridge</span>
            </div>
            <p className="text-foreground/60 text-sm">Send gifts worldwide from Nigeria</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/store" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  Store
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-foreground/60 hover:text-primary text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/required-information" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  Required Information
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">© 2025 GiftBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
