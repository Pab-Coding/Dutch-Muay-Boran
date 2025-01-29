/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app', // Permite imágenes del deployment de Vercel
      }
    ],
    // Habilita imágenes estáticas locales
    domains: ['localhost'], // Para desarrollo local
    disableStaticImages: false, // Asegúrate que esté en false
  },
  // Opcional: Si usas la carpeta public
  trailingSlash: true,
}

module.exports = nextConfig