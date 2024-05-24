import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import About from '../screens/About';
import StartScreen from '../screens/StartScreen';

export default function StackNavigation() {
const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
