module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts', 'jest-canvas-mock'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
  },
  testPathIgnorePatterns: ['/node_modules/(?!my-package)(.*)'],
};
