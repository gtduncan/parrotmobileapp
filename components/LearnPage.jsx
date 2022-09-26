import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import LessonCard from './LessonCard';
import axios from 'axios';

const LearnPage = ({user, setInLesson, lessons}) => {

      const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            color: '#FFFFFF'
        },
        header: {
            marginTop: 20,
            marginLeft: 20
        },
        subheader: {
            marginTop: 20,
            marginLeft: 20,
            color: '#808080'
        },
        lessonCard: {
            paddingTop: 20,
        }})

    return(
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.header} category='h3'>Learn</Text>
                <Text style={styles.subheader} category='h6'>Unit 1</Text>
                {lessons?.map((lesson) => {
                    return (
                        <LessonCard 
                        key={lesson.id}
                        id={lesson.id}
                        setInLesson={setInLesson}
                        lesson_name={lesson.lesson_name}
                        lesson_description={lesson.lesson_description}
                        language={lesson.language}
                        image_url={lesson.image_url}
                        currentStage={lesson.currentStage}
                        />
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )

}

export default LearnPage