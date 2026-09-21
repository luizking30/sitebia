import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '(62) 99381-8863',
    href: 'https://wa.me/5562993818863',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@beatrizamorim.adv.br',
    href: 'mailto:contato@beatrizamorim.adv.br',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Brasília, DF',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg - Sex: 9h às 18h',
    href: '#',
  },
]

function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 bg-gradient-dark relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            Contato
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Vamos Conversar
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Entre em contato para agendar uma consulta. Sua história importa e
            estou aqui para ajudar.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {contactInfo.map((info) => {
            const Icon = info.icon
            return (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-800 hover:border-[#c9a96e]/30 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group bg-[#1a1a1a]/50"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#c9a96e]/20 to-transparent border border-[#c9a96e]/30 mb-4 group-hover:from-[#c9a96e]/30 transition-all duration-300">
                  <Icon size={22} className="text-[#c9a96e]" />
                </div>
                <span className="text-xs text-gray-500 tracking-widest uppercase mb-2">
                  {info.label}
                </span>
                <span className="text-sm text-gray-300">{info.value}</span>
              </a>
            )
          })}
        </div>

        {/* WhatsApp & Instagram Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5562993818863"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-full px-8 py-4 text-sm tracking-wide font-medium hover:bg-[#1da851] hover:shadow-lg hover:shadow-[#25D366]/40 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
          <a
            href="https://instagram.com/beatrizamorim_advfamilia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm tracking-wide font-medium text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:shadow-lg hover:shadow-[#fd1d1d]/30 transition-all duration-300"
          >
            <InstagramIcon size={20} />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
