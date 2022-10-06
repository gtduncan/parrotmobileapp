import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import Sound from 'react-native-sound';
import axios from 'axios';
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

const GiftCard = ({user, setUser, setInGift, rarity}) => {

    const styles = StyleSheet.create({
        card: {
          marginTop: 20,
          marginLeft: 18,
          width: 180,
          height: 260
        },
        gift: {
          width: 100,
          height: 120,
          alignSelf:'center'
        }, pointImage: {
            marginRight: 5,
            height: 20,
            width: 20,
          },
          footerContainer: {
            flex:1,
            flexDirection: 'row',
            alignSelf: 'center'
          },
          commonText: {
            fontFamily: 'Nunito'
          }
        })
    
        const setGift = () => {
            if(user.points >= 50) {
                setInGift(rarity)
                axios.patch(`https://5b7c-2603-7000-483f-b6f4-7134-1076-81cd-4c04.ngrok.io/users/1`, {
                    points: user.points - 50
                }).then(res => {
                    console.log(res.data)
                    setUser(res.data)
                  })
                  .catch(e => console.log(e.message))
            }
            else
            {
                incorrectSound.play()
            }
        }

    const Footer = (props) => {
        const whichCost = () => {
            if(rarity==='Common') {
                return(
                <Text category='s1' appearance='hint'>50</Text>)
                }
            if(rarity==='Rare') {
                    return(
                    <Text category='s1' appearance='hint'>100</Text>)
        }
        }
        
        return (
            <View {...props} style={[props.style, styles.footerContainer]}>
                <Image style={styles.pointImage} source={require('../assets/dollar.png')}/>
                {whichCost()}
            </View>
          )}
    
          const Header = (props) => (
            <View {...props} style={[props.style, styles.footerContainer]}>
                <Text style={styles.commonText} category='s1'>{rarity}</Text>
            </View>
          );
    if(rarity==='Common') {
        return(
            <Card onPress={setGift} style={styles.card} header={Header} footer={Footer}>
                <Image style={styles.gift} source={require("../assets/gifticon2.png")}></Image>
            </Card>
        )
    }
    if(rarity==='Rare') {
        return(
            <Card onPress={setGift} style={styles.card} header={Header} footer={Footer}>
                <Image style={styles.gift} source={require("../assets/gifticon1.png")}></Image>
            </Card>
        )
    }
}

export default GiftCard