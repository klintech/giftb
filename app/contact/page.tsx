import { Header } from "@/components/header"
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactUs/>
      <Footer />
    </main>
  )
}
