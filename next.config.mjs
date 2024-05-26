/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  // output: 'export',
  // distDir: 'build-dev',
  // assetPrefix: './',
  swcMinify: true,
  reactStrictMode: true,
  // ignoreBuildErrors: true,
  // skipTrailingSlashRedirect: true,
  // assetPrefix: isProd ? 'https://devcommerce.ibkbox.net' : 'http://localhost:3000',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'commerce.ibkbox.net',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ibkbox.net',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost', 'devinvest.ibkbox.net', 'invest.ibkbox.net', 'devcommerce.ibkbox.net'],
    },
  },
  // crossOrigin: 'anonymous'
  // skipMiddlewareUrlNormalize: true
};

export default nextConfig;
