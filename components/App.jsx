import React from 'react';
import {useState, useEffect} from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View } from 'react-native';
import { Card, Button, IconRegistry, ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import LandingPage from './LandingPage';
import SigninPage from './SigninPage';
import HomePage from './HomePage';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import axios from 'axios';

const Stack = createNativeStackNavigator();

export default function App() {
  const [signedIn, setSignedIn] = useState(false)
  const [user, setUser] = useState({})

  useEffect(()=>{
    axios.get('https://62ce-71-190-177-64.ngrok.io/users/1')
      .then(res => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch(e => console.log(e.message))
  }, [])

  const stylingColors = {
    backgroundColor: "#ECECEC",
    textColor: "#111111"
  };

  const whichPages = () => {
    if(signedIn === false) {
      return (
         <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Welcome">
              {(props) => <LandingPage {...props} stylingColors={stylingColors}/>}
              </Stack.Screen>
              <Stack.Screen name="Sign-in">
              {(props) => <SigninPage {...props} setSignedIn={setSignedIn} stylingColors={stylingColors}/>}
              </Stack.Screen>
              <Stack.Screen name="Home">
              {(props) => <HomePage {...props} user={user} stylingColors={stylingColors}/>}
              </Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>)
    }
    if(signedIn === true)
    {
      return <AppNavigator user={user}/>
    }
  }
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      {whichPages()}
    </ApplicationProvider>
    </>
  );
}