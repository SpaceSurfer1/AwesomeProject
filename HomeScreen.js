// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import GetMergedPR from './GetMergedPR';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'lightgrey'}}>
      <Text>Home Screen</Text>
      {/* <GetMergedPR/> */}
    </View>
  );
};

export default HomeScreen;
