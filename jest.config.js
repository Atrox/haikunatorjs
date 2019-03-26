module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  collectCoverage: false,
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ]
}
