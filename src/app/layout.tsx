import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Título que aparece na aba do navegador e no Google
  title: "Ana Luiza Mascarenhas | Fonoaudióloga em BH",
  
  // Descrição que aparece embaixo do título no Google
  description: "Fonoaudiologia humanizada em Belo Horizonte. Especialista em Intervenção Precoce, Fala, Linguagem e Motricidade Orofacial.",

  // Palavras-chave para ajudar a achar o site
  keywords: ["fonoaudiologia", "belo horizonte", "fono infantil", "intervenção precoce", "atraso na fala", "ana luiza mascarenhas"],

 
  openGraph: {
    title: "Ana Luiza Mascarenhas | Fonoaudióloga",
    description: "Cuidando da comunicação e desenvolvimento com amor e excelência. Clique para conhecer.",
    url: "https://site-fono-rosy.vercel.app/", 
    siteName: "Ana Luiza Fonoaudiologia",
    images: [
      {
        url: "/sobrenos.png", 
        width: 800,
        height: 600,
        alt: "Foto da Fonoaudióloga Ana Luiza",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}