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
    ],
    rules: {
      // Hier können spezifische Regeln für Express.js hinzugefügt werden
    },
  };