const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
  swcMinify: true,
  poweredByHeader: false,
  
  // أضف السطرين دول بالضبط ← دول اللي هيحلوا كل المشاكل
  output: 'standalone',        // يمنع الـ static export ويخلي الديناميكية تشتغل
  experimental: {
    serverActions: true,       // لو في server actions في المشروع
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
