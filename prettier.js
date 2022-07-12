require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: 'plugin:prettier/recommended',
  rules: { 'prettier/prettier': ['error', { singleQuote: true }] },
};
