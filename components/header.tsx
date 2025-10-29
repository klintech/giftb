"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const { items } = useCart()
  const cartCount = items.length

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="GiftBridge"
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="font-extrabold text-2xl leading-none text-foreground">
              GiftBridge
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/store" className="text-foreground hover:text-primary transition-colors">
              Store
            </Link>
            <Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
          </nav>

          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
