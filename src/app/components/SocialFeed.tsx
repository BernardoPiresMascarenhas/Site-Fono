import React from 'react';
import { Instagram } from 'lucide-react';

// Componente simples para o ícone do TikTok (já que o lucide-react padrão as vezes não tem)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SocialFeed = () => {
  // DADOS DO INSTAGRAM
  const instagramPosts = [
    { id: 1, img: '/insta1.jpg', link: 'https://www.instagram.com/p/DHef5qTp8c8/?img_index=1' },
    { id: 2, img: '/insta2.jpg', link: 'https://www.instagram.com/p/DRunrofCeda/' },
    { id: 3, img: '/insta3.jpg', link: 'https://www.instagram.com/p/DRiSPwdiY73/' },
    { id: 4, img: '/insta4.jpg', link: 'https://www.instagram.com/p/DRSguc6CVZW/' },
  ];

  // DADOS DO TIKTOK (Lembre de colocar as imagens tiktok1.jpg, etc na pasta public)
  const tiktokPosts = [
    { id: 1, img: '/tiktok1.jpg', link: 'https://www.tiktok.com/@fono.anamascarenhas/video/7420587062908275974' },
    { id: 2, img: '/tiktok2.jpg', link: 'https://www.tiktok.com/@fono.anamascarenhas/video/7421328564714540294' },
    { id: 3, img: '/tiktok3.jpg', link: 'https://www.tiktok.com/@fono.anamascarenhas/video/7424201088485592325' },
    { id: 4, img: '/tiktok4.jpg', link: 'https://www.tiktok.com/@fono.anamascarenhas/video/7418688934399479045' },
  ];

  return (
    <section id="social-feed" className="py-16 bg-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* ==========================
            BLOCO DO INSTAGRAM 
           ========================== */}
        <div className="mb-20"> {/* Margem em baixo para separar do TikTok */}
          <div className="flex items-center justify-center gap-2 mb-6">
              <Instagram className="text-[#c39eb0] w-8 h-8" />
              <h2 className="text-3xl font-extrabold text-[#c39eb0]">
                Siga no Instagram
              </h2>
          </div>
          <p className="text-gray-600 mb-8">
            Acompanhe dicas, dia a dia no consultório e muito conteúdo sobre desenvolvimento infantil.
            <br/>
            <a href="https://instagram.com/fonoanamascarenhas" target="_blank" className="font-bold text-[#c39eb0] hover:underline">@fonoanamascarenhas</a>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <a 
                key={post.id} 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-square block"
              >
                {/* Imagem */}
                <img 
                  src={post.img} 
                  alt={`Post do Instagram ${post.id}`} 
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500" 
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 w-8 h-8" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ==========================
            BLOCO DO TIKTOK 
           ========================== */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-6">
              <TikTokIcon className="text-[#c39eb0] w-8 h-8" />
              <h2 className="text-3xl font-extrabold text-[#c39eb0]">
                Acompanhe no TikTok
              </h2>
          </div>
          <p className="text-gray-600 mb-8">
            Vídeos curtos e divertidos com orientações rápidas para pais e cuidadores.
            <br/>
            {/* Adicione o link do tiktok dela abaixo */}
            <a href="https://tiktok.com/@fonoanamascarenhas" target="_blank" className="font-bold text-[#c39eb0] hover:underline">@fono.anamascarenhas</a>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tiktokPosts.map((post) => (
              <a 
                key={post.id} 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                // DICA: Mude 'aspect-square' para 'aspect-[9/16]' se quiser que os cards do TikTok fiquem verticais (formato de celular)
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-square block"
              >
                {/* Imagem */}
                <img 
                  src={post.img} 
                  alt={`TikTok ${post.id}`} 
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500" 
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                  {/* Ícone TikTok no Hover */}
                  <TikTokIcon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 w-8 h-8" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialFeed;