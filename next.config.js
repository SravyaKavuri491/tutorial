/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production', // Only ignore in production
    dirs: ['pages', 'components', 'src'], // Only check these directories
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production', // Only ignore in production
  },

  // Enable if using static export (optional)
  // output: 'export',

  // Improve build performance
  swcMinify: true,
  
  // Enable React compiler if using Next.js 14+
  experimental: {
    reactCompiler: process.env.NODE_ENV === 'production',
  }
}

module.exports = nextConfig
