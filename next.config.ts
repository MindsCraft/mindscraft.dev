/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed to allow backend API routes (like contact form) to function
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  cacheHandler: require.resolve('next/dist/server/lib/cache-handler.js'),
  cacheMaxMemorySize: 0, // Optional: Disable in-memory cache
};

export default nextConfig;
