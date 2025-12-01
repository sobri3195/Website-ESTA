import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BusinessUnits from './components/BusinessUnits'
import Values from './components/Values'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <BusinessUnits />
      <Values />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
