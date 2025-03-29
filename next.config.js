/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Use your existing .eslintrc file but don't fail build
    ignoreDuringBuilds: process.env.NODE_ENV === 'production', // Only ignore in production
  },
}

module.exports = nextConfig
