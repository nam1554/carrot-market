/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imagedelivery.net"],
  },
  experimental: {
    runtime: "nodejs",
    serverComponents: true,
    appDir: true,
  },
};

module.exports = nextConfig;
