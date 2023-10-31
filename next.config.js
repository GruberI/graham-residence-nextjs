/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.shopify.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
