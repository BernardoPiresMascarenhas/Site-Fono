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
  metadataBase: new URL("https://site-fono-rosy.vercel.app"),

  title: "Ana Luiza Mascarenhas | Fonoaudióloga em BH",
  description: "Fonoaudiologia humanizada em Belo Horizonte. Especialista em Intervenção Precoce, Fala, Linguagem e Motricidade Orofacial.",
  keywords: ["fonoaudiologia", "belo horizonte", "fono infantil", "intervenção precoce", "atraso na fala", "ana luiza mascarenhas"],

  openGraph: {
    title: "Ana Luiza Mascarenhas | Fonoaudióloga",
    description: "Cuidando da comunicação e desenvolvimento com amor e excelência. Clique para conhecer.",
    url: "/", 
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