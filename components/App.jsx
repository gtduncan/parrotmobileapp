import React from 'react';
import {useState, useEffect} from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Button, IconRegistry, ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import LandingPage from './LandingPage';
import SigninPage from './SigninPage';
import HomePage from './HomePage';
import AppNavigator from './AppNavigator';
import LessonPage from './LessonPage';
import GiftPage from './GiftPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { HeaderBackButton } from '@react-navigation/elements';
import axios from 'axios';

const Stack1 = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();


export default function App({}) {
  const [signedIn, setSignedIn] = useState(false)
  const [loginInfo, setLoginInfo] = useState([])
  const [user, setUser] = useState({})
  const [inLesson, setInLesson] = useState('')
  const [inGift, setInGift] = useState('')

  useEffect(()=>{
    axios.get('https://5b7c-2603-7000-483f-b6f4-7134-1076-81cd-4c04.ngrok.io/users/1')
      .then(res => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch(e => console.log(e.message))
    axios.get('https://5b7c-2603-7000-483f-b6f4-7134-1076-81cd-4c04.ngrok.io/users')
    .then(res2 => {
      console.log(res2.data)
      setLoginInfo(res2.data)
    }) .catch(e => console.log(e.message))
  }, [inLesson])

  const stylingColors = {
    backgroundColor: "#ECECEC",
    textColor: "#111111"
  };



  const whichPages = () => {
    if(inLesson === '' && inGift === '') {
      if(signedIn === false) {
        return (
           <NavigationContainer>
            <Stack1.Navigator>
                <Stack1.Screen name="Welcome">
                {(props) => <LandingPage {...props} stylingColors={stylingColors}/>}
                </Stack1.Screen>
                <Stack1.Screen name="Sign-in">
                {(props) => <SigninPage {...props} loginInfo={loginInfo} user={user} setUser={setUser} setSignedIn={setSignedIn} stylingColors={stylingColors}/>}
                </Stack1.Screen>
                <Stack1.Screen name="Home">
                {(props) => <HomePage {...props} user={user} setInLesson={setInLesson} stylingColors={stylingColors}/>}
                </Stack1.Screen>
            </Stack1.Navigator>
        </NavigationContainer>)
      }
      if(signedIn === true)
      {
        return <AppNavigator setUser={setUser} setInLesson={setInLesson} setInGift={setInGift} user={user}/>
      }
    }
    if(inLesson !== '') {
      return (
        <NavigationContainer>
          <Stack2.Navigator initialRouteName={"Lesson"}>
          <Stack2.Screen name="Home">
                {(props) => <HomePage {...props} setInLesson={setInLesson} user={user} stylingColors={stylingColors}/>}
          </Stack2.Screen>
          <Stack2.Screen name={"Lesson"} options={({navigation, route}) => ({ title: `Lesson ${inLesson}`, headerLeft: (props) => {return(<HeaderBackButton onPress={() => setInLesson('')}/>)}})}>
              {(props) => <LessonPage {...props} setInLesson={setInLesson} setUser={setUser} inLesson={inLesson} user={user} stylingColors={stylingColors}/>}
          </Stack2.Screen>
          </Stack2.Navigator>
      </NavigationContainer>)
    }
    if(inGift !== '') {
      return (
        <NavigationContainer>
          <Stack2.Navigator initialRouteName={"Gift"}>
          <Stack2.Screen name="Home">
                {(props) => <HomePage {...props} setInLesson={setInLesson} user={user} stylingColors={stylingColors}/>}
          </Stack2.Screen>
          <Stack2.Screen name={"Gift"} options={({navigation, route}) => ({ title: `Parrot`, headerLeft: (props) => {return(<HeaderBackButton onPress={() => setInGift('')}/>)}})}>
              {(props) => <GiftPage {...props} setUser={setUser} setInGift={setInGift} inGift={inGift} inLesson={inLesson} user={user} stylingColors={stylingColors}/>}
          </Stack2.Screen>
          </Stack2.Navigator>
      </NavigationContainer>)
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