import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Navigation from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Navigation />
    </NavigationContainer>
  );
}
