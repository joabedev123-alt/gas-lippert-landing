import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TrustBar from './components/TrustBar/TrustBar'
import Products from './components/Products/Products'
import EmergencyCTA from './components/EmergencyCTA/EmergencyCTA'
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import HowItWorks from './components/HowItWorks/HowItWorks'
import DeliveryArea from './components/DeliveryArea/DeliveryArea'
import FAQ from './components/FAQ/FAQ'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp'
import MobileContactBar from './components/MobileContactBar/MobileContactBar'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <EmergencyCTA />
        <About />
        <Benefits />
        <HowItWorks />
        <DeliveryArea />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </>
  )
}

export default App
