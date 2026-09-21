import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const faqs = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'É muito simples! Basta chamar no WhatsApp e marcar um horário. A primeira conversa serve para eu entender sua situação, responder suas dúvidas iniciais e definir a melhor estratégia para o seu caso. Pode ser presencial ou online.',
  },
  {
    question: 'Vocês atendem online ou apenas presencialmente?',
    answer: 'Atendemos tanto presencialmente em Brasília/DF quanto online para clientes em qualquer estado do Brasil. Todo o processo pode ser conduzido à distância, com a mesma qualidade e segurança.',
  },
  {
    question: 'Preciso de advogado para fazer um inventário?',
    answer: 'Sim, para inventários judiciais a presença de um advogado é obrigatória. Para inventários extrajudiciais (em cartório), também é necessário um advogado para lavrar a escritura. Entre em contato para entender a melhor opção para o seu caso.',
  },
  {
    question: 'Quanto tempo demora um processo de divórcio?',
    answer: 'Depende do tipo. O divórcio consensual (quando ambos concordam) é mais rápido e pode ser feito em cartório. O divórcio litigioso (quando há discordância) leva mais tempo. Cada caso é único — agende uma consulta para avaliar a sua situação.',
  },
  {
    question: 'Como funciona a guarda de filhos após o divórcio?',
    answer: 'A guarda pode ser unilateral, compartilhada ou alternada. O juiz decide com base no melhor interesse da criança. É possível definir visitas, pensão alimentícia e demais questões de forma consensual ou judicial. Entre em contato para entender o que se aplica ao seu caso.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Trabalhamos com diferentes formas de pagamento e planos que se adaptam à realidade de cada cliente. Os valores e condições são definidos após a primeira consulta, de forma transparente e sem surpresas.',
  },
]

function FAQ() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-gradient-dark relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#c9a96e] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            Perguntas Frequentes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Tire Suas Dúvidas
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            As perguntas mais comuns que recebo. Se a sua não está aqui, é só
            chamar no WhatsApp.
          </p>
        </div>

        {/* FAQ List */}
        <div
          ref={ref}
          className={`space-y-4 ${visible ? 'reveal visible' : 'reveal'}`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 hover:border-[#c9a96e]/30 transition-all duration-300 bg-[#1a1a1a]/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
              >
                <span className="text-white text-sm md:text-base font-medium">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#c9a96e] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
