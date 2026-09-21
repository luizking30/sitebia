import { MessageCircle } from 'lucide-react'
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

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] py-12 border-t border-[#c9a96e]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo + Name */}
          <div className="flex items-center gap-3 mb-6">
            <Logo size={60} />
            <div className="flex flex-col items-start">
              <span className="font-serif text-lg text-[#c9a96e] leading-none">
                Dra. Beatriz Amorim
              </span>
              <span className="text-[10px] text-gray-500 tracking-[0.25em] uppercase mt-1">
                Advocacia & Consultoria
              </span>
            </div>
          </div>

          <p className="text-gray-500 text-sm font-light italic mb-6 max-w-md">
            "Direito é sobre pessoas"
          </p>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            <a href="#inicio" className="nav-underline text-sm text-gray-400 hover:text-[#c9a96e] transition-colors duration-300">
              Início
            </a>
            <a href="#sobre" className="nav-underline text-sm text-gray-400 hover:text-[#c9a96e] transition-colors duration-300">
              Sobre
            </a>
            <a href="#areas" className="nav-underline text-sm text-gray-400 hover:text-[#c9a96e] transition-colors duration-300">
              Áreas de Atuação
            </a>
            <a href="#contato" className="nav-underline text-sm text-gray-400 hover:text-[#c9a96e] transition-colors duration-300">
              Contato
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://wa.me/5562993818863"
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

          <div className="w-16 h-px bg-gradient-gold mb-6" />

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Dra. Beatriz Amorim Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-700 mt-2">
            OAB/DF 000.000 — Conforme o Código de Ética da OAB
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
