import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useEffect } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';
import styles from '../Style/Styles';

const Signin = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "407616728383-u21l0fvec03mvgk8mdrm4dascd8d0ri9.apps.googleusercontent.com",
        })

    }, [])

    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices();
            const meta = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(meta.idToken);
            await auth().signInWithCredential(googleCredential)
        } catch (error) {
            if (error?.code == statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert('SignIn Cancelled')
            } else if (error?.code === statusCodes.IN_PROGRESS) {

            } else if (error?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('Play service not detected')
            } else {
                Alert.alert('Error occured while signing in',error?.code)
            }

        }



    }




    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Fast And Secure</Text>
            <TouchableOpacity onPress={onGoogleButtonPress} style={styles.signIn}>
                <Image source={require('../Assets/Images/google.png')} style={styles.googleImg} />
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signin