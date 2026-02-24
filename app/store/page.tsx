import { ProductGrid } from "@/components/product-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function StorePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Store</h1>
          <p className="text-lg text-foreground/60">Browse our collection of premium gifts</p>
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </main>
  )
}
