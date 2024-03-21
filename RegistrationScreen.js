import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function RegistrationScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');

  const handleRegistration = () => {
    // Validate input
    if (!phoneNumber.trim() || !name.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Send registration data to server (optional)

    // Handle server response (mocked here)
    const registrationSuccessful = true; // Change based on actual response
    if (registrationSuccessful) {
      // Navigate to main application screen
      // navigation.navigate('MainAppScreen');
      Alert.alert('Success', 'Registration successful');
      navigation.navigate('MainScreen');
    } else {
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Registration</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        placeholder="Phone Number"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
}
