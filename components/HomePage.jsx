import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageLessonCard from './HomePageLessonCard'
import axios from 'axios';

const HomePage = ({setInLesson, user, navigation, route}) => {
  
    const styles = StyleSheet.create({
        lessonContainer: {
          marginTop: 20,
          alignSelf: 'center',
          flex: 1,
          flexDirection: 'row'
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
        },
        continueText: {
          marginTop: 20,
          marginLeft: 38
        },
        shopText: {
          marginTop: 170,
          marginLeft: 38
        }
    })

  const lessons = user.lessons

  return(
    <SafeAreaView>
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
      <View>
        <Text category='s1' style={styles.continueText} appearance='hint'>Continue Learning</Text>
      </View>
      <View style={styles.lessonContainer}>
        {lessons?.map((lesson) => {
        if(lesson.current_stage < 10 && lesson.current_stage > 0) {
          console.log(lesson.lesson_name, lesson.current_stage, lesson.id)
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