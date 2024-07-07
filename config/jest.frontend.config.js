module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '../src/frontend',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "testEnvironment": "jsdom",
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}', '!<rootDir>/jest.setup.ts', '!<rootDir>/index.tsx'],
  coverageDirectory: '<rootDir>/../../coverage/frontend',
  // globals: {
  //   'ts-jest': {
  //     tsconfig: './config/tsconfig.frontend.json',
  //   },
  // },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest', {
        tsconfig: './config/tsconfig.frontend.json',
      },
    ]
  }
};