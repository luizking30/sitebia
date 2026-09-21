import { Quote, Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    name: 'Mariana Souza',
    role: 'Cliente — Direito de Família',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'A Dra. Beatriz me tratou com um carinho e uma atenção que eu nunca havia recebido de um advogado. Ela entendeu minha situação e me guiou em todo o processo com paciência e humanidade.',
  },
  {
    name: 'Carlos Eduardo Lima',
    role: 'Cliente — Direito Sucessório',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'Profissional excepcional. Resolveu o inventário da minha família de forma rápida e transparente. Sempre disponível para tirar dúvidas e explicar cada etapa do processo.',
  },
  {
    name: 'Patrícia Fernandes',
    role: 'Cliente — Divórcio Consensual',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    text: 'Foi o momento mais difícil da minha vida e a Dra. Beatriz tornou tudo mais leve. Atendimento humanizado de verdade — ela se importa com as pessoas, não só com o processo.',
  },
  {
    name: 'Roberto Almeida',
    role: 'Cliente — Direito Imobiliário',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    text: 'Resolveu um problema imobiliário que arrastei por meses. Em poucas semanas tudo estava resolvido. Extremamente competente e ética. Recomendo de olhos fechados.',
  },
  {
    name: 'Juliana Castro',
    role: 'Cliente — Guarda de Filhos',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    text: 'Como mãe, ela entendeu exatamente o que eu estava sentindo. Conseguiu a guarda da minha filha e me deu toda a segurança que eu precisava. Sou eternamente grata.',
  },
  {
    name: 'Fernando Rocha',
    role: 'Cliente — Direito do Consumidor',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80',
    text: 'Tive um problema com uma cobrança indevida que me tirava o sono. A Dra. Beatriz resolveu tudo com agilidade e profissionalismo. Recuperou meu dinheiro e minha tranquilidade.',
  },
]

function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="depoimentos" className="py-16 md:py-24 lg:py-32 bg-[#0d0d0d] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            O Que Dizem Meus Clientes
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            A confiança de quem já passou por aqui é o que mais me motiva.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${
            visible ? 'reveal visible' : 'reveal'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-gray-800 hover:border-[#c9a96e]/30 hover:shadow-gold transition-all duration-300 group bg-[#1a1a1a]/50 p-6 md:p-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote size={32} className="text-[#c9a96e]/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#c9a96e] fill-[#c9a96e]" />
                ))}
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-[#c9a96e]/30"
                />
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-[#c9a96e] transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
