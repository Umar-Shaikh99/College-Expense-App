import { View, Text } from 'react-native';
import React from 'react';
import './global.css';
import 'react-native-gesture-handler';
import { mmkv } from './src/app/config/mmkv';

console.log('MMKV test:', mmkv.set('hello', 'world'));
console.log('MMKV value:', mmkv.getString('hello'));
const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-2xl font-bold text-white">Hello, Umar Shaikh!</Text>
      <Text className="bg-blue-500 text-2xl font-bold text-white">Hello, Umar Shaikh!</Text>
    </View>
  );
};

export default App;
