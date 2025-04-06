/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@kria-one/sanity-client'],
  experimental: {
    externalDir: true,
    esmExternals: true,
  },
  serverRuntimeConfig: {
    port: 3002
  }
}

module.exports = nextConfig 