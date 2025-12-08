/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignora erros de ESLint (como variáveis não usadas) durante o build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignora erros de TypeScript durante o build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;