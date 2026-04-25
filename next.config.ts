/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed to allow backend API routes (like contact form) to function
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
