/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add specific patterns for remote image sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'siteimagery.nyc3.cdn.digitaloceanspaces.com',
        port: '',
      },
     
      // Add more remote patterns if needed
    ],
    // Add domains for simpler configurations
    domains: [
      "ipfs.filebase.io", 
      "example.com", 
      "siteimagery.nyc3.cdn.digitaloceanspaces.com",
      // Add any other domains used in your images
    ],
  },
};

module.exports = nextConfig;
