/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true
  },
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  compress: true
}

module.exports = nextConfig