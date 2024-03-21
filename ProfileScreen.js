// ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import Game from './Game';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Game></Game>
    </View>
  );
};

export default ProfileScreen;
