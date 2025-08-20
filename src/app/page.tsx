import HomeHeader from '@/components/home/HomeHeader'
import Navigation from '@/components/layout/Navigation'
import WelcomeSection from '@/components/home/WelcomeSection'
import OpleidingenSection from '@/components/home/OpleidingenSection'
import LatestNewsHighlight from '@/components/home/LatestNewsHighlight'
import ContactButton from '@/components/shared/ContactButton' // Añadimos esta importación
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <HomeHeader />
      <Navigation />
     
      <main className="container mx-auto px-4 flex-grow mt-8">
        <WelcomeSection />
        <div className="mt-4">
          <OpleidingenSection />
        </div>

        <div className="mt-4 sm:mt-8">
          <LatestNewsHighlight />
        </div>
      </main>

      {/* Añadimos el ContactButton aquí */}
      <div className="relative z-50">
        <ContactButton />
      </div>

      <Footer />
    </div>
  )
}
