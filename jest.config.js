module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src/test/utils'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/react-native-svg/svgMock.js',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
};
