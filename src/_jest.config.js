/*
 * @see
 * https://jestjs.io/docs/en/configuration.html
 */

const base = {
  testEnvironment: '',
  roots: ['<rootDir>/src'],
  transform: {
    '\\.([tj]sx?|[mc]js)$': 'babel-jest',
  },
}

module.exports = {
  node: { testEnvironment: 'node', ...base },
  react: { testEnvironment: 'jsdom', ...base },
}
