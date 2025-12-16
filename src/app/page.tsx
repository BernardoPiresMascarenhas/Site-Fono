"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import AboutUs from "./components/about";
import Gallery from "./components/gallery";
import InstagramFeed from "./components/SocialFeed";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Image from 'next/image';

import FormularioContato from "@/app/components/FormularioContato";
import PromoModal from "./components/PromoModal"; 
import { InstagramLogo, TiktokLogo} from "@phosphor-icons/react";


interface CartItem {
  id: number;
  name: string;
  image: string;
  available: boolean;
  price: string;
  category: string;
  onSale: boolean;
  onNovo: boolean;
  quantity: number;
}

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 112; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

function App() {

  const PROMO_START_DATE = new Date('2025-09-01T00:00:00'); 
  const PROMO_END_DATE = new Date('2025-09-07T23:59:59');

  const now = new Date();
  const isPromoPeriodActive = now >= PROMO_START_DATE && now <= PROMO_END_DATE;

  const [showPromo, setShowPromo] = useState(false);      
  const [minimized, setMinimized] = useState(false);      
  

  useEffect(() => {
  
    if (isPromoPeriodActive) {
      const timer = setTimeout(() => {
        setShowPromo(true); 
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isPromoPeriodActive]); 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Promo Modal */}
      {showPromo && (
        <PromoModal
          onClose={() => {
            setShowPromo(false);
            setMinimized(true);
          }}
          onWhatsApp={() => {
            window.open("https://wa.me/553195306014?text=Olá,%20quero%20ver%20as%20promoções!", "_blank");
            setShowPromo(false);
            setMinimized(true);
          }}
        />
      )}

      {/* Container Flexbox para alinhar os botões flutuantes */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-between items-center pointer-events-none z-50">
        <div className="pointer-events-auto"> 
          {minimized && !showPromo && (
            <button
              onClick={() => {
                setShowPromo(true);
                setMinimized(false);
              }}
              className="p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/promo-icon.png"
                alt="Promoção"
                width={100}
                height={100}
                className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
              />
            </button>
          )}
        </div>
        <a
          href="https://wa.me/553183413645?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-110 pointer-events-auto"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={48}
            height={48}
          />
        </a>
      </div>

      <Header />
      <Hero />

      <Services />
      
      <AboutUs />
      <Testimonials />
      <InstagramFeed />
      <Gallery />
      <FAQ />
      <div id="contact" className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
      {/* Coluna da Esquerda: Informações e Mapa */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Entre em Contato
          </h2>      

        {/* NOVO BLOCO DO MAPA */}
        <div className="mt-10 h-80 w-full overflow-hidden rounded-lg shadow-xl">
          <iframe
            className="h-full w-full"
            src="https://maps.google.com/maps?q=R.+Pouso+Alegre,+657+-+Horto,+Belo+Horizonte+-+MG,+31110-010&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Consultório"
          ></iframe>
        </div>
        {/* FIM DO BLOCO DO MAPA */}
          <div className="mt-8 space-y-6">
            <ContactInfo
              icon={<MapPin />}
              text="R. Pouso Alegre, 657 - Horto, Belo Horizonte - MG, 31110-010"
            />
            <ContactInfo icon={<Phone />} text="(31) 98341-3645" />
            <ContactInfo icon={<Clock />} text="Seg-Sex: 9h às 19h" />
          </div>
        </div>
        
      </div>

      {/* Coluna da Direita: Formulário */}
      <div className="mt-10 lg:mt-0">
        <p className="text-gray-600 mb-6 text-base leading-relaxed">
          Tem alguma dúvida ou quer agendar um horário? Preencha os campos
          abaixo e entraremos em contato o mais breve possível.
        </p>
        <FormularioContato />
      </div>
    </div>
  </div>
</div>

      <footer className="bg-[#9eb8ba] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* COLUNA 1: LOGO E DESCRIÇÃO */}
            <div className="flex flex-col items-center md:items-start">
              <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="mb-4">
                <Image 
                  src="/logo2.png" 
                  alt="Ana Luiza Mascarenhas Fonoaudióloga" 
                  width={320} 
                  height={320}
                  priority 
                />
              </a>
              <p className="text-sm max-w-xs text-gray-700">
                Fonoaudiologia humanizada e especializada. Cuidando do desenvolvimento da comunicação com todo amor e carinho que você merece.
              </p>
            </div>

            {/* COLUNA 2: NAVEGAÇÃO */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 tracking-wider uppercase mb-4">
                Navegação
              </h3>
              <ul className="space-y-2">
                <li><a href="#home" onClick={(e) => scrollToSection(e, "home")} className="text-gray-700 transition-colors hover:text-[#fcf8f9]">Home</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, "services")} className="text-gray-700 transition-colors hover:text-[#fcf8f9]">Atuação</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-gray-700 transition-colors hover:text-[#fcf8f9]">Sobre</a></li>
                <li><a href="#social-feed" onClick={(e) => scrollToSection(e, "social-feed")} className="text-gray-700 transition-colors hover:text-[#fcf8f9]">Feed</a></li>
                <li><a href="#gallery" onClick={(e) => scrollToSection(e, "gallery")} className="text-gray-700 transition-colors hover:text-[#fcf8f9]">Galeria</a></li>
                <li><a href="#faq" onClick={(e) => scrollToSection(e, "faq")} className="text-gray-700 transition-colors hover:text-[#fcf8f9]">Dúvidas</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-gray-700 transition-colors hover:text-[#fcf8f9]">Contato</a></li>       
              </ul>
            </div>

            {/* COLUNA 3: CONTATO */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 tracking-wider uppercase mb-4">
                Contato
              </h3>
              <ul className="space-y-2 text-gray-700 ">
                <li><p>R. Pouso Alegre, 657 - Horto, Belo Horizonte - MG, 31110-010</p></li>
                {/* Atualize o email abaixo quando tiver o definitivo */}
                <li><a href="mailto:fonoanamascarenhas@hotmail.com" className="hover:text-[#fcf8f9] transition-colors">fonoanamascarenhas@hotmail.com</a></li>
                <li><a href="tel:+5531983413645" className="hover:text-[#fcf8f9] transition-colors">(31) 98341-3645</a></li>
              </ul>
              
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                  {/* Link do Instagram Atualizado */}
                  <a href="https://www.instagram.com/fonoanamascarenhas" target="_blank" rel="noopener noreferrer">
                    <InstagramLogo className="w-7 h-7 text-white hover:text-[#fcf8f9] transition-transform duration-300 transform hover:scale-110" />
                  </a>   
                  <a href="https://www.tiktok.com/@fono.anamascarenhas" target="_blank" rel="noopener noreferrer">
                    <TiktokLogo className="w-7 h-7 text-white hover:text-[#fcf8f9] transition-transform duration-300 transform hover:scale-110" />
                  </a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 pt-8 border-t border-purple-200/30 text-center text-sm text-gray-700">
            <p>&copy; {new Date().getFullYear()} Ana Luiza Mascarenhas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center">
      <div className="text-[#c39eb0]">{icon}</div>
      <span className="ml-3 text-gray-600">{text}</span>
    </div>
  );
}

export default App;