import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LandingPage = ({stylingColors, navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: stylingColors.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: stylingColors.textColor,
      paddingBottom: '10%',
      paddingLeft: '10%',
      paddingRight: '10%'
    },
    parrotContainer: {
      paddingTop: 70,
      flex: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    parrotImage: {
      width: 235,
      height: 235,
    },
    greetingContainer: {
      flex: 2,
      alignItems: 'center',
    },
    greetingHeader: {
      textAlign: 'center',
      paddingLeft: 60,
      paddingRight: 60
    },
    greetingSub: {
      textAlign: 'center',
      paddingTop: 20,
      paddingLeft: 50,
      paddingRight: 50
    },
    buttonContainer: {
      flex: 3,
    },
    buttons: {
      marginBottom: 25,
      height:60,
      width:300
    }
  });

    return(
    <View style={styles.container}>
    <View style={styles.parrotContainer}>
        <Image onPress = {() => {alert('Shot in the face');}}style={styles.parrotImage} source={require('../assets/ParrotIcon.png')}/>
    </View>
    <View style={styles.greetingContainer}>
        <Text style={styles.greetingHeader} category='h3'>Welcome to Parrot!</Text>
        <Text style={styles.greetingSub}  category='s1'>Learning has never been so fun! Explore the world of languages with a wide variety of lessons and fun parrots to collect.</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button style={styles.buttons} onPress={() => navigation.navigate('Sign-in')}>Sign In</Button>
      <Button style={styles.buttons} appearance='outline'>Create an Account</Button>
    </View>
    </View>
    )
  }
  

  
export default LandingPage