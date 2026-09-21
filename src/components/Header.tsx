import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass border-b border-[#c9a96e]/10 ${
        scrolled ? 'py-3 shadow-lg shadow-black/30' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - Monogram BA + Name */}
        <a href="#inicio" className="flex items-center gap-3">
          <Logo size={60} />
          <div className="flex flex-col">
            <span className="font-serif text-xl text-[#c9a96e] tracking-wide leading-none">
              Dra. Beatriz Amorim
            </span>
            <span className="text-[10px] text-gray-400 tracking-[0.25em] uppercase mt-1">
              Advocacia & Consultoria
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-underline text-sm text-gray-300 hover:text-[#c9a96e] transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-gradient-gold text-[#1a1a1a] rounded-full px-6 py-2.5 text-sm tracking-wide font-medium hover:shadow-gold-lg transition-all duration-300"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#c9a96e]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden glass absolute top-full left-0 right-0 flex flex-col items-center gap-6 py-8 border-t border-[#c9a96e]/20 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-[#c9a96e] transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-gold text-[#1a1a1a] rounded-full px-6 py-2.5 text-sm tracking-wide font-medium"
          >
            Agendar Consulta
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
