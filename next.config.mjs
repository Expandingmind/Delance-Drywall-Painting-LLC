/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for easy deployment
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

