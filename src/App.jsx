import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TrustBar from './components/TrustBar/TrustBar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

// Importando os componentes extras (mantidos para o caso de você querer usar depois)
// import EmergencyCTA from './components/EmergencyCTA/EmergencyCTA'
// import Benefits from './components/Benefits/Benefits'
// import HowItWorks from './components/HowItWorks/HowItWorks'
// import DeliveryArea from './components/DeliveryArea/DeliveryArea'
// import FAQ from './components/FAQ/FAQ'
// import FinalCTA from './components/FinalCTA/FinalCTA'
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp'
import MobileContactBar from './components/MobileContactBar/MobileContactBar'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <TrustBar />
        <About /> {/* Esta é a nova seção de Mapa e Contato */}
        
        {/* Seções extras ocultadas para manter o design mais limpo e fiel à imagem. 
            Você pode descomentar se quiser exibi-las. */}
        {/* <EmergencyCTA /> */}
        {/* <Benefits /> */}
        {/* <HowItWorks /> */}
        {/* <DeliveryArea /> */}
        {/* <FAQ /> */}
        {/* <FinalCTA /> */}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </>
  )
}

export default App
