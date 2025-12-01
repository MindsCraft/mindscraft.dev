/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  cacheHandler: require.resolve('next/dist/server/lib/cache-handler.js'),
  cacheMaxMemorySize: 0, // Optional: Disable in-memory cache
};

export default nextConfig;
