import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const isProd = process.env.NODE_ENV === 'production';
const useStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  // Only use static export when explicitly enabled
  ...(useStaticExport && { output: 'export' }),
  basePath: isProd ? '/ONPCP' : '',
  assetPrefix: isProd ? '/ONPCP/' : '',
  images: {
    ...(useStaticExport && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.railway.app',
        pathname: '/uploads/**',
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname, '../..'),
  },
};

export default withNextIntl(nextConfig);
