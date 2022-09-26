import { Button, Card, Icon, Text } from '@ui-kitten/components';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';

const LessonCard = ({key, id, lesson_name, lesson_description, item, language, currentStage}) => {

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            color: '#FFFFFF'
        },
        languageFlag: {
            height: 30,
            width: 30
        },
        lessonCard: {
            flex: 1,
            flexDirection: 'row',
        },

        imageView: {
            flex: 1
        },
        lessonView: {
            flex: 1
        },
        lessonDesc: {
            flex: 10,
            paddingTop: 10,
            color: '#818589'
        },
        lessonName: {
            marginTop: 10
        },
        lessonContainer: {
            marginTop: 15,
            width: "88%",
            alignSelf: 'center'
        }
    })

    const setLesson = () => {
        console.log(id)
        setInLesson(id)
    }


    return(
    <Card onPress={setLesson} style={styles.lessonContainer}>
        <View style={styles.lessonCard}>
        <View style={styles.lessonView}>
            <Image style={styles.languageFlag} source={require('../assets/spain.png')}/>
            <Text category='h5' style={styles.lessonName}>{lesson_name}</Text>
            <Text category='s1' style={styles.lessonDesc}>{lesson_description}</Text>
        </View>
        </View>
    </Card>)
}

export default LessonCard