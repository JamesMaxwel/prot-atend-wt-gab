/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/prot-atend-wt-gab' : '',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prot-atend-wt-gab/' : '',
  trailingSlash: true,
};

module.exports = nextConfig; 