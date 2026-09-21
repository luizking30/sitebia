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
    value: 'SHS Quadra 01, Bloco A, Sala 101 — Asa Sul, Brasília/DF',
    href: 'https://maps.google.com/?q=Brasilia+DF',
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

        {/* Location & Online Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 h-64 md:h-72">
            <iframe
              title="Localização - Brasília DF"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30757.6479!2d-47.8828!3d-15.7939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b1b%3A0x0!2sBras%C3%ADlia%2C%20DF!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) invert(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Online Service Info */}
          <div className="flex flex-col justify-center p-6 md:p-8 rounded-2xl border border-gray-800 bg-[#1a1a1a]/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#c9a96e]/20 to-transparent border border-[#c9a96e]/30">
                <MapPin size={22} className="text-[#c9a96e]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white">Atendimento</h3>
                <p className="text-gray-500 text-sm">Presencial e Online</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">
              Atendimento presencial em Brasília/DF e online para clientes em
              qualquer estado do Brasil. Não importa onde você esteja — sua
              causa será tratada com a mesma dedicação.
            </p>
            <a
              href="https://maps.google.com/?q=Brasilia+DF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a96e] text-sm tracking-wide hover:gap-3 transition-all duration-300 inline-flex items-center gap-2"
            >
              Ver no mapa
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
