import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual a idade ideal para começar a fonoaudiologia?",
      answer: "Não existe idade mínima. A intervenção precoce é fundamental! Se você notar qualquer atraso na fala ou dificuldade de alimentação no seu bebê, procure avaliação imediatamente."
    },
    {
      question: "Você atende por convênio ou plano de saúde?",
      answer: "Atualmente os atendimentos são particulares. Porém, emito recibo e relatório para que você possa solicitar o reembolso junto ao seu plano de saúde."
    },
    {
      question: "Quanto tempo dura uma sessão?",
      answer: "As sessões têm duração média de 30 a 40 minutos, dependendo da necessidade específica de cada paciente e do planejamento terapêutico."
    },
    {
      question: "Onde é o consultório?",
      answer: "O consultório fica localizado no bairro Floresta, em Belo Horizonte. Um ambiente preparado e lúdico para receber as crianças."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq"className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-[#c39eb0] mb-8">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-purple-100 rounded-lg overflow-hidden shadow-sm">
              <button
                className="w-full flex justify-between items-center p-5 bg-purple-50 hover:bg-purple-100 transition-colors text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-700">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#c39eb0]" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white text-gray-600 border-t border-purple-50 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;