import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Kontak from './components/Kontak';
import DetailKontak from './components/DetailKontak';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Daftar Kontak' }} />
        <Stack.Screen name="DetailKontak" component={DetailKontak} options={{ title: 'Detail Kontak' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
