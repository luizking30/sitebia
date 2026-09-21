import { Heart, Award, Users, Clock, Baby } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    icon: Award,
    title: '5 Anos de Experiência',
    description: 'Cinco anos dedicados ao Direito de Família, com mais de 100 casos resolvidos com sucesso.',
  },
  {
    icon: Baby,
    title: 'Mãe e Mulher',
    description: 'Mãe divorciada de uma filha de 10 anos. Entendo na prática o que é proteger uma família.',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Cada cliente é recebido com empatia, respeito e dedicação. Direito é sobre pessoas — e cada pessoa importa.',
  },
  {
    icon: Users,
    title: 'Mais de 100 Casos Resolvidos',
    description: 'Histórias de famílias que encontraram soluções, paz e segurança através de um trabalho sério e comprometido.',
  },
  {
    icon: Clock,
    title: 'Resposta Rápida',
    description: 'Disponibilidade e comunicação constante. Você sempre sabe o que está acontecendo com o seu caso.',
  },
]

function WhyChooseMe() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="por-que" className="py-16 md:py-24 lg:py-32 bg-gradient-dark relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            Por Que Me Escolher
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Mais Que Uma Advogada
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Não é só sobre processos e leis. É sobre entender a sua história e
            lutar por você com dedicação integral.
          </p>
        </div>

        {/* Reasons Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${
            visible ? 'reveal visible' : 'reveal'
          }`}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-gray-800 hover:border-[#c9a96e]/30 hover:shadow-gold transition-all duration-300 group bg-[#1a1a1a]/50 p-6 md:p-8 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#c9a96e]/20 to-transparent border border-[#c9a96e]/30 mx-auto mb-6 group-hover:from-[#c9a96e]/30 transition-all duration-300">
                  <Icon size={28} className="text-[#c9a96e]" />
                </div>
                <h3 className="font-serif text-xl text-white mb-4 group-hover:text-[#c9a96e] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMe
