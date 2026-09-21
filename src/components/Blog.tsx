import { useState, useEffect } from 'react'
import { BookOpen, ArrowRight, X } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const articles = [
  {
    title: 'Como Funciona a Guarda Compartilhada?',
    summary: 'Entenda como funciona a guarda compartilhada, quais os direitos e deveres dos pais e como ela beneficia as crianças após o divórcio.',
    image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&q=80',
    tag: 'Direito de Família',
    content: [
      'A guarda compartilhada é o regime em que ambos os pais participam ativamente das decisões sobre a vida dos filhos, mesmo após a separação. Foi instituída como regra no Brasil pela Lei 13.058/2014.',
      'Na guarda compartilhada, as decisões importantes — como escola, saúde, religião e atividades — são tomadas em conjunto. A criança não perde o convívio com nenhum dos pais, o que é fundamental para seu desenvolvimento emocional.',
      'É importante destacar que guarda compartilhada não significa que a criança divide o tempo igualmente entre os pais. A definição da moradia da criança é estabelecida de acordo com o melhor interesse do menor, podendo ficar mais tempo com um dos genitores.',
      'A pensão alimentícia continua sendo devida, independentemente do tipo de guarda. O valor é calculado com base nas necessidades da criança e na capacidade financeira de quem paga.',
      'Se você está passando por um processo de separação e tem filhos, busque orientação jurídica especializada para garantir que os direitos das crianças — e os seus — sejam protegidos.',
    ],
  },
  {
    title: 'Inventário: O Que É e Como Funciona',
    summary: 'Um guia simples sobre o processo de inventário, prazos, documentos necessários e a diferença entre inventário judicial e extrajudicial.',
    image: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=600&q=80',
    tag: 'Direito Sucessório',
    content: [
      'O inventário é o processo legal que ocorre após o falecimento de uma pessoa, para identificar e partilhar seus bens entre os herdeiros. É obrigatório, mesmo que a pessoa não tenha deixado bens.',
      'Existem dois tipos de inventário: o judicial, que tramita na justiça, e o extrajudicial, que é feito em cartório. O extrajudicial é mais rápido e barato, mas exige que todos os herdeiros sejam maiores, capazes e estejam de acordo com a partilha.',
      'O prazo legal para abertura do inventário é de 60 dias a contar do falecimento. Após esse prazo, há incidência de multa sobre o imposto (ITCMD), que varia conforme o estado.',
      'Os documentos necessários incluem: certidão de óbito, documentos pessoais do falecido e herdeiros, certidões de casamento/nascimento, testamento (se houver), documentos dos bens (imóveis, veículos, contas bancárias), e comprovantes de dívidas.',
      'A partilha dos bens pode ser feita de forma consensual (todos concordam) ou litigiosa (há discordância). Em ambos os casos, é fundamental ter um advogado para garantir que tudo seja feito corretamente.',
    ],
  },
  {
    title: 'Divórcio Consensual x Litigioso',
    summary: 'Qual a diferença entre os dois tipos de divórcio? Quando escolher um ou outro? Entenda as vantagens e desvantagens de cada modalidade.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    tag: 'Direito de Família',
    content: [
      'O divórcio consensual ocorre quando ambos os cônjuges estão de acordo com a separação e com todas as condições: partilha de bens, guarda dos filhos, pensão alimentícia e uso do nome.',
      'O divórcio litigioso acontece quando há discordância sobre algum aspecto da separação. Nesse caso, um juiz decide as questões controversas após a apresentação de provas e argumentos de ambas as partes.',
      'O divórcio consensual é significativamente mais rápido, mais barato e menos desgastante emocionalmente. Pode ser feito judicialmente ou em cartório (extrajudicial), se não houver filhos menores.',
      'O divórcio litigioso leva mais tempo, costuma ser mais caro e gera maior desgaste emocional. No entanto, é a única opção quando uma das partes não concorda ou quando há situações que precisam ser decididas pelo juiz.',
      'Sempre que possível, a recomendação é buscar o divórcio consensual. A mediação e a conciliação são ferramentas poderosas para resolver conflitos de forma amigável, especialmente quando há filhos envolvidos.',
    ],
  },
  {
    title: 'Direitos do Consumidor: Como Se Defender',
    summary: 'Produtos com defeito, cobranças indevidas, serviços mal prestados. Saiba quais são os seus direitos e como exigir o que é seu.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80',
    tag: 'Direito do Consumidor',
    content: [
      'O Código de Defesa do Consumidor (CDC) é a lei que protege os consumidores nas relações de consumo. Ele estabelece direitos e deveres tanto para consumidores quanto para fornecedores de produtos e serviços.',
      'Se um produto apresentar defeito, o consumidor tem direito a escolher entre: reparo do produto, substituição por outro igual, abatimento proporcional do preço ou devolução do valor pago. O prazo para reclamar de vícios aparentes é de 30 dias (produtos não duráveis) ou 90 dias (duráveis).',
      'Em caso de cobrança indevida, o consumidor pode exigir a devolução em dobro do que pagou indevidamente, conforme o art. 42 do CDC. Isso inclui cobranças por serviços não contratados ou valores indevidos.',
      'Serviços mal prestados também dão direito a reparação. Se o serviço não foi executado conforme o combinado, o consumidor pode exigir reexecução, abatimento do preço ou devolução do valor.',
      'Para resolver conflitos de consumo, o primeiro passo é tentar resolver diretamente com o fornecedor. Se não houver solução, é possível registrar uma reclamação no Procon ou buscar um advogado para ingressar com ação judicial.',
    ],
  },
]

function Blog() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  useEffect(() => {
    if (selectedArticle !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedArticle])

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
              onClick={() => setSelectedArticle(index)}
              className="rounded-2xl overflow-hidden border border-gray-800 hover:border-[#c9a96e]/30 hover:shadow-gold transition-all duration-300 group bg-[#1a1a1a]/50 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
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

      {/* Modal */}
      {selectedArticle !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative z-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl border border-[#c9a96e]/20 bg-[#1a1a1a] shadow-gold-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-[#1a1a1a]/80 border border-gray-700 text-gray-400 hover:text-[#c9a96e] hover:border-[#c9a96e]/30 transition-all duration-300"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Article Image */}
            <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
              <img
                src={articles[selectedArticle].image}
                alt={articles[selectedArticle].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] text-[#c9a96e] tracking-widest uppercase bg-[#1a1a1a]/80 px-3 py-1 rounded-full border border-[#c9a96e]/20">
                {articles[selectedArticle].tag}
              </span>
            </div>

            {/* Article Body */}
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={16} className="text-[#c9a96e]/60" />
                <span className="text-xs text-gray-600 tracking-wide uppercase">
                  Artigo Jurídico
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-snug">
                {articles[selectedArticle].title}
              </h2>
              <div className="w-16 h-px bg-gradient-gold mb-6" />
              <div className="space-y-4">
                {articles[selectedArticle].content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-gray-400 text-sm md:text-base leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-gray-500 text-sm font-light mb-4">
                  Tem dúvidas sobre este assunto? Entre em contato e agende uma
                  consulta.
                </p>
                <a
                  href="#contato"
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-2 bg-gradient-gold text-[#1a1a1a] rounded-full px-6 py-3 text-sm tracking-wide font-medium hover:shadow-gold-lg transition-all duration-300"
                >
                  Agendar Consulta
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog
