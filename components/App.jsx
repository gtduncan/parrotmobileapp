import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View } from 'react-native';
import { Card, Button, ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import LandingPage from './LandingPage';
import SigninPage from './SigninPage';
import HomePage from './HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json'; 

const stylingColors = {
  backgroundColor: "#ECECEC",
  textColor: "#111111"
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Welcome">
              {(props) => <LandingPage {...props} stylingColors={stylingColors}/>}
              </Stack.Screen>
              <Stack.Screen name="Sign-in">
              {(props) => <SigninPage {...props} stylingColors={stylingColors}/>}
              </Stack.Screen>
              <Stack.Screen name="Home">
              {(props) => <HomePage {...props} stylingColors={stylingColors}/>}
              </Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}