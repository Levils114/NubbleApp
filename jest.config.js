module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src/test/utils'],
  collectCoverageFrom: ['src/**/**/*.test.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
};
