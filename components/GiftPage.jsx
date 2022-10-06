import React, {useState, useEffect} from 'react'
import { Button, Input, Card, Icon, Text, Modal} from '@ui-kitten/components';
import { View, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import Parrots from '../assets/CommonParrots/index.js';
import Sound from 'react-native-sound'
import axios from 'axios';
import complete from '../assets/complete.mp3'
import drum from '../assets/drumroll.mp3'



const completeSound = new Sound(complete, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        completeSound.getDuration() +
        'number of channels: ' +
        completeSound.getNumberOfChannels(),
    );
  });

  const drumSound = new Sound(drum, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        drumSound.getDuration() +
        'number of channels: ' +
        drumSound.getNumberOfChannels(),
    );
  });

const GiftPage = ({setUser, setInGift, inGift}) => {

    const [opened, setOpened] = useState(false)
    const [openedParrot, setOpenedParrot] = useState('')
    const [visible, setVisible] = useState(false);
    const [parrotName, setParrotName] = useState('')

    const styles = StyleSheet.create({
        container: {
        },
        gift: {
          marginTop: '50%',
          width: 200,
          height: 240,
          alignSelf:'center'
        },
        text: {
            fontFamily: 'Nunito',
            marginTop: 50,
            alignSelf: 'center'
        },
        parrot:{
        marginTop: '50%',
        width: 200,
        height: 200,
        alignSelf:'center'
        },
        backdrop: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        modal: {
            width: 300
        },
        inputField: {
            marginTop: 20,
            marginBottom: 20
        },
        congrats: {
            fontFamily: 'Nunito'
        }
        })
    
    const getRandomParrot = () => {
            if(openedParrot === '')
            {
                const randomIndex = Math.floor(Math.random() * Parrots.length);
                const item = Parrots[randomIndex];
                setOpenedParrot(item)
            }
    }

    const handleOpen = () => {
        getRandomParrot()
        drumSound.play()
        setTimeout(() => {
            setOpened(true)
            completeSound.play()
        }, 2000)
        setTimeout(() => {
            setVisible(true)
        }, 4500)
    }

    const adoptParrot = () => {
        axios.post(`https://5b7c-2603-7000-483f-b6f4-7134-1076-81cd-4c04.ngrok.io/parrots/`, {
            user_id: 1,
            name: parrotName.trim(),
            img_src: openedParrot.name,
            rarity: inGift
        }).then(res => {
            console.log(res.data)
            axios.get('https://5b7c-2603-7000-483f-b6f4-7134-1076-81cd-4c04.ngrok.io/users/1')
                .then(res2 => {
            console.log(res2.data)
            setUser(res2.data)
                }).catch(e=> console.log(e.message));
                setInGift('')
          })
          .catch(e => console.log(e.message))
        
    }

    const whichImage = () => {
        console.log(opened)
        if(inGift==='Common') {
            if(opened === false)
            {
                return(
                    <TouchableOpacity onPress={handleOpen}>
                            <View>       
                            <Image style={styles.gift} source={require("../assets/gifticon2.png")}></Image>
                            </View>
                    </TouchableOpacity>
                    )
            }
            if(opened === true)
            {
                return(<View>
                    <Image style={styles.parrot} source={openedParrot.src}></Image>
                </View>)
            }
        }
        if(inGift==='Rare') {
            return(<Image style={styles.gift} source={require("../assets/gifticon1.png")}></Image>)
        }
    }
    return(
    <SafeAreaView style={styles.container}>
    {whichImage()}
    <View>
        <Text category='h5' appearance='hint' style={styles.text}>Click to open your parrot!</Text>
    </View>
    <Modal
        visible={visible}
        style={styles.modal}
        backdropStyle={styles.backdrop}>
        <Card disabled={true}>
          <Text style={styles.congrats} category='h6'>Congratulations!</Text>
          <Input style={styles.inputField} onChangeText={nextValue => { setParrotName(nextValue); console.log(nextValue)}}
            value={parrotName}label='Name your parrot:'></Input>
          <Button onPress={adoptParrot}>Adopt</Button>
        </Card>
      </Modal>
    </SafeAreaView>
)
}

export default GiftPage