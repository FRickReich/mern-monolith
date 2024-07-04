module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '../src/backend',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/../../coverage/backend',
  globals: {
    'ts-jest': {
      tsconfig: './config/tsconfig.backend.json',
    },
  },
};