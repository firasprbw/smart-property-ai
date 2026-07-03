import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/home/Hero"
import Features from "@/components/home/Features"
import CTA from "@/components/home/CTA"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <Footer />
    </>
  )
}