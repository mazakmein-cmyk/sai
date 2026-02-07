/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: true, // Avoid image optimization issues in dev/production
  },
  // Ensure correct routing
  trailingSlash: false,
}

module.exports = nextConfig
