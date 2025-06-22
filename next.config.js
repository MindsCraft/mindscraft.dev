/** @type {import('next').NextConfig} */
const nextConfig = {
  // Simplified configuration for troubleshooting build issues
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
