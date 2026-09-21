import { MessageCircle, CalendarCheck, Search, Compass, FileCheck, Award } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Primeiro Contato',
    description: 'Chame no WhatsApp e conte um pouco sobre a sua situação. Sem compromisso.',
  },
  {
    icon: CalendarCheck,
    number: '02',
    title: 'Consulta Inicial',
    description: 'Marcamos uma conversa presencial ou online para entender seu caso em detalhes.',
  },
  {
    icon: Search,
    number: '03',
    title: 'Análise do Caso',
    description: 'Estudo a fundo a sua situação, documentos e as melhores estratégias jurídicas.',
  },
  {
    icon: Compass,
    number: '04',
    title: 'Estratégia Definida',
    description: 'Apresento o plano de ação com transparência total sobre prazos e possibilidades.',
  },
  {
    icon: FileCheck,
    number: '05',
    title: 'Acompanhamento',
    description: 'Você acompanha cada etapa do processo com comunicação clara e constante.',
  },
  {
    icon: Award,
    number: '06',
    title: 'Resolução',
    description: 'Seu caso resolvido com a melhor solução possível e total transparência.',
  },
]

function HowItWorks() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="como-funciona" className="py-16 md:py-24 lg:py-32 bg-[#0d0d0d] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            Como Funciona
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Do Primeiro Contato à Solução
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Um processo simples e transparente, pensado para você se sentir
            seguro em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${
            visible ? 'reveal visible' : 'reveal'
          }`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-[#c9a96e]/30 hover:shadow-gold transition-all duration-300 group bg-[#1a1a1a]/50"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step Number */}
                <span className="absolute top-4 right-4 font-serif text-3xl text-[#c9a96e]/10 group-hover:text-[#c9a96e]/20 transition-colors duration-300">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#c9a96e]/20 to-transparent border border-[#c9a96e]/30 mb-5 group-hover:from-[#c9a96e]/30 transition-all duration-300">
                  <Icon size={24} className="text-[#c9a96e]" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg text-white mb-3 group-hover:text-[#c9a96e] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {step.description}
                </p>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
