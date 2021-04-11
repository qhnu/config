/*
 * @see
 * https://eslint.org/docs/user-guide/configuring/#specifying-environments
 */

const node = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.cjs', '.mjs'],
  },
  plugins: ['es', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  rules: {
    // es
    'es/no-regexp-lookbehind-assertions': 'error',
    // simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // eslint
    'no-restricted-syntax': [
      'error',
      { selector: 'TSEnumDeclaration', message: "Don't declare enums" },
    ],
    // typescript-eslint
    /** @see https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492 */
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-var-requires': 0,
  },
}

const extendsClone = [...node.extends, 'plugin:react/recommended', 'plugin:react-hooks/recommended']

const rulesClone = {
  ...node.rules,
  'react/jsx-sort-props': 'error',
  /** @see https://github.com/yannickcr/eslint-plugin-react/issues/2353 */
  'react/prop-types': 0,
  'react-hooks/exhaustive-deps': [
    'error',
    { additionalHooks: '(useRecoilCallback)' }, // 値は正規表現
  ],
}

module.exports = {
  node,
  react: { ...node, extends: extendsClone, rules: rulesClone },
}
