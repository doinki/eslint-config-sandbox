require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: { browser: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'trim',
    'typescript-sort-keys',
  ],
  rules: {
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'jsx-a11y/alt-text': ['error', { img: ['Image'] }],
    'jsx-a11y/img-redundant-alt': ['error', { components: ['Image'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: ['arrow-function'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'warn',
      { callbacksLast: true, reservedFirst: true, shorthandLast: true },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'tailwindcss/classnames-order': ['warn', { officialSorting: true }],
    'trim/class-name': 'warn',
    'typescript-sort-keys/interface': 'warn',
  },
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};
