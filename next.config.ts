/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sujeitoprogramador.com"
      }
    ]
  }
}

module.exports = nextConfig
