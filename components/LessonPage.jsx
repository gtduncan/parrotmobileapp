import React, {useEffect, useState} from 'react'
import { StyleSheet, View, TextInput, Image, SafeAreaView } from 'react-native';
import { Popover, Card, Button, IconRegistry, ApplicationProvider, Layout, Input, Text } from '@ui-kitten/components';
import axios from 'axios'
import Sound from 'react-native-sound'
import * as Progress from 'react-native-progress'
import ding from '../assets/correct-6033.mp3'
import incorrect from '../assets/incorrect.mp3'
import complete from '../assets/complete.mp3'


Sound.setCategory('Playback');

const dingSound = new Sound(ding, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        dingSound.getDuration() +
        'number of channels: ' +
        dingSound.getNumberOfChannels(),
    );
  });


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

const LessonPage = ({user, setUser, navigation, inLesson}) => {

    const [visible, setVisible] = useState(false);
    const [lessonData, setLessonData] = useState({})
    const [currentStage, setCurrentStage] = useState(0)
    const [currentStageData, setCurrentStageData] = useState({})
    const [userAnswer, setUserAnswer] = useState("")
    const [isCorrect, setIsCorrect] = useState('neutral')

    const handleChange = (e) => {
        setUserAnswer(e.target.value)
        console.log(userAnswer)
    }

    const checkAnswer = () => {
        if(userAnswer === currentStageData.answer) {
            console.log('correct block')
            setIsCorrect(true)
            axios.patch(`https://371e-2603-7000-483f-b6f4-2c74-e63a-f3b7-c4eb.ngrok.io/lessons/${inLesson}`, {
                current_stage: currentStage+1
            }).then(res => {
                console.log(res.data)
              })
              .catch(e => console.log(e.message))
              setTimeout(()=> {setCurrentStage(currentStage => currentStage + 1),
                setIsCorrect('neutral'), setUserAnswer('')}, 500)
           if(currentStage < 9) {
            dingSound.play();
            }
            else{
                console.log('Points:' + user.points)
                completeSound.play()
                axios.patch(`https://371e-2603-7000-483f-b6f4-2c74-e63a-f3b7-c4eb.ngrok.io/users/1`, {
                    points: user.points + 10
                }).then(res => {
                    console.log(res.data)
                    setUser(res.data)
                  })
                  .catch(e => console.log(e.message))
                alert('completed lesson')
            }
        }
        else {
            console.log('incorrect block')
            incorrectSound.play();
            setIsCorrect(false)
            setTimeout(()=> {setIsCorrect('neutral'), setUserAnswer('')}, 500)
        }
    }

    const styles = StyleSheet.create({
        inputCorrect: {
            width: '75%',
            borderColor: '#00ab41',
            borderWidth: 2
        },
        inputIncorrect: {
            width: '75%',
            borderColor: '#ee2400',
            borderWidth: 2
        },
        inputNeutral: {
            width: '75%'
        },
        cardContainer: {
            paddingTop: '8%'
        },
        card: {
            marginTop: 15,
            width: '90%',
            paddingTop: '5%',
            paddingBottom: '4%',
            alignSelf: 'center'
        },
        progressBar: {
            alignSelf: 'center',
            marginTop: 25
        },
        header: {
            alignSelf: 'center',
            paddingTop: '6%'
        },
        pointImage: {
            height: 20,
            width: 20,
          },
        pointText: {
            paddingLeft: 5,
            height: 25,
            width: 60
        },
        pointView: {
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'center',
            paddingTop: 10,
            paddingLeft: 25,
            paddingBottom: 10
        },
        progressPercent: {
            alignSelf: 'center',
            marginTop: 8
        },
        answerHint: {
            padding: 10
        }
    })

    const Header = (props) => {
        const headerText = () => {
            return(<Text category='h6' onPress={()=> setVisible(true)}>{currentStageData?.question}</Text>
            )
        }
        return(
        <View {...props}>
            <Popover anchor={headerText}
                onBackdropPress={() => setVisible(false)}
                visible={visible}
                placement={'bottom start'}>
                    <Text category='s2' appearance='hint' style={styles.answerHint}>{currentStageData?.answer}</Text>
            </Popover>
        </View>)
    };

      const Footer = (props) => (
        <View {...props} style={[props.style, styles.footerContainer]}>
          <Button
            onPress={() => checkAnswer()}
            style={styles.footerControl}
            size='medium'>
            Check
          </Button>
        </View>
      );

    useEffect(()=>{
        axios.get(`https://371e-2603-7000-483f-b6f4-2c74-e63a-f3b7-c4eb.ngrok.io/lessons/${inLesson}`)
          .then(res => {
            console.log(res.data)
            const data = res.data
            setLessonData(data)
            setCurrentStage(data.current_stage)
            const stageData = data.stages
            setCurrentStageData(stageData[data.current_stage])
          })
          .catch(e => console.log(e.message))
      }, [currentStage])

      const colorBar = () => {
        if(isCorrect !== 'null') {
            if(isCorrect === true) {
                return <Input
                label='Translate to English:'
                style={styles.inputCorrect}
            onChangeText={nextValue => { setUserAnswer(nextValue); console.log(nextValue)}}
            value={userAnswer}/>
            }
            if(isCorrect === false) {
                return <Input
                label='Translate to English:'
                style={styles.inputIncorrect}
            onChangeText={nextValue => { setUserAnswer(nextValue); console.log(nextValue)}}
            value={userAnswer}/>
            }
        }
        if(isCorrect === 'neutral')
        {
            return <Input
            label='Translate to English:'
            style={styles.inputNeutral}
        onChangeText={nextValue => { setUserAnswer(nextValue); console.log(nextValue)}}
        value={userAnswer}/>        
    }
      }


    return(
        <SafeAreaView>
            <View>
        <Progress.Bar color={'#3E40BB'} unfilledColor={'#D9DAFB'} style={styles.progressBar} progress={currentStage/10} height={12} width={350} />
        <Text appearance='hint' style={styles.progressPercent} category='s1'>{`${currentStage/10*100}%`}</Text>
        </View>
        <View>
            <Text style={styles.header} category='h3'>{lessonData.lesson_name}</Text>
            <View style={styles.pointView}>
            <Image style={styles.pointImage} source={require('../assets/dollar.png')}/>
            <Text appearance='hint' style={styles.pointText} category='h6'>10</Text>
            </View>
        </View>
        <View style={styles.cardContainer}>
            <Card style={styles.card} header={Header} footer={Footer}>
            {colorBar()}
    </Card>          
        </View>
        </SafeAreaView>
    )
}

export default LessonPage