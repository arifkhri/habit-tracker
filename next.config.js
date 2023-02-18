/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');

const withPWA = require('next-pwa')({
  dest: 'public',
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  [withPWA, {}],
  [withBundleAnalyzer, {
    poweredByHeader: false,
    trailingSlash: true,
    swcMinify: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    webpack: (base, isProdEnv) => ({
      ...base,
      optimization: {
        ...base.optimization,
        splitChunks: {
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              // cacheGroupKey here is `commons` as the key of the cacheGroup
              name(module) {
                const moduleFileName = module
                  .identifier()
                  .split('/')
                  .reduceRight((item) => item);
                return `${moduleFileName}`;
              },
              chunks: 'all',
            },
            styles: {
              test: isProdEnv ? 'css/mini-extract' : /\.css$/,
              chunks: 'all',
              name(module) {
                const moduleFileName = module
                  .identifier()
                  .split('/')
                  .reduceRight((item) => item);
                return `${moduleFileName}`;
              },
              enforce: true
            },
          }
        },
      }
    }),
  }]
])