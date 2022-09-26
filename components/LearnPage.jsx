import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import LessonCard from './LessonCard';
import axios from 'axios';

const LearnPage = ({user, lessons}) => {

      const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            color: '#FFFFFF'
        }})

    return(
        <SafeAreaView>
            <ScrollView>
                {lessons?.map((lesson) => {
                    return (
                        <LessonCard lesson_name={lesson.lesson_name}
                        lesson_description={lesson.lesson_description}
                        language={lesson.language}
                        currentStage={lesson.currentStage}
                        />
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )

}

export default LearnPage