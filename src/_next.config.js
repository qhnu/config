/*
 * @see
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

module.exports = {
  distDir: 'dist/build',
  reactStrictMode: false,
  /** @param {import('webpack').Configuration} config */
  webpack(config, { dev, isServer }) {
    return config
  },
}
