require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['plugin:@next/next/recommended'],
  rules: {
    'jsx-a11y/alt-text': ['error', { img: ['Image'] }],
    'jsx-a11y/img-redundant-alt': ['error', { components: ['Image'] }],
  },
};
