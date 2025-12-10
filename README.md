# 🗣️ Site Profissional - Ana Luiza Mascarenhas (Fonoaudióloga)

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)

> Uma Landing Page moderna, responsiva e de alta performance desenvolvida para apresentar os serviços de fonoaudiologia, agendamentos e tour virtual do consultório.

🔗 **Acesse o projeto online:** [https://site-fono-rosy.vercel.app/](https://site-fono-rosy.vercel.app/)

## 🎨 Sobre o Projeto

Este projeto foi desenvolvido para profissionalizar a presença digital da fonoaudióloga Ana Luiza Mascarenhas. O site conta com uma identidade visual acolhedora (paleta em tons pastéis e rosa queimado), focada na experiência do usuário (UX) para pais e pacientes.

### ✨ Principais Funcionalidades

* **Design Responsivo:** Layout totalmente adaptável para mobile, tablet e desktop.
* **Formulário de Contato Funcional:** Envio de e-mails em tempo real utilizando **Nodemailer** e SMTP (Gmail).
* **Tour Virtual 360º:** Visualizador interativo do consultório utilizando `react-photo-sphere-viewer`.
* **Feed Social Integrado:** Exibição simulada dos últimos posts do Instagram e TikTok.
* **Áreas de Atuação:** Cards informativos com modais detalhados sobre os serviços.
* **FAQ Interativo:** Seção de Dúvidas Frequentes em formato "acordeão".
* **Animações:** Transições suaves utilizando **Framer Motion**.

## 🛠️ Tecnologias Utilizadas

* **[Next.js](https://nextjs.org/)** (App Router)
* **[React](https://reactjs.org/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Tailwind CSS](https://tailwindcss.com/)** (Estilização)
* **[Framer Motion](https://www.framer.com/motion/)** (Animações)
* **[Nodemailer](https://nodemailer.com/)** (Envio de E-mails)
* **[Lucide React](https://lucide.dev/)** (Ícones)
* **React Photo Sphere Viewer** (Tour 360º)

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para clonar e executar o projeto na sua máquina.

### Pré-requisitos

* Node.js instalado
* Gerenciador de pacotes (NPM ou Yarn)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU-USUARIO/Site-Fono.git
    cd Site-Fono
    ```

2.  **Instale as dependências:**
    *Atenção: Utilize a flag `--legacy-peer-deps` devido a compatibilidade de versões de algumas bibliotecas de imagem.*
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes chaves (necessário para o formulário de contato funcionar):

    ```env
    # Email utilizado para disparar as mensagens (Ex: Gmail com App Password)
    EMAIL_USER=seu_email_carteiro@gmail.com
    
    # Senha de Aplicativo gerada no Google (sem espaços)
    EMAIL_PASS=sua_senha_de_app_aqui
    
    # Email que receberá as mensagens do site (Ex: Hotmail da Fonoaudióloga)
    EMAIL_RECEIVER=email_da_profissional@hotmail.com
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Acesse `http://localhost:3000` no seu navegador.

## 📂 Estrutura de Pastas

```text
src/
├── app/
│   ├── api/
│   │   └── agendar/      # API de envio de emails
│   ├── components/       # Componentes (Header, Hero, Services, Modal, etc.)
│   ├── layout.tsx        # Layout principal e metadados
│   └── page.tsx          # Página Home
├── public/               # Imagens estáticas (logo, fotos, 360)
├── next.config.mjs       # Configurações do Next.js
└── tailwind.config.ts    # Configurações de Estilo

## 🤝 Autor

**Bernardo Pires Mascarenhas**

* Desenvolvedor Full Stack
* [LinkedIn](https://www.linkedin.com/in/bernardo-pires-mascarenhas-3585972bb/)
* [GitHub](https://github.com/BernardoPiresMascarenhas)

