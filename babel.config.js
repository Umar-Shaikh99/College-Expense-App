module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@config': './src/app/config',
          '@screens': './src/screens',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@utils': './src/utils',
          '@services': './src/services',
          '@assets': './src/assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
