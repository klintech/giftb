import { Header } from "@/components/header"
import { TermsOfService } from "@/components/terms";
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TermsOfService />
      <Footer />
    </main>
  )
}
