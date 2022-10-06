import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';

const GiftCard = ({user, setInGift, rarity}) => {

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
            // if(user.points >= 50) {
                setInGift(rarity)
            // }
            // else
            // {
            //     alert("You don't have enough coins!")
            // }
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