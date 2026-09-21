import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseMe from './components/WhyChooseMe'
import PracticeAreas from './components/PracticeAreas'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseMe />
        <PracticeAreas />
        <HowItWorks />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
