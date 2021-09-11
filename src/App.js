import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainPage, FirstPage, SecondPage, ThirdPage, WatchPage } from './screens/pages'
import {CharacterPage} from './screens/characterPage/CharacterPage'
import {EpisodePage} from './screens/episodePage/EpisodePage'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
        <Stack.Screen name="CharacterPage" component={CharacterPage} />
        <Stack.Screen name="EpisodePage" component={EpisodePage} />
        <Stack.Screen name="WatchPage" component={WatchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
