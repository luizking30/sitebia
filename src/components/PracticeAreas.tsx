import { Users, FileText, Home, ShoppingCart, Baby, HeartHandshake } from 'lucide-react'

const areas = [
  {
    icon: Users,
    title: 'Direito de Família',
    description:
      'Divórcio, guarda de filhos, pensão alimentícia, união estável e dissolução de casamento.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
  },
  {
    icon: FileText,
    title: 'Direito Sucessório',
    description:
      'Inventários, testamentos, heranças, partilha de bens e planejamento sucessório.',
    image: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=600&q=80',
  },
  {
    icon: Home,
    title: 'Direito Imobiliário',
    description:
      'Contratos de compra e venda, locação, regularização de imóveis e disputas imobiliárias.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    icon: ShoppingCart,
    title: 'Direito do Consumidor',
    description:
      'Defesa do consumidor, cobranças indevidas, vícios em produtos e serviços, indenizações.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80',
  },
  {
    icon: Baby,
    title: 'Adoção & Guarda',
    description:
      'Processos de adoção, regulamentação de guarda, visitas e modificação de guarda.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
  },
  {
    icon: HeartHandshake,
    title: 'Mediação & Conciliação',
    description:
      'Solução de conflitos por vias alternativas, mediação familiar e acordos extrajudiciais.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  },
]

function PracticeAreas() {
  return (
    <section id="areas" className="py-16 md:py-24 lg:py-32 bg-[#0d0d0d] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            Especialidades
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Áreas de Atuação
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Atuação especializada em diversas áreas do direito, sempre com
            foco em soluções eficazes e humanizadas.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="group rounded-2xl overflow-hidden bg-[#1a1a1a] border border-transparent hover:border-[#c9a96e]/20 hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#c9a96e] to-[#a8895a] shadow-lg">
                    <Icon size={20} className="text-[#1a1a1a]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-xl text-white mb-3 group-hover:text-[#c9a96e] transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light text-sm">
                    {area.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
