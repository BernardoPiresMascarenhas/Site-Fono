"use client"
import { motion } from "framer-motion"

const BotaoAgendamento = () => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 112; 
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.a
      href="#contact"
      onClick={(e) => scrollToSection(e, "contact")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#c39eb0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#c39eb0] transition-colors inline-block"
    >
      Agende uma Consulta
    </motion.a>
  );
};

export default BotaoAgendamento;
