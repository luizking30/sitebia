import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
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

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const practiceAreas = [
  'Direito de Família',
  'Direito Sucessório',
  'Direito Imobiliário',
  'Direito do Consumidor',
  'Adoção & Guarda',
  'Mediação & Conciliação',
]

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] border-t border-[#c9a96e]/10">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo size={50} />
              <div className="flex flex-col">
                <span className="font-serif text-lg text-[#c9a96e] leading-none">
                  Dra. Beatriz Amorim
                </span>
                <span className="text-[10px] text-gray-500 tracking-[0.25em] uppercase mt-1">
                  Advocacia & Consultoria
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-light italic mb-4">
              "Direito é sobre pessoas"
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5562993818863?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com/beatrizamorim_advfamilia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#833ab4]/10 to-[#fd1d1d]/10 border border-[#fd1d1d]/30 text-[#fd1d1d] hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white transition-all duration-300"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wide uppercase mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-[#c9a96e] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wide uppercase mb-4">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2.5">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#areas"
                    className="text-gray-500 text-sm hover:text-[#c9a96e] transition-colors duration-300"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wide uppercase mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#c9a96e] mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/5562993818863?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-sm hover:text-[#c9a96e] transition-colors duration-300"
                >
                  (62) 99381-8863
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#c9a96e] mt-0.5 shrink-0" />
                <a
                  href="mailto:contato@beatrizamorim.adv.br"
                  className="text-gray-500 text-sm hover:text-[#c9a96e] transition-colors duration-300"
                >
                  contato@beatrizamorim.adv.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a96e] mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">
                  SHS Quadra 01, Bloco A, Sala 101 — Asa Sul, Brasília/DF
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#c9a96e] mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">
                  Seg - Sex: 9h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Dra. Beatriz Amorim Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-700">
            OAB/DF 000.000 — Conforme o Código de Ética da OAB
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
