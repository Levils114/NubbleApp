module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@types': './src/@types',
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@global': './src/global',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@infra': './src/infra',
          '@services': './src/services',
          '@modules': './src/modules',
          '@routes': './src/routes',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
