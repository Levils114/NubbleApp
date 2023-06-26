module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@types': './src/@types',
          '@assets': './src/assets',
          '@components': './src/components',
          '@global': './src/global',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
