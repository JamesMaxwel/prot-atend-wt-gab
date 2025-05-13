/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/prot-atend-wt-gab',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 