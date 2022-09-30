import { StyleSheet, View, Image } from 'react-native';
import { Card, Button, IconRegistry, ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const CoinHeader = () => {
    const styles = StyleSheet.create({
        coinContainer: {
            flex: 1,
            width: 100,
            flexDirection: "row"
        },
        coinImage: {
            flex: 1,
            width: 20,
            height: 20
        },
        coinsLayout: {
            flex: 1
        }
    })
    return( <View styles={styles.coinContainer}>
      <Image style={styles.coinImage} source={require('../assets/dollar.png')}/>
    <Text style={styles.coinsLayout} category='s1'>11</Text>
    </View>)
  }

export default CoinHeader