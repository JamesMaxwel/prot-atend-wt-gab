/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/prot-atend-wt-gab',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/prot-atend-wt-gab/',
  trailingSlash: true,
};

module.exports = nextConfig; 