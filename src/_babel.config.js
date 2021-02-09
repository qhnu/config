/*
 * @see
 * https://babeljs.io/docs/en/configuration#babelconfigjson
 */

module.exports = {
  node: (api) => {
    api.cache(true)
    return {
      presets: ['next/babel'],
      plugins: [],
    }
  },
  react: (api) => {
    api.cache(true)
    return {
      presets: ['next/babel'],
      plugins: ['babel-plugin-styled-components'],
    }
  },
}
