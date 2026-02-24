import { Header } from "@/components/header"
import { AboutPage } from "@/components/about";
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutPage />
      <Footer />
    </main>
  )
}
