import { useState, useEffect } from 'react'
import { MessageCircle, ArrowUp } from 'lucide-react'

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
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

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top */}
      {showTop && (
        <div className="group relative animate-fade-in">
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass rounded-full px-4 py-2 text-xs text-white border border-[#c9a96e]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            Voltar ao topo
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#c9a96e]/30 hover:scale-110 transition-all duration-300 bg-[#1a1a1a] border border-[#c9a96e]/30 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1a1a1a]"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      )}

      {/* WhatsApp */}
      <div className="group relative">
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass rounded-full px-4 py-2 text-xs text-white border border-[#c9a96e]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          Fale no WhatsApp
        </span>
        <a
          href="https://wa.me/5562993818863?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 hover:bg-[#1da851] transition-all duration-300"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Instagram */}
      <div className="group relative">
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass rounded-full px-4 py-2 text-xs text-white border border-[#c9a96e]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          Siga no Instagram
        </span>
        <a
          href="https://instagram.com/beatrizamorim_advfamilia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#c9a96e]/30 hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white"
        >
          <InstagramIcon size={24} />
        </a>
      </div>
    </div>
  )
}

export default FloatingButtons
