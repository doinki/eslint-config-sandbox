# eslint-config-sandbox

## Installation

```bash
# yarn
yarn add -D eslint-config-sandbox

# npm
npm i -D eslint-config-sandbox
```

## Configuration

- sandbox - react
- sandbox/next - next
- sandbox/base - node
- sandbox/jest - jest, testing-library
- sandbox/cypress - cypress
- sandbox/storybook - storybook
- sandbox/tailwindcss - tailwindcss
- sandbox/prettier - prettier

### .eslintrc.json

```json
{
  "extends": [
    "sandbox",
    "sandbox/next",
    "sandbox/jest",
    "sandbox/storybook",
    "sandbox/tailwindcss",
    "sandbox/prettier"
  ],
  "parserOptions": { "project": "tsconfig.json" }
}
```

- [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript#4-configure-the-eslint-typescript-parser)

---

### sandbox/cypress

#### cypress/.eslintrc.json

```json
{
  "extends": ["sandbox/base", "sandbox/cypress", "sandbox/prettier"],
  "parserOptions": { "project": "cypress/tsconfig.json" },
  "root": true
}
```

#### cypress/tsconfig.json

```json
{
  "compilerOptions": {
    "isolatedModules": false,
    "types": ["@testing-library/cypress", "cypress", "node"]
  },
  "include": ["**/*"]
}
```
