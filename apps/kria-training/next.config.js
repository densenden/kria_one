/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@kria-one/sanity-client'],
  experimental: {
    externalDir: true,
    esmExternals: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig 