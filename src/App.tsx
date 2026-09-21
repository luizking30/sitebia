import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import PracticeAreas from './components/PracticeAreas'
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
        <PracticeAreas />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
