import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Phases } from "@/components/landing/phases"
import { Pricing } from "@/components/landing/pricing"
import { Benefits } from "@/components/landing/benefits"
import { Scholarships } from "@/components/landing/scholarships"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Scholarships />
      <Phases />
      <Pricing />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
