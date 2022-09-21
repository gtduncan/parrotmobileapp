import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Input, Button, Card, Text, CheckBox } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SigninPage = ({stylingColors, navigation}) => {

    const [checked, setChecked] = React.useState(false);

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 150,
          paddingLeft: 20,
          paddingRight: 20,
          flexDirection: "column",
          backgroundColor: stylingColors.backgroundColor,
        },
        greetingContainer: {
            flex: 4
        },
        greetingHeader: {
            paddingBottom: 15
        },
        inputContainer: {
            flex: 9
        },
        fields: {
            paddingBottom: 30
        },
        buttonContainer: {
            flex: 12
        }
    })
    return(
        <View style={styles.container}>
        <View style={styles.greetingContainer}>
            <Text style={styles.greetingHeader} category='h3'>Welcome back!</Text>
            <Text style={styles.greetingSub}  category='s1'>Don't have an account? Create one</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input label='Email' style={styles.fields}placeholder='Email'></Input>
          <Input label='Password' style={styles.fields}returnKeyType='go' secureTextEntry={true} placeholder='Password'></Input>
           <CheckBox checked={checked} style={styles.fields}onChange={()=> setChecked(!checked)}>Remember Me</CheckBox>
        </View>
        <View style={styles.buttonContainer}>
            <Button onPress={() => navigation.navigate('Home')}>Sign In</Button>
        </View>
        </View>
        )
}

export default SigninPage