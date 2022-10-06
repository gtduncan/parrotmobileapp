import { Button, Card, Icon, Text } from '@ui-kitten/components';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import Sound from 'react-native-sound'
import * as Progress from 'react-native-progress'
import incorrect from '../assets/incorrect.mp3'

Sound.setCategory('Playback');

const incorrectSound = new Sound(incorrect, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        incorrectSound.getDuration() +
        'number of channels: ' +
        incorrectSound.getNumberOfChannels(),
    );
  });

const LessonCard = ({id, lesson_name, setInLesson, lesson_description, item, language, current_stage}) => {

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
            fontFamily: 'Nunito',
            paddingTop: 10,
            color: '#818589'
        },
        lessonName: {
            fontFamily: 'Nunito',
            marginTop: 10
        },
        lessonContainer: {
            marginTop: 15,
            width: "88%",
            alignSelf: 'center'
        },
        progressBar: {
            alignSelf: 'center',
            marginTop: 20
        },
        progressPercent: {
            fontFamily: 'Nunito',
            alignSelf: 'center',
            marginTop: 10
        }
    })

    const setLesson = () => {
        if(current_stage !== 10)
        {
            console.log(id)
            setInLesson(id)
        }
        else
        {
            incorrectSound.play()
        }
    }

    return(
    <Card onPress={setLesson} style={styles.lessonContainer}>
        <View style={styles.lessonCard}>
        <View style={styles.lessonView}>
            <Image style={styles.languageFlag} source={require('../assets/spain.png')}/>
            <Text category='h5' style={styles.lessonName}>{lesson_name}</Text>
            <Text category='s1' style={styles.lessonDesc}>{lesson_description}</Text>
            <Progress.Bar color={'#3E40BB'} unfilledColor={'#D9DAFB'} style={styles.progressBar} progress={current_stage/10} height={12} width={270} />
            <Text appearance='hint' style={styles.progressPercent} category='s1'>{`${current_stage/10*100}%`}</Text>
        </View>
        </View>
    </Card>)
}

export default LessonCard