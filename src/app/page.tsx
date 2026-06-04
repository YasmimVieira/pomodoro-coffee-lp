import { Navbar } from '@/components/layout/NavbBar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { Screens } from '@/components/sections/Screens'
import { CtaSection } from '@/components/sections/CtaSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Screens />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
