import { View, Text } from "react-native";
import React from "react";
import './global.css';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View className="bg-red-500 flex-1 justify-center items-center">
      <Text className="text-white text-2xl font-bold">
        Hello, Umar Shaikh!
      </Text>
    </View>
  );
}

export default App;