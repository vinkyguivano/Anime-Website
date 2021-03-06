/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/anime',
        permanent: true
      }
    ]
  },
  optimizeFonts: false
}

module.exports = nextConfig
