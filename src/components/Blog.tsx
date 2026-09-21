import { BookOpen, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const articles = [
  {
    title: 'Como Funciona a Guarda Compartilhada?',
    summary: 'Entenda como funciona a guarda compartilhada, quais os direitos e deveres dos pais e como ela beneficia as crianças após o divórcio.',
    image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&q=80',
    tag: 'Direito de Família',
  },
  {
    title: 'Inventário: O Que É e Como Funciona',
    summary: 'Um guia simples sobre o processo de inventário, prazos, documentos necessários e a diferença entre inventário judicial e extrajudicial.',
    image: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=600&q=80',
    tag: 'Direito Sucessório',
  },
  {
    title: 'Divórcio Consensual x Litigioso',
    summary: 'Qual a diferença entre os dois tipos de divórcio? Quando escolher um ou outro? Entenda as vantagens e desvantagens de cada modalidade.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    tag: 'Direito de Família',
  },
  {
    title: 'Direitos do Consumidor: Como Se Defender',
    summary: 'Produtos com defeito, cobranças indevidas, serviços mal prestados. Saiba quais são os seus direitos e como exigir o que é seu.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80',
    tag: 'Direito do Consumidor',
  },
]

function Blog() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32 bg-[#0d0d0d] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            Blog Jurídico
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Conhecimento Que Protege
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Artigos simples e diretos sobre os seus direitos. Informação que
            faz a diferença no momento certo.
          </p>
        </div>

        {/* Articles Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
            visible ? 'reveal visible' : 'reveal'
          }`}
        >
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="rounded-2xl overflow-hidden border border-gray-800 hover:border-[#c9a96e]/30 hover:shadow-gold transition-all duration-300 group bg-[#1a1a1a]/50 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] text-[#c9a96e] tracking-widest uppercase bg-[#1a1a1a]/80 px-3 py-1 rounded-full border border-[#c9a96e]/20">
                  {article.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} className="text-[#c9a96e]/60" />
                  <span className="text-xs text-gray-600">Artigo</span>
                </div>
                <h3 className="font-serif text-lg text-white mb-3 group-hover:text-[#c9a96e] transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">
                  {article.summary}
                </p>
                <div className="flex items-center gap-2 text-[#c9a96e] text-xs tracking-wide group-hover:gap-3 transition-all duration-300">
                  Ler mais
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
