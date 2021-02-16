/*
 * @see
 * https://jestjs.io/docs/en/configuration.html
 */

const base = {
  moduleNameMapper: { '^@/(.+)': '<rootDir>/src/$1' },
  roots: ['<rootDir>/src'],
  testEnvironment: '',
  transform: { '\\.([tj]sx?|[mc]js)$': 'babel-jest' },
}

module.exports = {
  node: { testEnvironment: 'node', ...base },
  react: { testEnvironment: 'jsdom', ...base },
}
