import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import GiftCard from './GiftCard';

const ShopPage = ({user, setInGift}) => {

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            color: '#FFFFFF'
        },
        header: {
            fontFamily: 'Nunito',
            marginTop: 20,
            marginLeft: 20
        },
        subheader: {
            fontFamily: 'Nunito',
            marginTop: 30,
            marginLeft: 20,
        }, 
        giftContainer: {
            flex: 1,
            flexDirection: 'row'
        },
        parrotContainer: {
            paddingTop: 150,
            flex: 4,
            alignItems: 'center',
            justifyContent: 'center',
          },
          parrotImage: {
            width: 335,
            height: 220,
          },
          purchaseText: {
            fontFamily: 'Nunito',
            marginTop: 150,
            alignSelf: 'center'
          }
        })
    
return(
    <SafeAreaView>
    <Text category='h3' style={styles.header}>
        Shop
    </Text>
    <View style={styles.parrotContainer}>
        <Image style={styles.parrotImage} source={require('../assets/shoppagegraphic.png')}/>
    </View>
    <Text category='h6' appearance='hint' style={styles.purchaseText}>Open a box to collect parrots!</Text>
    <Text style={styles.subheader} category='h6'>Buy</Text>
    <View style={styles.giftContainer}>
    <GiftCard user={user} setInGift={setInGift} rarity={'Common'}/>
    <GiftCard user={user} setInGift={setInGift} rarity={'Rare'}/>
    </View>
    </SafeAreaView>
)
}

export default ShopPage