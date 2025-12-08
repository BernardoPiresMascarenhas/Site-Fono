import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  wpplink: string;
  img: string;
  // Atualizei a assinatura da função para remover o directToCatalog
  openModal: (title: string, description: string, wpplink: string, img: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  openModal,
  wpplink,
  img,
}) => {
  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-lg border border-[#cdabbb] hover:border-[#b58a9d] transition-all duration-300 transform hover:scale-105 cursor-pointer group"
      // Aqui removemos o 5º argumento que não existe mais
      onClick={() => openModal(title, description, wpplink, img)}
    >
      {/* Círculo do ícone com fundo suave */}
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#faeff4] mb-4 group-hover:bg-[#f3e6ed] transition-colors">
        {/* Ícone na cor da borda */}
        <div className="text-[#cdabbb] text-2xl">{icon}</div>
      </div>
      
      {/* Título na cor principal (Rosa) para leitura melhor */}
      <h3 className="text-xl font-bold text-[#c39eb0] mb-2">{title}</h3>
      
      <p className="text-gray-500 text-sm">Clique para saber mais!</p>
    </div>
  );
};

export default ServiceCard;