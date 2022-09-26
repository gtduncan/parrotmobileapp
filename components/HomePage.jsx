import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const HomePage = ({user, navigation, route}) => {
  
    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            color: '#FFFFFF'
        },
        profilePicture: {
          flex: 0.35,
          width: 60,
          height: 60
        },
        welcomeContainer: {
          flexDirection: 'row',
          paddingTop: 40,
          paddingLeft: 40
        },
        welcomeText: {
          flex: 1,
          color: '#000000'
        },
        userContainer: {
          height: 53,
          paddingLeft: 10
        },
        languageFlag: {
          height: 30,
          width: 30,
        },
        pointsDisplay: {
          marginLeft: 120,
          height: 20,
          flex: 0.3,
          flexDirection: "row"
        },
        pointImage: {
          height: 20,
          width: 20,
        },
        pointText: {
          paddingLeft: 5
        }
    })

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image style={styles.profilePicture} source={require('../assets/DefaultProfile.png')}/>
        <View style={styles.userContainer}>
        <Text category='s1' style={styles.welcomeText}>{`Hi, ${user.first_name}`}</Text>
        <Image style={styles.languageFlag} source={require('../assets/spain.png')}/>
        </View>
        <View style={styles.pointsDisplay}>
          <Image style={styles.pointImage} source={require('../assets/dollar.png')}/>
        <Text style={styles.pointText} category='s1'>{`${user.points}`}</Text>
        </View>
        </View>
    </SafeAreaView>
  )
  }
  

  
export default HomePage