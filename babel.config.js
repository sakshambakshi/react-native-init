module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './src',
          '@components': './components',
          '@pages': './pages',
          '@assets': './assets',
        },
      },
    ],
  ],
};
