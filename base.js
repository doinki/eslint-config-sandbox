const {
  rules: baseBestPracticesRules,
} = require('eslint-config-airbnb-base/rules/best-practices');
const {
  rules: baseErrorsRules,
} = require('eslint-config-airbnb-base/rules/errors');
const {
  rules: baseStyleRules,
} = require('eslint-config-airbnb-base/rules/style');
const {
  rules: baseVariablesRules,
} = require('eslint-config-airbnb-base/rules/variables');

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['airbnb-base'],
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  overrides: [
    {
      extends: ['airbnb-base', 'airbnb-typescript/base'],
      files: '**/*.ts?(x)',
      plugins: ['typescript-sort-keys'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-array-constructor':
          baseStyleRules['no-array-constructor'],
        '@typescript-eslint/no-empty-function':
          baseBestPracticesRules['no-empty-function'],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval':
          baseBestPracticesRules['no-implied-eval'],
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-loss-of-precision':
          baseErrorsRules['no-loss-of-precision'],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unused-vars':
          baseVariablesRules['no-unused-vars'],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/require-await':
          baseBestPracticesRules['require-await'],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unbound-method': 'error',
        'typescript-sort-keys/interface': 'warn',
      },
      settings: {
        'import/resolver': {
          [require.resolve('eslint-import-resolver-typescript')]: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
};
