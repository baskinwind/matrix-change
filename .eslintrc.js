module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: './config/tsconfig.json',
    tsconfigRootDir: './'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {}
};
