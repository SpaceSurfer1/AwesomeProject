import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView, ActivityIndicator, TextInput, Button } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

export default function GetMergedPR() {

  const handleSave = () => {
    const fetchUserData = async (text) => {
      try {
        setError(null);
        const response = await axios.get(`https://api.github.com/users/${text}`);
        setUserData(response.data);
        // console.log(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchPullRequests = async (text) => {
      try {
          const response = await axios.get('https://api.github.com/search/issues?q=is:pr+author:'+text+'');
          setPullRequests(response.data.items);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching pull requests:', error);
          setLoading(false);
      }
  };
    // Implement your save logic here
    console.log('Text input value:', text);
    // You can use this value to save to a database, update state, etc.
    fetchUserData(text);
    fetchPullRequests(text);
  };




  const [pullRequests, setPullRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);


  return (
    <View style={styles.container}>


{error ? (
        <Text>Error: {error}</Text>
      ) : userData ? (
        <View>
          <Image
            source={{ uri: userData.avatar_url }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text>{userData.name}</Text>
          <Text>{userData.bio}</Text>
          {/* Render other user details as needed */}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      




        <Card containerStyle={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Enter text"
            onChangeText={setText}
            value={text}
            multiline
          />
          <Button
            title="Save"
            onPress={() => handleSave()}
          />
        </Card>


        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>GitHub Merged Pull Requests:</Text>
        {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <ScrollView>
                {pullRequests.map((pr,index) => (
                    <View key={pr.id} style={{ marginBottom: 10 }}>
                        <Text>{index+1}. {pr.title}</Text>
                        {/* Render other PR details as needed */}
                    </View>
                ))}
            </ScrollView>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
