import { Scale, ChevronDown } from 'lucide-react'
import heroBanner from '../assets/hero-banner.png'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden"
    >
      {/* Mobile: Text on top, Image below / Desktop: Image as background */}
      {/* Background image - desktop only as overlay, mobile as block */}
      <img
        src={heroBanner}
        alt="Dra. Beatriz Amorim - Advogada"
        className="md:absolute md:inset-0 md:w-full md:h-full md:object-cover md:object-center w-full h-[55vh] object-cover object-center order-2 md:order-none"
      />

      {/* Dark overlay gradient - desktop only */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />

      {/* Mobile dark overlay on image */}
      <div className="md:hidden absolute top-0 left-0 right-0 h-[55vh] bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:pl-20 lg:pl-32 max-w-2xl pt-28 pb-8 md:py-0 animate-fade-in-up order-1 md:order-none">
        {/* Icon */}
        <div className="flex mb-6 md:mb-8">
          <div className="w-14 h-14 md:w-16 md:h-16 border border-[#c9a96e]/40 rounded-full flex items-center justify-center backdrop-blur-sm shadow-gold">
            <Scale size={26} className="text-[#c9a96e]" />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">
          Advocacia & Consultoria Jurídica
        </p>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-5 md:mb-6 drop-shadow-lg">
          Direito é sobre
          <br />
          <span className="text-gradient-gold italic">pessoas</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-8 md:mb-10 font-light drop-shadow-md">
          Uma advocacia humanizada, comprometida com a ética e dedicada a
          encontrar as melhores soluções jurídicas para cada cliente.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a
            href="#contato"
            className="bg-gradient-gold text-[#1a1a1a] rounded-full px-8 py-3.5 text-sm tracking-wide font-medium hover:shadow-gold-lg transition-all duration-300 text-center"
          >
            Agende uma Consulta
          </a>
          <a
            href="#areas"
            className="border border-gray-400/40 text-white rounded-full px-8 py-3.5 text-sm tracking-wide hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300 backdrop-blur-sm text-center"
          >
            Áreas de Atuação
          </a>
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 animate-bounce-slow">
        <span className="text-xs text-gray-400 tracking-widest uppercase">
          Role para baixo
        </span>
        <ChevronDown size={20} className="text-[#c9a96e]/60" />
      </div>
    </section>
  )
}

export default Hero
