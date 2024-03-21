// Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import AnotherScreen from './AnotherScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: 'blue', // color of the active tab
        inactiveTintColor: 'gray', // color of the inactive tab
        style: { 
          backgroundColor: 'lightgray', // background color of the tab bar
        },
        tabBarLabelStyle: { 
            fontSize: 20, // font size of the tab label
            color: 'pink', // color of the tab label
          },
        }}
      
      
    >
      <Tab.Screen name="Home" component={HomeScreen}options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen}options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Contacts" component={AnotherScreen}options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default Navigation;
