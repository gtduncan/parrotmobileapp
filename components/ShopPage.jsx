import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import GiftCard from './GiftCard';

const ShopPage = () => {

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            color: '#FFFFFF'
        },
        header: {
            marginTop: 20,
            marginLeft: 20
        },
        subheader: {
            marginTop: 30,
            marginLeft: 20,
        }, 
        parrotContainer: {
            paddingTop: 150,
            flex: 4,
            alignItems: 'center',
            justifyContent: 'center',
          },
          parrotImage: {
            width: 235,
            height: 235,
          },
          purchaseText: {
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
        <Image style={styles.parrotImage} source={require('../assets/ParrotIcon.png')}/>
    </View>
    <Text category='h6' appearance='hint' style={styles.purchaseText}>Open a box to collect parrots!</Text>
    <Text style={styles.subheader} category='h6'>Buy</Text>
    <GiftCard/>
    </SafeAreaView>
)
}

export default ShopPage