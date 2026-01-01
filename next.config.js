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
echo   output: 'standalone',  // مهم جدًا: يدعم الصفحات الديناميكية
echo.
echo   images: {
echo     remotePatterns: [
echo       {
echo         protocol: 'https',
echo         hostname: 'images.unsplash.com',
echo       },
echo       {
echo         protocol: 'https',
echo         hostname: 'source.unsplash.com',
echo       },
echo     ],
echo   },
echo };
echo.
echo module.exports = nextConfig;
) > next.config.js
