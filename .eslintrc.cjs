module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    driver: 'readonly',
    $: 'readonly',
  },
  ignorePatterns: ['node_modules/', '.husky/', '.github/', 'package-lock.json', 'CHANGELOG.md'],
};
