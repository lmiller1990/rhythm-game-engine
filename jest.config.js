module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: [
    '<rootDir>'
  ],
  setupFiles: [
    'jest-plugin-context/setup'
  ]
};