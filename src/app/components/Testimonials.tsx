import React from "react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  // Aqui você pode alterar os textos depois
  const reviews = [
    {
      name: "Mariana Silva",
      relation: "Mãe do Pedro (4 anos)",
      text: "A Ana é maravilhosa! Meu filho teve uma evolução incrível na fala em poucos meses. Ela é super atenciosa, carinhosa e o Pedro adora ir para as sessões.",
    },
    {
      name: "Fernanda Oliveira",
      relation: "Mãe da Sofia (2 anos)",
      text: "Profissional excelente. O ambiente é muito acolhedor e lúdico. Ela nos explicou tudo com muita paciência e nos orientou super bem sobre como estimular em casa.",
    },
    {
      name: "Carlos Mendes",
      relation: "Pai do João",
      text: "Eu estava muito preocupado com o atraso na fala do meu filho, mas a Ana nos passou muita segurança desde a avaliação. Recomendo de olhos fechados!",
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Título da Seção */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#c39eb0] mb-12 drop-shadow flex flex-col items-center justify-center gap-2">
          <span>O que dizem os pais</span>
          <div className="w-24 h-1 bg-[#c39eb0] rounded-full mt-2"></div>
        </h2>

        {/* Grid dos Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-[#faeff4] p-8 rounded-2xl shadow-lg border border-[#c39eb0]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Ícone de Aspas */}
              <div className="absolute -top-4 -left-2 bg-white p-2 rounded-full shadow-md">
                <Quote className="text-[#c39eb0] w-6 h-6 fill-[#c39eb0]" />
              </div>

              {/* Estrelas */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Autor */}
              <div className="border-t border-[#c39eb0]/20 pt-4">
                <p className="font-bold text-[#c39eb0]">{review.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{review.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;