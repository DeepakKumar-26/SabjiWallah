import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CodePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

const App=()=> {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default CodePush(App);