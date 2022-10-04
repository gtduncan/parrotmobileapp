import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageLessonCard from './HomePageLessonCard'
import axios from 'axios';

const HomePage = ({setInLesson, user, navigation, route}) => {
  
    const styles = StyleSheet.create({
      header: {
        fontFamily: 'Nunito',
        marginTop: 20,
        marginLeft: 20
      },
        lessonContainer: {
          marginTop: 20,
          alignSelf: 'center',
          flex: 1,
          flexDirection: 'row'
        },
        profilePictureContainer: {
          flexDirection: 'row',
          flex: 5,
          width: 60,
          height: 60
        },
        profilePicture: {
          width: 60,
          height: 60
        },
        welcomeContainer: {
          marginTop: 20,
          height: 100,
          alignSelf: 'center',
        },
        welcomeCard: {
          height: 100,
          width: 260,
          flex:1,
          flexDirection: 'row',
        },
        welcomeText: {
          color: '#000000',
          fontFamily: 'Nunito',
          height: 20,
          overflow:'visible',
          alignSelf: 'center'
        },
        userContainer: {
          flex: 25,
          flexDirection: 'column',
          height: 100,
          width: 215
        },
        languageFlag: {
          alignSelf: 'center',
          marginRight: 50,
          height: 30,
          width: 30,
        },
        pointsDisplay: {
          fontFamily: 'Nunito',
          alignSelf: 'flex-end',
          flex: 1200,
          height: 40,
          flexDirection: "row"
        },
        pointImage: {
          height: 20,
          width: 20,
        },
        pointText: {
          fontFamily: 'Nunito',
          paddingLeft: 5,
          height: 20,
        },
        continueText: {
          fontFamily: 'Nunito',
          marginTop: 20,
          marginLeft: 20
        },
        shopText: {
          fontFamily: 'Nunito',
          marginTop: 170,
          marginLeft: 20
        }
    })

  const lessons = user.lessons

  return(
    <SafeAreaView>
      <Text style={styles.header} category='h3'>Home</Text>
      <View style={styles.welcomeContainer}>
      <Card style={styles.welcomeCard}> 
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} source={require('../assets/DefaultProfile.png')}/>
      </View>
        <View style={styles.userContainer}>
        <Text category='s1' style={styles.welcomeText}>{`Hi, ${user.first_name}`}</Text>
        <Image style={styles.languageFlag} source={require('../assets/spain.png')}/>
        </View>
        <View style={styles.pointsDisplay}>
          <Image style={styles.pointImage} source={require('../assets/dollar.png')}/>
        <Text style={styles.pointText} category='s1'>{`${user.points}`}</Text>
        </View>
      </Card>
      </View>
      <View>
        <Text category='s1' style={styles.continueText} appearance='hint'>Continue Learning</Text>
      </View>
      <View style={styles.lessonContainer}>
        {lessons?.map((lesson) => {
        if(lesson.current_stage < 10 && lesson.current_stage > 0) {
          return(<HomePageLessonCard key={lesson.id} setInLesson={setInLesson} id={lesson.id} current_stage={lesson.current_stage} lesson_name={lesson.lesson_name}/>)
        }
      })}
      </View>
      <View>
        <Text category='s1' style={styles.shopText} appearance='hint'>Your Parrots</Text>
      </View>
    </SafeAreaView>
  )
  }
  

  
export default HomePage