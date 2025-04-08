/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'http://localhost:3000/index-two',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
