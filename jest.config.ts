module.exports = {
  preset: 'jest-preset-angular',
  testURL: 'http://localhost',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer']
    }
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@registration-form-env': '<rootDir>/src/environments/environment.ts'
  },
  testMatch: ['<rootDir>/src/**/+(*.)+(spec|test).+(ts|js)?(x)'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  testPathIgnorePatterns: ['node_modules/(?!@ngrx)', '<rootDir>/e2e/'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/e2e', '<rootDir>/src/setupJest.ts'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  coverageReporters: ['json', 'lcov', 'text'],
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
