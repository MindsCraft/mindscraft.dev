/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'picsum.photos', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Ensure meta tags are properly generated
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig