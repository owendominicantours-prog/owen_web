/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['cdn.builder.io','images.unsplash.com'] },
  experimental: { serverActions: false }
};
module.exports = nextConfig;
