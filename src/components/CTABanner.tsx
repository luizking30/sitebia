import { MessageCircle } from 'lucide-react'

function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#c9a96e]/10 via-[#1a1a1a] to-[#c9a96e]/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#c9a96e]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#c9a96e]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          Pronta para resolver o seu caso?
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light mb-8">
          Não deixe para depois o que pode ser resolvido hoje. Agende sua
          consulta e dê o primeiro passo.
        </p>
        <a
          href="https://wa.me/5562993818863?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-gold text-[#1a1a1a] rounded-full px-10 py-4 text-sm tracking-wide font-medium hover:shadow-gold-lg transition-all duration-300"
        >
          <MessageCircle size={20} />
          Agendar Consulta pelo WhatsApp
        </a>
      </div>
    </section>
  )
}

export default CTABanner
