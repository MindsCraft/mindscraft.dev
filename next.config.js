/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Skip API routes during static export
  skipTrailingSlashRedirect: true,
  skipApiRoutes: true,
  images: {
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
    unoptimized: true,
  },
  // Ensure meta tags are properly generated
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
