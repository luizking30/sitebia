import { Award, Heart, Shield } from 'lucide-react'
import aboutImage from '../assets/about-image.png'
import { useReveal } from '../hooks/useReveal'

const values = [
  {
    icon: Heart,
    title: 'Humanizada',
    description:
      'Cada caso é único. Atendimento personalizado, ouvindo e compreendendo as necessidades de cada cliente.',
  },
  {
    icon: Shield,
    title: 'Ética',
    description:
      'Atuação com total transparência, sigilo e compromisso com os princípios da advocacia.',
  },
  {
    icon: Award,
    title: 'Excelência',
    description:
      'Dedicação integral e técnica jurídica refinada para garantir os melhores resultados.',
  },
]

function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-gradient-dark relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Me - Image + Text */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24 ${
            visible ? 'reveal visible' : 'reveal'
          }`}
        >
          {/* Image */}
          <div className="relative order-1 md:order-1">
            {/* Gradient block behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-[#c9a96e]/20 to-transparent hidden md:block" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-gold-lg">
              <img
                src={aboutImage}
                alt="Dra. Beatriz Amorim"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute z-20 bottom-4 right-4 md:bottom-6 md:right-6 glass rounded-full px-5 py-2.5 border border-[#c9a96e]/30 shadow-lg">
              <span className="text-xs text-[#c9a96e] tracking-widest uppercase font-medium">
                OAB/DF
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-2">
            <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
              Sobre Mim
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Dra. Beatriz Amorim
            </h2>
            <div className="w-16 h-px bg-gradient-gold mb-8" />
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-6">
              Advogada com sólida experiência em Direito de Família e Sucessões,
              dedicada a oferecer um atendimento jurídico humanizado e
              personalizado.
            </p>
            <p className="text-gray-500 text-base leading-relaxed font-light mb-8">
              Acreditando que o direito vai muito além das leis — ele trata de
              pessoas, suas histórias e seus direitos. Cada cliente é recebido
              com empatia e respeito, garantindo uma atuação ética e
              comprometida com as melhores soluções.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-gradient-gold text-[#1a1a1a] rounded-full px-8 py-3 text-sm tracking-wide font-medium hover:shadow-gold-lg transition-all duration-300"
            >
              Agende uma Consulta
            </a>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl border border-gray-800 hover:border-[#c9a96e]/30 hover:shadow-gold transition-all duration-300 group bg-[#1a1a1a]/50"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#c9a96e]/20 to-transparent border border-[#c9a96e]/30 group-hover:from-[#c9a96e]/30 transition-all duration-300">
                  <Icon size={24} className="text-[#c9a96e]" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
