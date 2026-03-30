import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Services from './components/Services'
import Process from './components/Process'
import CaseStudy from './components/CaseStudy'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Process />
      <CaseStudy />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  )
}
