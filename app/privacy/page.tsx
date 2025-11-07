import { Header } from "@/components/header"
import { Footer } from "@/components/footer";
import { PrivacyPolicy } from "@/components/privacy"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </main>
  )
}
