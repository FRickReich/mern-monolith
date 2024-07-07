module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.backend.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
    env: {
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
      "@typescript-eslint/quotes": ["error", "single"],
      'prettier/prettier': [
        'error', { useTabs: true, tabWidth: 4, "singleQuote": true },
      ],
      // Hier können spezifische Regeln für Express.js hinzugefügt werden
    },
  };