module.exports = {
  eslint: require('./_.eslintrc.js'),
  prettier: require('./_.prettierrc.js'),
  stylelint: require('./_.stylelintrc.js'),
  babel: require('./_babel.config.js'),
  jest: require('./_jest.config.js'),
  ['lint-staged']: require('./_lint-staged.config.js'),
  next: require('./_next.config.js'),
}
