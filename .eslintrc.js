// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 'off',
    // allow async-await
    'generator-star-spacing': 'off'
  }
}
