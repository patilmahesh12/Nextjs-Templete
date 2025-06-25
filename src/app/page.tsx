import HeroSection from '@/components/hero/HeroSection'
import FeaturesSection from '@/components/features/FeaturesSection'
import CtaSection from '@/components/cta/CtaSection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </main>
  )
}