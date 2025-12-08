import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  title: string;
  description: string;
  wpplink: string;
  img: string;
  closeModal: () => void;
  // Removi todas as propriedades de carrinho e catálogo que não serão usadas
  directToCatalog?: boolean; 
}

// --- VARIANTES DE ANIMAÇÃO ---
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: "-5%" },
  visible: {
    opacity: 1,
    scale: 1,
    y: "0%",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.9, y: "5%" },
};

const Modal: React.FC<ModalProps> = ({ 
  title, 
  description, 
  closeModal, 
  wpplink, 
  img 
}) => {
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-[#c39eb0]/30 relative flex flex-col"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Botão de Fechar */}
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 text-gray-400 hover:text-[#c39eb0] hover:scale-110 transition-transform z-20"
          >
            <X size={24} />
          </button>
          
          {/* Título do Serviço */}
          <h3 className="text-2xl font-bold text-[#c39eb0] mb-4 pr-8">{title}</h3>
          
          {/* Descrição */}
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          
          {/* Imagem do Serviço */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {/* Verifica se tem imagem antes de renderizar para não quebrar */}
            {img && (
                <Image 
                    src={img} 
                    alt={title} 
                    width={400} 
                    height={300} 
                    className="rounded-xl border-4 border-[#faeff4] shadow-lg object-cover w-full max-h-64" 
                />
            )}
          </motion.div>

          {/* Botão do WhatsApp */}
          <div className="mt-auto">
            {wpplink && (
              <a href={wpplink} target="_blank" rel="noopener noreferrer" className="w-full block">
                <motion.button 
                    className="w-full py-3 text-white text-lg font-semibold rounded-xl bg-[#c39eb0] hover:bg-[#b58a9d] transition-colors shadow-md flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                >
                  Agendar ou Tirar Dúvidas
                </motion.button>
              </a>
            )}
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;