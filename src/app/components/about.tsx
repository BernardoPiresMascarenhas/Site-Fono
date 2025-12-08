"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import React, { useRef } from "react";

const AboutUs = () => {
  // Referência para o player 360 (opcional, mas bom ter)
  const photoSphereRef = useRef(null);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE 1: FOTO DE PERFIL E TEXTO */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Imagem à esquerda (Foto dela) */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Lembre de trocar '/sobrenos.png' pela foto dela sorrindo */}
            <Image
              src="/sobrenos.png" 
              alt="Fonoaudióloga Ana Luiza Mascarenhas"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl border-4 border-[#c39eb0] object-cover"
            />
          </motion.div>

          {/* Título e textos à direita */}
          <div className="flex flex-col justify-center">
            <motion.h2
              className="text-4xl font-extrabold text-[#c39eb0] mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Sobre
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Com paixão pelo desenvolvimento humano e comunicação, atuo como fonoaudióloga dedicada a transformar vidas através da fala e da escuta. Minha missão vai além do consultório: busco acolher cada paciente e sua família com um olhar individualizado.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mt-4 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Cada atendimento é planejado com responsabilidade, base científica e muito afeto. Acredito que um ambiente seguro e estimulante é a chave para desbloquear o potencial de cada criança ou adulto que passa por aqui.
            </motion.p>
          </div>
        </motion.div>

        {/* PARTE 2: TOUR VIRTUAL 360 GRAUS */}
        <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h3 className="text-2xl font-bold text-[#c39eb0] mb-6 text-center">
                Conheça nosso espaço
            </h3>
            <p className="text-center text-gray-500 mb-4 text-sm">
                (Clique e arraste na imagem abaixo para olhar ao redor)
            </p>

            {/* Container do 360 */}
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border-2 border-purple-100 relative z-10">
                <ReactPhotoSphereViewer 
                    ref={photoSphereRef}
                    src="/consultorio360.jpg" 
                    height={'100%'}
                    width={'100%'}
                    container={""}
                    littlePlanet={false}
                />
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;