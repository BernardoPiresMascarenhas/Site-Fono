import React from 'react';
import { Instagram } from 'lucide-react';
import Image from "next/image"; // Importação correta

// Componente simples para o ícone do TikTok
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);

const SocialFeed = () => {
  const instagramPosts = [
    { id: 1, img: '/insta1.jpg', link: 'https://www.instagram.com/p/DHef5qTp8c8/?img_index=1' },
    { id: 2, img: '/insta2.jpg', link: 'https://www.instagram.com/p/DRunrofCeda/' },
    { id: 3, img: '/insta3.jpg', link: 'https://www.instagram.com/p/DRiSPwdiY73/' },
    { id: 4, img: '/insta4.jpg', link: 'https://www.instagram.com/p/DRSguc6CVZW/' },
  ];

  const tiktokPosts = [
    { id: 1, img: '/tiktok1.jpg', link: 'https://www.tiktok.com/@fono.anamascarenhas/video/7420587062908275974' },
    { id: 2, img: '/tiktok2.jpg', link: 'https://www.tiktok.com/@fono.anamascarenhas/video/7421328564714540294' },
    { id: 3, img: '/tiktok3.jpg', link: 'https://www.tiktok.com/@fono.anamascarenhas/video/7424201088485592325' },
    { id: 4, img: '/tiktok4.jpg', link: 'https://www.tiktok.com/@fono.anamascarenhas/video/7418688934399479045' },
  ];

  return (
    <section id="social-feed" className="py-16 bg-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* BLOCO INSTAGRAM */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
              <Instagram className="text-[#c39eb0] w-8 h-8" />
              <h2 className="text-3xl font-extrabold text-[#c39eb0]">Siga no Instagram</h2>
          </div>
          <p className="text-gray-600 mb-8">Acompanhe dicas, dia a dia no consultório e muito conteúdo sobre desenvolvimento infantil.<br/><a href="https://instagram.com/fonoanamascarenhas" target="_blank" className="font-bold text-[#c39eb0] hover:underline">@fonoanamascarenhas</a></p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl shadow-lg aspect-square block">
                {/* CORREÇÃO 1: Usando <Image /> para o Instagram */}
                <Image 
                  src={post.img} 
                  alt={`Post do Instagram ${post.id}`}
                  width={400} // Largura estimada
                  height={400} // Altura estimada
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center"><Instagram className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 w-8 h-8" /></div>
              </a>
            ))}
          </div>
        </div>

        {/* BLOCO TIKTOK */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-6">
              <TikTokIcon className="text-[#c39eb0] w-8 h-8" />
              <h2 className="text-3xl font-extrabold text-[#c39eb0]">Acompanhe no TikTok</h2>
          </div>
          <p className="text-gray-600 mb-8">Vídeos curtos e divertidos com orientações rápidas para pais e cuidadores.<br/><a href="https://tiktok.com/@fono.anamascarenhas" target="_blank" className="font-bold text-[#c39eb0] hover:underline">@fono.anamascarenhas</a></p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tiktokPosts.map((post) => (
              <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl shadow-lg aspect-square block">
                {/* CORREÇÃO 2: Usando <Image /> para o TikTok */}
                <Image 
                  src={post.img} 
                  alt={`TikTok ${post.id}`}
                  width={400} // Largura estimada
                  height={400} // Altura estimada
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center"><TikTokIcon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 w-8 h-8" /></div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialFeed;