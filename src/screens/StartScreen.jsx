import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Home from './Home';
import {useNavigation} from '@react-navigation/native';

export default function StartScreen() {
  const navigation = useNavigation();
  const screens = [
    {
      name: 'StartScreen',
    },
    {
      name: 'Home',
    },
    {
      name: 'Settings',
    },
    {
      name: 'About',
    },
  ];

  const handleOpenScreen = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      {screens.map((screen, index) => {
        return (
          <TouchableOpacity
            onPress={() => handleOpenScreen(screen)}
            key={screen.name}
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'teal',
              margin: 5,
              borderRadius: 5,
            }}>
            <Text key={index}>{screen.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
