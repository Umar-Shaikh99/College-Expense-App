const babel = require('@babel/core');
const fs = require('fs');

const code = fs.readFileSync('./App.tsx', 'utf8');

const result = babel.transformSync(code, {
  filename: 'App.tsx',
  presets: ['module:@react-native/babel-preset'],
  plugins: ['nativewind/babel']
});

console.log(result.code);