import { View, Text, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';
import Activity from '../DataBaseFetch/FetchingActivity';

const Signin = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "407616728383-u21l0fvec03mvgk8mdrm4dascd8d0ri9.apps.googleusercontent.com",
        })

    }, [])

    async function onGoogleButtonPress() {
        try {

            await GoogleSignin.hasPlayServices();
            const meta = await GoogleSignin.signIn();
            setLoading(true)
            const googleCredential = auth.GoogleAuthProvider.credential(meta.idToken);
            await auth().signInWithCredential(googleCredential)
            setLoading(false)
        } catch (error) {
            if (error?.code == statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert('SignIn Cancelled')
            } else if (error?.code === statusCodes.IN_PROGRESS) {

            } else if (error?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('Play service not detected')
            } else {
                Alert.alert('Error occured while signing in', error?.code)
            }
            setLoading(false)
           

        }
        
    }
    return (
        <View style={{ flex: 1 }}>
            {
                loading ?
                    <Activity />
                    :
                    <View style={{ alignItems: 'center',justifyContent:'center',flex:1 }}>
                        <Text style={{ color: 'black' }}>Fast And Secure</Text>
                        <GoogleSigninButton onPress={() => onGoogleButtonPress()}
                            color={GoogleSigninButton.Color.Dark}
                            style={styles.SignInBtn}
                            disabled={false} />
                    </View>

            }
        </View>
    )





}
const styles = StyleSheet.create({
    SignInBtn: {
        width: 250,
        height: 50,
    }
})


export default Signin