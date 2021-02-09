/*
 * @see
 * https://github.com/okonet/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments
 */

const binPath = `./node_modules/.bin`
module.exports = {
  'src/**/*.{t,j}s?(x)': (paths) => {
    return [
      paths.map((path) => `${binPath}/eslint --fix ${path}`),
      paths.map((path) => `${binPath}/prettier --write ${path}`),
      `${binPath}/tsc -p tsconfig.json --noEmit`,
    ].flat()
  },
  'src/**/*.{?(s)css,{t,j}s?(x)}': (paths) => {
    return [
      paths.map((path) => `${binPath}/stylelint ${path} --fix`),
      paths.map((path) => `${binPath}/prettier --write ${path}`),
    ].flat()
  },
}
