module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src/test/utils'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/react-native-svg/svgMock.js',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFiles: ['<rootDir>/src/test/setup/jestSetup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context)/)',
  ],
};
