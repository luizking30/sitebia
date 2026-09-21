import { useEffect, useState } from 'react'
import { Award, Heart, Shield } from 'lucide-react'
import aboutImage from '../assets/about-image.png'
import sobreMimImage from '../assets/sobre mim.png'
import { useReveal } from '../hooks/useReveal'

const values = [
  {
    icon: Heart,
    title: 'Humanizada',
    description:
      'Cada caso é único. Atendimento personalizado, ouvindo e compreendendo as necessidades de cada cliente.',
    image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&q=80',
  },
  {
    icon: Shield,
    title: 'Ética',
    description:
      'Atuação com total transparência, sigilo e compromisso com os princípios da advocacia.',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&q=80',
  },
  {
    icon: Award,
    title: 'Excelência',
    description:
      'Dedicação integral e técnica jurídica refinada para garantir os melhores resultados.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
  },
]

function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const images = [aboutImage, sobreMimImage]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Dra. Beatriz Amorim"
                  className={`w-full h-auto object-cover transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                />
              ))}
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
                className="rounded-2xl overflow-hidden border border-gray-800 hover:border-[#c9a96e]/30 hover:shadow-gold transition-all duration-300 group bg-[#1a1a1a]/50"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#c9a96e] to-[#a8895a] shadow-lg">
                    <Icon size={24} className="text-[#1a1a1a]" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center p-6 md:p-8">
                  <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#c9a96e] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light">
                    {value.description}
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

export default About
