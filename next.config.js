/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
    unoptimized: false, // Asegura que Next.js optimice las imágenes
    dangerouslyAllowSVG: true, // Si estás usando SVGs
    contentDispositionType: 'attachment', // Ayuda con algunos tipos de archivos
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig