import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js';
import NewBabyScreen from './NewBabyScreen.js';
export default function App() {

  const Stack = createStackNavigator();

  return (
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="Home" component={HomeScreen} />
   <Stack.Screen name="New Baby" component={NewBabyScreen} />
   </Stack.Navigator>
   </NavigationContainer>
  );
}

