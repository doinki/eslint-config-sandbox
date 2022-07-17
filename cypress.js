require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['plugin:cypress/recommended'],
  rules: { 'import/no-extraneous-dependencies': 'off' },
};
