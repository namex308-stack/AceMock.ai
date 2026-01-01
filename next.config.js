(
echo const SITE = require('./src/config.js').SITE;
echo.
echo /** @type {import('next').NextConfig} */
echo const nextConfig = {
echo   reactStrictMode: true,
echo   trailingSlash: SITE.trailingSlash,
echo   basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
echo   swcMinify: true,
echo   poweredByHeader: false,
echo.
echo   output: 'standalone',
echo.
echo   images: {
echo     remotePatterns: [
echo       { protocol: 'https', hostname: 'images.unsplash.com' },
echo       { protocol: 'https', hostname: 'source.unsplash.com' }
echo     ]
echo   }
echo };
echo.
echo module.exports = nextConfig;
) > next.config.js
