/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any image domains you need
  },
  // Remove the webpack config since it's not needed
}

module.exports = nextConfig
