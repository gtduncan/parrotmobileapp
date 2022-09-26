import { Button, Card, Icon, Text } from '@ui-kitten/components';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';

const LessonCard = ({lesson_name, lesson_description, language, currentStage}) => {

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            color: '#FFFFFF'
        },
        languageFlag: {
            height: 30,
            width: 30
        }
    })

    return(
    <Card>
        <View>
            <Image></Image>
        </View>
        <View>
            <Image style={styles.languageFlag} source={require('../assets/spain.png')}/>
            <Text category='h6'>{lesson_name}</Text>
            <Text category='s1'>{lesson_description}</Text>
        </View>
    </Card>)
}

export default LessonCard