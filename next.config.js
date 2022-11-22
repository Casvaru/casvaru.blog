/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com']
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['Poppins'] } }
    ]
  }
}

module.exports = nextConfig
