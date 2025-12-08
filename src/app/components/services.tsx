import React, { useState } from "react";
import { MessageCircle, Baby, Smile, Brain } from "lucide-react";
import Modal from "./modal";
import ServiceCard from "./ServiceCard";

// REMOVI TODAS AS INTERFACES DE CARTITEM E PROPS VAZIAS

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    wpplink: string;
    img: string;
  } | null>(null);

  const openModal = (title: string, description: string, wpplink: string, img: string) => {
    setModalContent({ title, description, wpplink, img });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div id="services" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#c39eb0] mb-12 drop-shadow flex items-center justify-center gap-2">
          <span>Áreas de Atuação</span>         
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<MessageCircle className="h-10 w-10 text-[#c39eb0]" />}
            title="Fala e Linguagem"
            description="Para crianças que estão demorando a falar, trocam letras ou têm dificuldades de comunicação."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Fala%20e%20Linguagem."
            img="/fala.jpg"
          />
          <ServiceCard
            icon={<Baby className="h-10 w-10 text-[#c39eb0]" />}
            title="Intervenção Precoce"
            description="Estimulação essencial para bebês e crianças pequenas, garantindo o desenvolvimento saudável."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Intervenção%20Precoce."
            img="/galeria2.jpg"
          />
          <ServiceCard
            icon={<Smile className="h-10 w-10 text-[#c39eb0]" />}
            title="Motricidade Orofacial"
            description="Tratamento para funções de respiração, sucção, mastigação, deglutição e fala."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Motricidade."
            img="/motricidade.jpg"
          />
        </div>
      </div>

      {isModalOpen && modalContent && (
        <Modal
          title={modalContent.title}
          description={modalContent.description}
          wpplink={modalContent.wpplink}
          img={modalContent.img}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Services;