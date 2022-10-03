import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';

const GiftCard = () => {
    
    const styles = StyleSheet.create({
        gift: {
          width: 100,
          height: 100
        }})

    return(
        <Card>
            <Image style={styles.gift} source="../assets/gifticon.png"></Image>
        </Card>
    )
}

export default GiftCard