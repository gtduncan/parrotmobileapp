import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import * as Progress from 'react-native-progress'

const HomePageLessonCard = ({id, setInLesson, current_stage, lesson_name}) => {

    const setLesson = () => {
        if(current_stage !== 10)
        {
            console.log(id)
            setInLesson(id)
        }
        else
        {
            alert('Already completed')
        }
    }

    const styles = StyleSheet.create({
        card: {
            height: 150,
            maxWidth: 178,
            flex: 1,
            marginLeft: 15,
            marginRight: 15,
        },
        languageFlag: {
            height: 30,
            width: 30,
            marginBottom: 10,
            alignSelf: 'center'
        },
        progressBar: {
            alignSelf: 'center',
            marginTop: 15
        },
        progressPercent: {
            alignSelf: 'center',
            marginTop: 10,
            fontFamily: 'Nunito'
        },
        nameText: {
            fontFamily: 'Nunito'
        }
    })
    return(
        <Card onPress={()=> setLesson()} style={styles.card}>
            <View>
        <Image style={styles.languageFlag} source={require('../assets/spain.png')}/>
        <Text style={styles.nameText} category="h6">{lesson_name}</Text>
        <Progress.Bar color={'#3E40BB'} unfilledColor={'#D9DAFB'} style={styles.progressBar} progress={current_stage/10} height={12} width={125} />
        <Text appearance='hint' style={styles.progressPercent} category='s1'>{`${current_stage/10*100}%`}</Text>
        </View>
        </Card>
 )
}

export default HomePageLessonCard