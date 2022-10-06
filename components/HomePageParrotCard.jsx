import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import Parrots from '../assets/CommonParrots/index.js';
import Sound from 'react-native-sound'
import squawk from '../assets/squawk.mp3'

Sound.setCategory('Playback');

const squawkSound = new Sound(squawk, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        squawkSound.getDuration() +
        'number of channels: ' +
        squawkSound.getNumberOfChannels(),
    );
  });

const HomePageParrotCard = ({parrot}) => {

    const styles = StyleSheet.create({
        card: {
            marginTop: 20,
            height: 220,
            flex: 1,
            marginLeft: 15,
            marginRight: 15
        },
        languageFlag: {
            height: 30,
            width: 30,
            marginBottom: 10,
            alignSelf: 'center'
        },
        nameText: {
            fontFamily: 'Nunito'
        },
        parrotImage: {
            height: 150,
            width: 150,
            alignSelf: 'center'
        }
    })

    const findPicture = () => {
        for(let i=0; i<Parrots.length; i++) {
            if(Parrots[i].name === parrot.img_src) {
                return Parrots[i].src
            }
        }
    }

    return(
    <Card onPress={()=> squawkSound.play()} style={styles.card}>
    <View>
    <Text style={styles.nameText} category="h6">{parrot.name}</Text>
    </View>
    <View>
        <Image style={styles.parrotImage} source={findPicture()}/>
    </View>
    </Card>
)
}

export default HomePageParrotCard