"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { products } from "@/lib/products"

export function ProductGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="group animate-fade-in-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="relative h-48 bg-foreground/5 overflow-hidden">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-primary">₦{product.price.toLocaleString()}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm text-foreground/60">{product.rating}</span>
                </div>
              </div>
              <p className="text-sm text-foreground/60 line-clamp-2">{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
