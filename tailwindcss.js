require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/classnames-order': ['warn', { officialSorting: true }],
  },
};
